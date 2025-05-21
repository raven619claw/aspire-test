import styled, { keyframes } from "styled-components";

export const CardContainer = styled.div<{ disabled?: boolean }>`
  border-radius: 12px;
  box-shadow: 0 2px 8px rgb(0 0 0 / 0.1);
  padding: 27px;
  background:${({ disabled }) =>
    disabled ? " #222; opacity:70%;" : "#01D167;"}
  color: white;
  height: 249px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

`;

export const CardHeader = styled.div`
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 32px;
`;

export const CardNumber = styled.div`
  font-weight: 800;
  font-size: 14px;
  font-family: "Courier New", Courier, monospace;
`;

export const CardDetails = styled.div`
  font-size: 13px;
  font-weight: 600;
  display: flex;
  gap: 36px;
  margin-top: 22px;
`;

export const CardType = styled.div`
  margin-left: auto;
`;

export const CompanyLogo = styled.div`
  margin-left: auto;
  margin-top: 5px;
`;
