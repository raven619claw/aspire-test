import styled, { keyframes } from "styled-components";

const shimmerKeyframe = keyframes`
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
`;

export const Shimmer = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 4px;
  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 37%, #f0f0f0 63%);
  background-size: 400% 100%;
  animation: ${shimmerKeyframe} 1.4s ease infinite;
`;
