import { CardData } from "@src/store/card";
import AspireIcon from "@src/assets/logo/aspire.svg";
import VisaIcon from "@src/assets/logo/visa.svg";
import MCIcon from "@src/assets/logo/mc.svg";
import {
  CardContainer,
  CardHeader,
  CardDetails,
  CardType,
  CompanyLogo,
} from "./styles";
import { CreditCardDisplay } from "./RenderNumbers";

export const Card: React.FC<{
  currentCard: CardData;
  showDetails: boolean;
}> = ({ currentCard, showDetails }) => {
  const cvvToShow = showDetails ? currentCard.cvv : "***";
  return (
    <CardContainer disabled={currentCard.status !== "active"}>
      <CompanyLogo>
        <AspireIcon />
      </CompanyLogo>
      <CardHeader>{currentCard.name}</CardHeader>
      <CreditCardDisplay number={currentCard.number} hide={!showDetails} />
      <CardDetails>
        <div>Thru: {currentCard.validity}</div>
        <div>CVV: {cvvToShow}</div>
      </CardDetails>
      <CardType>
        {currentCard.type === "Visa" ? <VisaIcon /> : <MCIcon />}
      </CardType>
    </CardContainer>
  );
};
