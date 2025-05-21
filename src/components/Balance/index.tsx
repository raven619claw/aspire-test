import { useApi } from "@src/services/api/useApi";
import {
  BalanceAmt,
  BalanceContainer,
  BalanceText,
  CurrencyText,
  BalanceAmtLoading,
  BalanceWrapper,
} from "./styles";
import { Shimmer } from "../Loader/Shimmer";
import { Button } from "../Button";

export const Balance = () => {
  const { data, loading, error, retry } = useApi<{
    amount: string;
    currency: string;
  }>("/balance");

  if (loading) {
    return (
      <BalanceWrapper>
        <BalanceText>Available balance</BalanceText>
        <BalanceContainer>
          <CurrencyText>
            <Shimmer />
          </CurrencyText>
          <BalanceAmtLoading>
            <Shimmer />
          </BalanceAmtLoading>
        </BalanceContainer>
      </BalanceWrapper>
    );
  }
  if (error) {
    return (
      <BalanceWrapper>
        <BalanceText>Available balance</BalanceText>
        <Button btnType="secondary" onClick={retry}>
          Reload Balance
        </Button>
      </BalanceWrapper>
    );
  }
  return (
    <BalanceWrapper>
      <BalanceText>Available balance</BalanceText>
      <BalanceContainer>
        <CurrencyText>{data!.currency}</CurrencyText>
        <BalanceAmt>{data!.amount}</BalanceAmt>
      </BalanceContainer>
    </BalanceWrapper>
  );
};
