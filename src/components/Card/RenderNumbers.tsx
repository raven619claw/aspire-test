import React from "react";
import {
  Container,
  DotGroup,
  DotNumber,
  DigitGroup,
} from "../CardsCarousel/styles";

interface CreditCardDisplayProps {
  number: string; // 16-digit string
  hide?: boolean;
}

export const CreditCardDisplay: React.FC<CreditCardDisplayProps> = ({
  number,
  hide = false,
}) => {
  if (number.length !== 16) return null;

  const visibleDigits = number.slice(12); // last 4 digits
  const dotArray = new Array(12).fill(null);

  if (hide) {
    return (
      <Container>
        <DotGroup>
          {dotArray.map((_, index) => (
            <DotNumber
              key={index}
              withExtraGap={(index + 1) % 4 === 0 && index !== 11} // gap after every 4th dot except last
            />
          ))}
        </DotGroup>
        <DigitGroup>{visibleDigits.match(/.{1,4}/g)?.join(" ")}</DigitGroup>
      </Container>
    );
  }

  const groupedDigits = number.match(/.{1,4}/g) || [];

  return (
    <Container>
      {groupedDigits.map((group, i) => (
        <DigitGroup key={i}>{group}</DigitGroup>
      ))}
    </Container>
  );
};
