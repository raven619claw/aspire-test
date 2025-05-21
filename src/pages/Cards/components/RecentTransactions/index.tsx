import { useCardStore } from "@src/store/card";
import { useCardTransaction } from "@src/store/card/useCardTransaction";
import { useEffect } from "react";
import {
  TransactionContainer,
  TransactionsContainer,
  ViewAllTransactionsButton,
} from "./styles";
import { Transactions } from "@src/components/Transactions";

export const RecentTransactions: React.FC<{ currentCard: string }> = ({
  currentCard,
}) => {
  const { transactions, loading, error } = useCardTransaction({
    cardId: currentCard,
  });
  useEffect(() => {}, [currentCard]);

  return (
    <TransactionContainer>
      <TransactionsContainer>
        <Transactions loading={loading} transactions={transactions} />
      </TransactionsContainer>
      {!error && !loading && !!transactions?.length && (
        <ViewAllTransactionsButton>
          View all card transactions
        </ViewAllTransactionsButton>
      )}
    </TransactionContainer>
  );
};
