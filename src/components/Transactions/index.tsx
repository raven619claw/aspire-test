import { CardData } from "@src/store/card";
import {
  Transaction,
  TransactionAmount,
  TransactionArrow,
  TransactionContainer,
  TransactionDate,
  TransactionDetails,
  TransactionIcon,
  TransactionMerchant,
  TransactionType,
  TransactionTypeContainer,
  TransactionTypeIcon,
} from "./styles";
import FileIcon from "@assets/icons/iconography/file-storage.svg";
import FlightIcon from "@assets/icons/iconography/flights.svg";
import MegaIcon from "@assets/icons/iconography/megaphone.svg";
import CreditCard from "@assets/icons/iconography/business-and-finance.svg";
import Next from "@assets/icons/iconography/next.svg";
import { Shimmer } from "../Loader/Shimmer";

const transactionIconMapping: Record<
  CardData["transactions"][number]["orderType"],
  React.ReactElement
> = {
  entertainment: <MegaIcon />,
  food: <FileIcon />,
  shopping: <MegaIcon />,
  travel: <FlightIcon />,
  games: <MegaIcon />,
  fuel: <FlightIcon />,
};

const TransactionShimmer = () => (
  <Transaction>
    <TransactionIcon type="entertainment">
      <Shimmer style={{ height: 40, width: 40, borderRadius: "50%" }} />
    </TransactionIcon>
    <TransactionDetails style={{ width: "200px" }}>
      <TransactionMerchant>
        <Shimmer style={{ height: 16, width: "60%" }} />
      </TransactionMerchant>
      <TransactionDate>
        <Shimmer style={{ height: 14, width: "40%" }} />
      </TransactionDate>
    </TransactionDetails>
    <TransactionAmount type="debit" style={{ width: "80px" }}>
      <Shimmer style={{ height: 20, width: "50%" }} />
    </TransactionAmount>
  </Transaction>
);

export const Transactions: React.FC<{
  error?: Error | null;
  loading: boolean;
  transactions?: CardData["transactions"];
}> = ({ error, loading, transactions }) => {
  if (error) {
    return (
      <TransactionContainer>Error loading transactions</TransactionContainer>
    );
  }
  if (loading) {
    return (
      <TransactionContainer>
        {[...Array(4)].map((_, i) => (
          <TransactionShimmer key={i} />
        ))}
      </TransactionContainer>
    );
  }
  if (!transactions || transactions.length === 0) {
    return (
      <TransactionContainer>No transactions available</TransactionContainer>
    );
  }
  return (
    <TransactionContainer>
      {transactions.map((transaction) => (
        <Transaction key={transaction.id}>
          <TransactionIcon type={transaction.orderType}>
            {transactionIconMapping[transaction.orderType]}
          </TransactionIcon>
          <TransactionDetails>
            <TransactionMerchant>{transaction.merchant}</TransactionMerchant>
            <TransactionDate>
              {Intl.DateTimeFormat("en-GB", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              }).format(new Date(transaction.date))}
            </TransactionDate>
            <TransactionTypeContainer>
              <TransactionTypeIcon>
                <CreditCard />
              </TransactionTypeIcon>
              <TransactionType>
                {transaction.type === "debit"
                  ? "Charged to debit card"
                  : "Refund on debit card"}
              </TransactionType>
            </TransactionTypeContainer>
          </TransactionDetails>
          <TransactionAmount type={transaction.type}>
            {transaction.amount}
            <TransactionArrow>
              <Next />
            </TransactionArrow>
          </TransactionAmount>
        </Transaction>
      ))}
    </TransactionContainer>
  );
};
