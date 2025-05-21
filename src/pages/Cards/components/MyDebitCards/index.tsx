import { CardCarousel } from "@src/components/CardsCarousel";
import { DebitCardsContainer, LHSContainer } from "./styles";
import { useCardData } from "@src/store/card/useCardData";
import { useState } from "react";
import { DebitCardActions } from "../DebitCardActions";
import { RightContent } from "../RightContent";
import { Shimmer } from "@src/components/Loader/Shimmer";

const DummyCard = () => (
  <DebitCardsContainer>
    <LHSContainer>
      <div style={{ width: "414px", height: "250px" }}>
        <Shimmer />
      </div>
      <div style={{ width: "414px", height: "116px", marginTop: "20px" }}>
        <Shimmer />
      </div>
    </LHSContainer>
    <div>
      <div style={{ width: "366px", height: "72px" }}>
        <Shimmer />
      </div>
      <div style={{ width: "366px", height: "72px", marginTop: "20px" }}>
        <Shimmer />
      </div>
    </div>
  </DebitCardsContainer>
);

export const MyDebitCards = () => {
  const { loading, cards } = useCardData();
  const [currentCard, setCurrentCard] = useState("");
  if (loading && !cards.length) {
    return <DummyCard />;
  }
  if (!cards.length) {
    return "No cards found";
  }

  return (
    <DebitCardsContainer>
      <LHSContainer>
        <CardCarousel
          cards={cards}
          setActiveCard={(id) => setCurrentCard(id)}
        />
        <DebitCardActions currentCard={currentCard} cards={cards} />
      </LHSContainer>
      <RightContent currentCard={currentCard} />
    </DebitCardsContainer>
  );
};
