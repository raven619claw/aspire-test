import { IconWrapper, StyledButton } from "./styles";
import PlusIcon from "@src/assets/icons/button/box.svg";

type ButtonProps = {
  btnType?: "primary" | "secondary" | "text";
  type?: HTMLButtonElement["type"];
  icon?: "plus" | "add";
  onClick: () => void;
  children: React.ReactNode;
};
const IconMapping: Record<NonNullable<ButtonProps["icon"]>, React.FC> = {
  plus: PlusIcon,
  add: PlusIcon,
};

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  icon,
  type,
  btnType = "primary",
}) => {
  const Icon = icon ? IconMapping[icon] : () => null;
  return (
    <StyledButton btnType={btnType} type={type} onClick={onClick}>
      <IconWrapper>
        <Icon />
      </IconWrapper>
      <span>{children}</span>
    </StyledButton>
  );
};
