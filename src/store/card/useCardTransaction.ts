import { useApi } from "@src/services/api/useApi";
import { CardData, useCardStore } from "@src/store/card";
import { useEffect, useState } from "react";

export const useCardTransaction = ({ cardId }: { cardId: CardData["id"] }) => {
  const fetchUrl = `/transactions/${cardId}`;
  const { data, loading, error, fetch } = useApi<{
    transactions: CardData["transactions"];
  }>(fetchUrl, true);
  const activeCard = useCardStore((s) => s.cards.find((c) => c.id === cardId));
  useEffect(() => {
    cardId && fetch(fetchUrl);
  }, [cardId]);

  return { transactions: data?.transactions, loading, error, fetch } as const;
};
