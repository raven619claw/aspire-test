import styled from "styled-components";

export const StyledButton = styled.button<{
  btnType: "primary" | "secondary" | "text";
}>`
  color: #fff;
  ${({ btnType }) => {
    switch (btnType) {
      case "secondary":
        return "background-color: #325BAF;max-width: 200px;";
      case "text":
        return "color:#01D167;width: auto;";
      default:
        return "background-color: #01D167;width: 100%;";
    }
  }}

  height: 35px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  border-radius: 4px;
  padding: 0px 12px;
  border: none;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconWrapper = styled.div`
  margin-right: 8px;
  display: inline-flex;
`;
