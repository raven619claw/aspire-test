import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  width: 100%;
  margin-bottom: 24px;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  background-color: #f5f9ff;
  cursor: pointer;
  transition: background 0.2s ease;
  height: 72px;
`;

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const IconWrapper = styled.div`
  margin-right: 12px;
  display: inline-flex;
`;

export const Title = styled.div`
  font-size: 14px;
  color: #0c365a;
`;

export const Chevron = styled.div<{ $rotated: boolean }>`
  display: inline-flex;
  transform: rotate(${(props) => (props.$rotated ? 180 : 0)}deg);
  transition: transform 0.2s ease;
`;

export const Content = styled.div<{ expanded: boolean }>`
  max-height: 0;
  ${(props) => (props.expanded ? "max-height: 500px;" : "")}
  overflow: hidden;
  transition: max-height 0.3s ease;
`;
