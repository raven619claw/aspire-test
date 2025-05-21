import { useEffect } from "react";
import { useApi } from "@src/services/api/useApi";
import { useCardStore } from "@src/store/card";

export const useCardData = () => {
  const { data, loading, error } = useApi("/cards");
  const setCards = useCardStore((s) => s.setCards);
  const cards = useCardStore((s) => s.cards);

  useEffect(() => {
    if (data && Array.isArray(data.cards)) {
      setCards(data.cards);
    }
  }, [data, setCards]);

  return { cards, loading, error };
};
