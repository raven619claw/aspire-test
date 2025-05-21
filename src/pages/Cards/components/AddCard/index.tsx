import React, { useEffect, useState } from "react";
import { FormContainer, Field, SuccessMessage } from "./styles";
import { CardData } from "@src/store/card";
import { Button } from "@src/components/Button";
import { useAddCard } from "@src/store/card/useAddCard";

interface CreditCardData extends Pick<CardData, "name"> {}

const initialFormData: CreditCardData = {
  name: "",
};

export const AddCard: React.FC = () => {
  const [formData, setFormData] = useState<CreditCardData>(initialFormData);

  const [submitted, setSubmitted] = useState(false);
  const [triedSubmitting, setTriedSubmitting] = useState(false);
  const { fetch, data, loading } = useAddCard();
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch(formData);
  };

  useEffect(() => {
    let timeout: NodeJS.Timeout | null = null;
    if (data && data.success) {
      setSubmitted(true);
      timeout = setTimeout(() => {
        setSubmitted(false);
        setFormData(initialFormData);
        setTriedSubmitting(false);
      }, 3000);
    }
    return () => {
      timeout && clearTimeout(timeout);
    };
  }, [data]);

  return (
    <FormContainer onSubmit={handleSubmit}>
      <h2>Add New Card</h2>
      <Field triedSubmitting={triedSubmitting}>
        <label>Cardholder Name</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </Field>

      <Button onClick={() => setTriedSubmitting(true)} type="submit">
        {loading ? "Loading..." : "Add Card"}
      </Button>
      {submitted && <SuccessMessage>Card added successfully!</SuccessMessage>}
    </FormContainer>
  );
};
