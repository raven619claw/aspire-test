import { CARDS_STORAGE_KEY } from "@src/store/card";

type MockData = Record<string, any>;

export const mockResponses: MockData = {
  "/users": [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ],
  "/posts": [
    { id: 101, title: "Hello World" },
    { id: 102, title: "React Rocks" },
  ],
  "/balance": {
    amount: "3,000",
    currency: "S$",
  },
  "/cards": {
    cards: localStorage.getItem(CARDS_STORAGE_KEY) || [
      {
        cardType: "debit",
        id: "card1",
        name: "Ravi Yadav",
        number: "4111111111111234",
        validity: "12/26",
        cvv: "847",
        type: "Visa",
        status: "active",
      },
      {
        cardType: "debit",
        id: "card2",
        name: "Ravi Yadav",
        number: "5500000000005678",
        validity: "03/27",
        cvv: "662",
        type: "MasterCard",
        status: "frozen",
      },
      {
        cardType: "debit",
        id: "card3",
        name: "Ravi Yadav",
        number: "4111111111119876",
        validity: "08/25",
        cvv: "390",
        type: "Visa",
        status: "active",
      },
    ],
  },
  "/addCard": {
    success: true,
    message: "Card added successfully",
  },
  "/freezeCard": {
    success: true,
    message: "Card frozen successfully",
  },
  "/unfreezeCard": {
    success: true,
    message: "Card unfrozen successfully",
  },
  "/transactions/card1": {
    transactions: [
      {
        id: 1,
        date: "2023-10-01",
        amount: "+ S$ 150",
        merchant: "Hamleys",
        type: "credit",
        orderType: "games",
      },
      {
        id: 2,
        date: "2023-10-02",
        amount: "- S$ 150",
        merchant: "Gas Station",
        type: "debit",
        orderType: "fuel",
      },
      {
        id: 3,
        date: "2023-10-03",
        amount: "- S$ 500",
        merchant: "Indigo",
        type: "debit",
        orderType: "travel",
      },
      {
        id: 4,
        date: "2023-10-04",
        amount: "- S$ 250",
        merchant: "Restaurant",
        type: "debit",
        orderType: "food",
      },
      {
        id: 5,
        date: "2023-10-04",
        amount: "- S$ 250",
        merchant: "Restaurant",
        type: "debit",
        orderType: "food",
      },
    ],
  },
  "/transactions/card2": {
    transactions: [
      {
        id: 1,
        date: "2023-10-01",
        amount: "+ S$ 150",
        merchant: "Hamleys",
        type: "debit",
        orderType: "games",
      },
      {
        id: 4,
        date: "2023-10-04",
        amount: "- S$ 250",
        merchant: "Restaurant",
        type: "debit",
        orderType: "food",
      },
    ],
  },
  "/transactions/card3": {
    transactions: [],
  },
};
