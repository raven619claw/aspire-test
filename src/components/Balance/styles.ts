import styled from "styled-components";

export const BalanceText = styled.h3`
  font-size: 14px;
  color: #222222;
  font-weight: normal;
  margin-bottom: 16px;
`;

export const BalanceContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CurrencyText = styled.div`
  width: 40px;
  height: 24px;
  margin-right: 12px;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 4px;
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  line-height: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BalanceAmt = styled.span`
  font-size: 26px;
  font-weight: 500;
  line-height: 16px;
`;

export const BalanceAmtLoading = styled.div`
  height: 24px;
  width: 67px;
`;

export const BalanceWrapper = styled.div`
  width: 120px;
`;
