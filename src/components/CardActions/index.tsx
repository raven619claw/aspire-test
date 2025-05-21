import { CardData } from "@src/store/card";
import { CardAction, CardActionsContainer, IconContainer } from "./styles";

export type CardAction = {
  label: string;
  id: string;
  Icon: React.FC<React.SVGProps<SVGSVGElement>>;
  disabled?: boolean;
};
interface CardActionsProps {
  currentCard: CardData["id"];
  cardActions: CardAction[];
  onActionClick: (actionId: string) => void;
}

export const CardActions: React.FC<CardActionsProps> = ({
  cardActions,
  onActionClick,
}) => {
  return (
    <CardActionsContainer>
      {cardActions.map((action) => (
        <CardAction
          key={action.id}
          onClick={() => onActionClick(action.id)}
          disabled={action.disabled}
        >
          <IconContainer>
            <action.Icon />
          </IconContainer>
          <span>{action.label}</span>
        </CardAction>
      ))}
    </CardActionsContainer>
  );
};
