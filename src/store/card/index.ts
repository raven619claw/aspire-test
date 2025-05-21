import { create } from "zustand";

interface Transaction {
  id: string;
  date: string;
  amount: string;
  merchant: string;
  type: "debit" | "credit";
  orderType:
    | "food"
    | "travel"
    | "shopping"
    | "entertainment"
    | "games"
    | "fuel";
}

export interface CardData {
  cardType: "company" | "debit";
  id: string;
  name: string;
  number: string; // full number, we will show only last 4 digits
  validity: string; // MM/YY format
  cvv: string;
  type: "Visa" | "MasterCard";
  status: "active" | "frozen"; // added status to track card status
  transactions: Transaction[];
}
interface CardStore {
  cards: CardData[];
  setCards: (cards: CardData[]) => void;
  toggleFreezeCard: (cardId: string) => void;
}

// LocalStorage key
export const CARDS_STORAGE_KEY = "cards";

const updateLocalStorage = (cards: CardData[]) => {
  localStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(cards));
};

export const useCardStore = create<CardStore>((set, get) => ({
  cards: getInitialCards(),
  setCards: (newCards) => {
    set({ cards: newCards });
    updateLocalStorage(newCards);
  },
  toggleFreezeCard: (cardId) => {
    const currentCards = get().cards;
    const updatedCards = currentCards.map((card) =>
      card.id === cardId
        ? {
            ...card,
            status:
              card.status === "active"
                ? "frozen"
                : ("active" as CardData["status"]),
          }
        : card
    );
    set({ cards: updatedCards });
    updateLocalStorage(updatedCards);
  },
}));

function getInitialCards(): CardData[] {
  try {
    const stored = localStorage.getItem(CARDS_STORAGE_KEY);
    if (stored) return JSON.parse(stored);
  } catch (_) {}
  return [];
}
