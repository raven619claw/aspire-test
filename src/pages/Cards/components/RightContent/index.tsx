import { ExpandableSection } from "@src/components/ExpandableContent";
import CardDetail from "@assets/icons/iconography/card-details.svg";
import Transactions from "@assets/icons/iconography/transactions.svg";

import { RightContentContainer } from "./styles";
import { useState } from "react";
import { CardDetails } from "../CardDetails";
import { RecentTransactions } from "../RecentTransactions";

export const RightContent: React.FC<{ currentCard: string }> = ({
  currentCard,
}) => {
  const [openId, setOpenId] = useState("transactions");
  return (
    <RightContentContainer>
      <ExpandableSection
        id="details"
        openId={openId}
        setOpenId={(id) => id && setOpenId(id)}
        title="Card Details"
        LeftIcon={<CardDetail />}
      >
        <CardDetails currentCard={currentCard} />
      </ExpandableSection>
      <ExpandableSection
        id="transactions"
        openId={openId}
        setOpenId={(id) => id && setOpenId(id)}
        title="Recent Transactions"
        LeftIcon={<Transactions />}
      >
        <RecentTransactions currentCard={currentCard} />
      </ExpandableSection>
    </RightContentContainer>
  );
};
