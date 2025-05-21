import { CardData } from "@src/store/card";
import { useCallback } from "react";
import { CardAction, CardActions } from "@src/components/CardActions";
import FreezeCard from "@assets/icons/cardActions/freeze.svg";
import Deactivate from "@assets/icons/cardActions/deactivate.svg";
import Gpay from "@assets/icons/cardActions/gpay.svg";
import Limit from "@assets/icons/cardActions/limit.svg";
import Replace from "@assets/icons/cardActions/replace.svg";
import { useFreezeCard } from "@src/store/card/useFreezeCard";
import { useUnFreezeCard } from "@src/store/card/useUnFreezeCard";

interface DebitCardActionsProps {
  currentCard: CardData["id"];
  cards: CardData[];
}
//actions list which give the id which is used to decide wht function to run
const cardActions: CardAction[] = [
  {
    label: "Freeze card",
    id: "freeze",
    Icon: FreezeCard,
  },
  {
    label: "Unfreeze card",
    id: "unfreeze",
    Icon: FreezeCard,
  },
  {
    label: "Set spend limit",
    id: "limit",
    Icon: Limit,
  },
  {
    label: "Add to GPay",
    id: "gpay",
    Icon: Gpay,
  },
  {
    label: "Replace Card",
    id: "replace",
    Icon: Replace,
  },
  {
    label: "Cancel card",
    id: "cancel",
    Icon: Deactivate,
  },
];

export const DebitCardActions: React.FC<DebitCardActionsProps> = ({
  currentCard,
  cards,
}) => {
  const { freezeCard, freezeData, freezeLoading } = useFreezeCard();
  const { unfreezeCard, unfreezeData, unfreezeLoading } = useUnFreezeCard();
  let cardActionsToShow = [...cardActions];
  if (freezeLoading || unfreezeLoading) {
    cardActionsToShow = cardActionsToShow.map((c) => {
      if (c.id === "freeze" || c.id === "unfreeze") {
        return {
          ...c,
          disabled: true,
        };
      } else {
        return c;
      }
    });
  }
  const currentCardStatus = cards.find((c) => c.id === currentCard)?.status;
  if (currentCardStatus) {
    if (currentCardStatus === "active") {
      cardActionsToShow = cardActionsToShow.filter((c) => c.id !== "unfreeze");
    } else {
      cardActionsToShow = cardActionsToShow.filter((c) => c.id !== "freeze");
    }
  }
  const onActionClick = useCallback(
    (actionId: string) => {
      switch (actionId) {
        case "freeze":
          freezeCard(currentCard);
          break;
        case "unfreeze":
          unfreezeCard(currentCard);
          break;
      }
    },
    [currentCard]
  );

  return (
    <CardActions
      currentCard={currentCard}
      cardActions={cardActionsToShow}
      onActionClick={onActionClick}
    />
  );
};
