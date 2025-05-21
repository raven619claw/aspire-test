import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Message, Overlay } from './styles';

export const MobileBlockOverlay: React.FC = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  const checkWidth = () => {
    setShowOverlay(window.innerWidth < 1024);
  };

  useEffect(() => {
    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  if (!showOverlay) return null;

  return (
    <Overlay>
      <Message>
        <h2>📵 Mobile View Not Supported</h2>
        <p>
          🍫 Have a KitKat.
        </p>
      </Message>
    </Overlay>
  );
};

export default MobileBlockOverlay;
