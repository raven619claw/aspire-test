import { useApi } from "@src/services/api/useApi";
import { useCardStore } from "@src/store/card";
import { useEffect, useState } from "react";

export const useUnFreezeCard = () => {
  const {
    data: unfreezeData,
    loading: unfreezeLoading,
    error,
    fetch,
  } = useApi<{ success: boolean; message: string }>("/unfreezeCard", true);
  const [cardIdToUnFreeze, setCardIdToUnFreeze] = useState<string>("");
  const toggleCardStatus = useCardStore((s) => s.toggleFreezeCard);
  const unfreezeCard = (cardId: string) => {
    setCardIdToUnFreeze(cardId);
  };
  useEffect(() => {
    //@ts-ignore
    cardIdToUnFreeze && !unfreezeLoading && fetch();
  }, [cardIdToUnFreeze]);

  useEffect(() => {
    if (unfreezeData && unfreezeData.success) {
      toggleCardStatus(cardIdToUnFreeze);
      setCardIdToUnFreeze("");
    }
  }, [unfreezeData]);

  return { unfreezeData, unfreezeCard, unfreezeLoading };
};
