import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavigationWrapper = styled.nav`
  position: sticky;
  top: 0;
  min-width: 340px;
  max-width: 340px;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  color: ${({ theme }) => theme.colors.text};
  padding: 48px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const Description = styled.p`
  font-size: 15px;
  color: ${({ theme }) => theme.colors.text};
  opacity: 0.3;
  margin-bottom: 6px;
`;

export const Logo = styled.img`
  width: 125px;
  height: 35px;
  object-fit: contain;
  margin-bottom: 15px;
`;

export const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.text};
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.2s ease;
  &.active {
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 600;
    svg {
      filter: invert(57%) sepia(98%) saturate(2993%) hue-rotate(114deg)
        brightness(105%) contrast(99%);
    }
  }

  &:hover {
    filter: invert(57%) sepia(98%) saturate(2993%) hue-rotate(114deg)
      brightness(105%) contrast(99%);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 81px;
  flex-grow: 1;
`;

export const MenuItemLi = styled.li`
  margin-bottom: 62px;
  font-size: 16px;
`;

export const IconWrapper = styled.span`
  margin-right: 16px;
  display: flex;
  align-items: center;
`;
