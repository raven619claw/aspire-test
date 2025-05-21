import styled from "styled-components";

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  background: ${({ theme }) => theme.colors.backgroundSecondary};
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

export const TableRow = styled.tr`
  &:nth-child(even) {
    background: "#AAAAAA";
  }
  &:nth-child(odd) {
    background: ${({ theme }) => theme.colors.backgroundSecondary};
  }
`;

export const TableCell = styled.td`
  padding: 12px 16px;
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  &:first-child {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
    width: 40%;
  }
`;

export const TableBody = styled.tbody``;
