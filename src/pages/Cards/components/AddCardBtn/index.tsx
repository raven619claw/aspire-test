import { Button } from "@src/components/Button";

export const AddCardBtn: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <Button btnType="secondary" icon="plus" onClick={onClick}>
      New Card
    </Button>
  );
};
