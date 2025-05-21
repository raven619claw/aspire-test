import styled from "styled-components";

export const TabsContainer = styled.div`
  padding-bottom: 200px;
`;

//font selected seemed incorrect for the label, keeping it as is and not changing to Avenir
export const TabsLabel = styled.button<{ selected: boolean }>`
  padding-bottom: 5px;
  margin-right: 32px;
  border: none;
  border-bottom: ${({ selected }) =>
    selected ? "2px solid #23CEFD" : "2px solid transparent"};
  background: none;
  cursor: pointer;
  font-weight: ${({ selected }) => (selected ? "600" : "normal")};
  font-size: 14px;
  color: #222;
  opacity: ${({ selected }) => selected ? '100%': '30%'};
`;
export const TabContentContainer = styled.div`
  margin-top: 16px;
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.background};
  border-radius: 8px;
  box-shadow: 0px 2px 12px ${({ theme }) => theme.colors.shadow};
  min-height: 200px;
  padding: 60px 40px 40px 40px;
`;
