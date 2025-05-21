import styled from "styled-components";

export const FormContainer = styled.form`
  width: 100%;
  max-width: 400px;
  background: #fff;
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Field = styled.div<{ triedSubmitting: boolean }>`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 6px;
    font-size: 14px;
    color: #333;
  }
  input,
  select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 16px;
  }

  ${({ triedSubmitting }) =>
    triedSubmitting &&
    `
  input:invalid {
    border-color: #e74c3c;
  }
  `}
`;

export const SuccessMessage = styled.div`
  margin-top: 10px;
  color: green;
  font-weight: bold;
  text-align: center;
`;
