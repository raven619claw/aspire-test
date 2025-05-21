import { useApi } from "@src/services/api/useApi";
import { CardData, useCardStore } from "@src/store/card";
import { useEffect, useState } from "react";

export const useAddCard = () => {
  const { data, loading, error, fetch } = useApi<{
    success: boolean;
    message: string;
  }>("/addCard", true);
  const setCards = useCardStore((s) => s.setCards);
  const [dummyCard, setDummyCard] = useState<any>();
  const addCard = (cardData: Partial<CardData>) => {
    fetch();
    setDummyCard(cardData);
  };
  useEffect(() => {
    if (data && data.success) {
      //adding this here so that it can be used to update state in local storage as well
      //ideally this wont be done and the cards api would just be called again to fetch the updated cards
      const currentCards = useCardStore.getState().cards;
      setCards([
        ...currentCards,
        {
          ...dummyCard,
          number: "1234123412341234",
          cvv: "123",
          cardType: "debit",
          type: "MasterCard",
          validity: "20/10",
          status: "active",
          id: currentCards.length.toString(),
        },
      ]);
    }
  }, [data]);
  return { data, loading, error, fetch: addCard };
};
