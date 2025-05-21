import styled from "styled-components";

export const TransactionContainer = styled.div`
  width: 100%;
  position: relative;
  background: #edfff5;
  display: flex;
  flex-direction: column;
`;

export const TransactionsContainer = styled.div`
  width: 100%;
  background: #edfff5;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  background: #ffffff;
  max-height: 432px;
  overflow-y: auto;
`;

export const ViewAllTransactionsButton = styled.button`
  bottom: 0;
  height: 50px;
  width: 100%;
  border-radius: 8px;
  border: solid 1px #ddffec;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  color: #01d167;
  border-top: none;
`;
