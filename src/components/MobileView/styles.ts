import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: #111;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  flex-direction: column;
  padding: 40px;
`;

export const Message = styled.div`
  text-align: center;
  
  h2 {
    font-size: 48px;
    margin-bottom: 24px;
  }

  p {
    font-size: 28px;
    margin-top: 8px;
  }
`;
