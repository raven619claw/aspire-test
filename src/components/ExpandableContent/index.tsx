import React, { useEffect, useState } from "react";
import {
  Chevron,
  Container,
  Content,
  Header,
  IconWrapper,
  LeftSection,
  Title,
} from "./styles";
import ArrowIcon from "@src/assets/icons/iconography/down-arrow.svg";

interface ExpandableSectionProps {
  title: string;
  LeftIcon?: React.ReactNode;
  children: React.ReactNode;
  id?: string;
  openId?: string | null;
  setOpenId?: (id: string | null) => void;
}

//handles 2 types one independent and one dependent expandables which close if the other connected one is opened
export const ExpandableSection: React.FC<ExpandableSectionProps> = ({
  openId,
  id,
  setOpenId,
  title,
  LeftIcon,
  children,
}) => {
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    if (id && setOpenId) {
      if (id === openId) {
        setExpanded(!expanded);
      } else {
        setOpenId(id);
      }
    } else {
      setExpanded(!expanded);
    }
  };

  useEffect(() => {
    if (openId === id) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  }, [openId]);
  return (
    <Container>
      <Header onClick={toggleExpand}>
        <LeftSection>
          {LeftIcon && <IconWrapper>{LeftIcon}</IconWrapper>}
          <Title>{title}</Title>
        </LeftSection>
        <Chevron $rotated={expanded}>
          <ArrowIcon />
        </Chevron>
      </Header>
      <Content expanded={expanded}>{children}</Content>
    </Container>
  );
};
