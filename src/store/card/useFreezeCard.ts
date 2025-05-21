import { useApi } from "@src/services/api/useApi";
import { useCardStore } from "@src/store/card";
import { useEffect, useState } from "react";

export const useFreezeCard = () => {
  const {
    data: freezeData,
    loading: freezeLoading,
    error,
    fetch,
  } = useApi<{ success: boolean; message: string }>("/freezeCard", true);
  const [cardIdToFreeze, setCardIdToFreeze] = useState<string>("");
  const toggleCardStatus = useCardStore((s) => s.toggleFreezeCard);
  const freezeCard = (cardId: string) => {
    setCardIdToFreeze(cardId);
  };
  useEffect(() => {
    //@ts-ignore
    cardIdToFreeze && !freezeLoading && fetch();
  }, [cardIdToFreeze]);

  useEffect(() => {
    if (freezeData && freezeData.success) {
      toggleCardStatus(cardIdToFreeze);
      setCardIdToFreeze("");
    }
  }, [freezeData]);

  return { freezeData, freezeCard, freezeLoading };
};
