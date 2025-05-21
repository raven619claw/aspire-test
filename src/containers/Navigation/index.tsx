import { Navigation } from "@src/components/Navigation";
import AspireLogo from "@assets/icons/navigation/logo.svg?url";
import Settings from "@assets/icons/navigation/Account.svg";
import CreditCard from "@assets/icons/navigation/Card.svg";
import Payment from "@assets/icons/navigation/Payments.svg";
import Home from "@assets/icons/navigation/Home.svg";
import Credit from "@assets/icons/navigation/Credit.svg";

const menuItems = [
  { label: "Home", Icon: Home, to: "/home" },
  { label: "Cards", Icon: CreditCard, to: "/cards" },
  { label: "Payments", Icon: Payment, to: "/payments" },
  { label: "Credit", Icon: Credit, to: "/credit" },
  { label: "Settings", Icon: Settings, to: "/settings" },
];

export const NavigationHOC: React.FC = () => {
  return (
    <Navigation
      logoSrc={AspireLogo}
      logoAlt="Aspire"
      description="Trusted way of banking for 3,000+ SMEs and startups in Singapore"
      menuItems={menuItems}
    />
  );
};
