import { Page } from "@src/containers/Page";
import { CardPageHeaderContainer } from "./components/CardPageHeader";
import { Tabs } from "@src/containers/Tabs";
import { MyDebitCards } from "./components/MyDebitCards";
import { AllCompanyCards } from "./components/AllCompanyCards";

const Cards = () => {
  const tabs = [
    { label: "My debit cards", content: MyDebitCards, path: "debit-cards" },
    {
      label: "All company cards",
      content: AllCompanyCards,
      path: "company-cards",
    },
  ];
  return (
    <Page>
      <CardPageHeaderContainer />
      <Tabs tabs={tabs} handleNavigation />
    </Page>
  );
};

export default Cards;
