import { CardData } from "@src/store/card";
import styled from "styled-components";

export const TransactionContainer = styled.div`
  overflow: auto;
  height: 100%;
  padding: 8px 24px;
`;

export const Transaction = styled.div`
  display: flex;
  height: 108px;
  width: 100%;
  padding: 16px 0px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorder};
  cursor:pointer;
`;

export const TransactionIcon = styled.div<{
  type: CardData["transactions"][number]["orderType"];
}>`
  height: 48px;
  margin-right: 12px;
  width: 48px;
  border-radius: 50%;
  background: ${({ theme, type }) => {
    switch (type) {
      case "entertainment":
        return "#009DFF1A";
      case "food":
        return "#009DFF1A";
      case "shopping":
        return "#009DFF1A";
      case "games":
        return "#009DFF1A";
      case "fuel":
        return "#009DFF1A";
      default:
        return theme.colors.background;
    }
  }};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TransactionDetails = styled.div``;

export const TransactionDate = styled.div`
  color: #aaaaaa;
  font-size: 13px;
  margin-bottom: 12px;
`;
export const TransactionMerchant = styled.div`
  color: #222222;
  font-size: 14px;
  margin-bottom: 4px;
  font-weight: 600;
`;
export const TransactionTypeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TransactionType = styled.div`
  color: ${({ theme }) => theme.colors.textAction};
  font-size: 12px;
`;
export const TransactionTypeIcon = styled.div`
  margin-right: 8px;
  background: ${({ theme }) => theme.colors.textAction};
  width: 24px;
  height: 20px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const TransactionAmount = styled.div<{
  type: CardData["transactions"][number]["type"];
}>`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  margin-left: auto;
  color: ${({ theme, type }) => {
    switch (type) {
      case "debit":
        return "#222222";
        break;
      case "credit":
        return "#01D167";
        break;
      default:
        return "#222222";
        break;
    }
  }};
`;
export const TransactionArrow = styled.div`
  margin-left: 10px;
  margin-top: 2px;
`;
