import { useState, useCallback, useEffect, useRef } from "react";
import { mockResponses } from "./mocks";

interface UseApiResult<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
  retry: () => void;
  fetch: (customPath?: string) => Promise<T>;
  reset: () => void;
}

//dummy API handler for handling calls using react hook with lazy fetch calls
export function useApi<T = any>(path: string, lazy = false): UseApiResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(!lazy);
  const [error, setError] = useState<Error | null>(null);
  const [retryCount, setRetryCount] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const reset = useCallback(() => {
    setData(null);
    setError(null);
    setLoading(false);
  }, []);

  const fetch = useCallback(
    (customPath?: string): Promise<T> => {
      reset(); // clear previous state
      setLoading(true);

      // Clear previous timeout if any
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      return new Promise((resolve, reject) => {
        timeoutRef.current = setTimeout(() => {
          const response = mockResponses[customPath || path];

          if (response) {
            setData(response);
            setLoading(false);
            resolve(response);
          } else {
            const err = new Error(
              `No mock data for path: ${customPath || path}`
            );
            setError(err);
            setLoading(false);
            // reject(err);
          }

          timeoutRef.current = null; // Clear ref after resolution
        }, 3000);
      });
    },
    [path, reset]
  );

  const retry = useCallback(() => {
    setRetryCount((count) => count + 1);
    fetch();
  }, [fetch]);

  useEffect(() => {
    if (!lazy) {
      fetch();
    }

    // Cleanup on unmount
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [lazy, fetch, retryCount]);

  return { data, loading, error, retry, fetch, reset };
}
