import styled, { keyframes } from "styled-components";

export const CarouselContainer = styled.div`
  width: 100%;
  position: relative;
  user-select: none;
`;

export const DotsContainer = styled.div`
  margin-top: 16px;
  margin-bottom: 32px;
  display: flex;
  justify-content: center;
  gap: 6px;
`;

export const Dot = styled.span<{ active: boolean }>`
  width: 8px;
  height: 8px;
  border-radius: 8px;
  ${({ active }) =>
    active
      ? "background-color: #01D167; width:16px;"
      : "background-color: #01D16733;"}
  cursor: pointer;
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  justify-content: center;
`;

export const ShowHideBtn = styled.div`
  position: absolute;
  top: -35px;
  right: -10px;
`;

export const Container = styled.div`
  display: flex;
  gap: 25px;
`;

export const DigitGroup = styled.div`
  font-size: 14px;
  letter-spacing: 6px;
  font-weight: 600;
  line-height: 0.6;
`;

export const DotGroup = styled.div`
  display: flex;
  gap: 6px;
`;

export const DotNumber = styled.div<{ withExtraGap?: boolean }>`
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background-color: white;
  margin-right: ${({ withExtraGap }) => (withExtraGap ? "21px" : "0")};
`;

const slideInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const slideInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateX(50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const AnimatedCardWrapper = styled.div<{ direction: "left" | "right" }>`
  animation: ${({ direction }) =>
      direction === "left" ? slideInFromLeft : slideInFromRight}
    0.4s ease forwards;
`;
