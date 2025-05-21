import React, { useEffect, useState } from "react";
import { Button } from "../Button";
import {
  CarouselContainer,
  AnimatedCardWrapper,
  DotsContainer,
  Dot,
  ShowHideBtn,
} from "./styles";
import { CardData } from "@src/store/card";
import EyeIcon from "@src/assets/icons/iconography/eye.svg";

import { IconContainer } from "./styles";
import { Card } from "../Card";

interface CarouselProps {
  cards: CardData[];
  setActiveCard: (card: CardData["id"]) => void;
}

export const CardCarousel: React.FC<CarouselProps> = ({
  cards,
  setActiveCard,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const currentCard = cards[currentIndex];

  useEffect(() => {
    setActiveCard(currentCard.id);
  }, [currentCard]);

  const handleDotClick = (index: number) => {
    if (index === currentIndex) return;
    setDirection(index > currentIndex ? "right" : "left");
    setCurrentIndex(index);
    setShowDetails(false);
  };

  return (
    <CarouselContainer>
      <ShowHideBtn>
        <Button btnType="text" onClick={() => setShowDetails((v) => !v)}>
          <IconContainer>
            <EyeIcon />
            {showDetails ? "Hide card number" : "Show card number"}
          </IconContainer>
        </Button>
      </ShowHideBtn>

      <AnimatedCardWrapper key={currentCard.id} direction={direction}>
        <Card currentCard={currentCard} showDetails={showDetails}/>
      </AnimatedCardWrapper>

      <DotsContainer>
        {cards.map((_, index) => (
          <Dot
            key={index}
            active={index === currentIndex}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to card ${index + 1}`}
          />
        ))}
      </DotsContainer>
    </CarouselContainer>
  );
};
