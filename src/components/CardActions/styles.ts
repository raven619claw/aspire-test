import styled from "styled-components";

export const CardActionsContainer = styled.div`
  border-radius: 16px;
  background: ${({ theme }) => theme.colors.tileBg};
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 116px;
  width: 100%;
  padding: 0px 27px;
  gap: 5px;
`;

export const CardAction = styled.button<{ disabled?: boolean }>`
  ${({ disabled }) =>
    disabled ? "filter: grayscale(100%); cursor:progress;" : "cursor: pointer;"}
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 13px;
  color: #0c365a;
  min-width: 70px;
`;

export const IconContainer = styled.div`
  margin-bottom: 7px;
`;
