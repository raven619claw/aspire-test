import { Balance } from "@src/components/Balance";
import { CardPageHeader } from "./styles";
import { AddCardBtn } from "../AddCardBtn";
import { AddCard } from "../AddCard";
import { Modal } from "@src/components/Modal";
import { useState } from "react";

export const CardPageHeaderContainer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <CardPageHeader>
      <Balance />
      <AddCardBtn
        onClick={() => {
          setIsOpen((isOpen) => !isOpen);
        }}
      />
      <Modal
        isOpen={isOpen}
        onClose={function () {
          setIsOpen(false);
        }}
      >
        <AddCard />
      </Modal>
    </CardPageHeader>
  );
};
