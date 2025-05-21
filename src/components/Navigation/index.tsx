import React from "react";
import {
  MenuList,
  NavigationWrapper,
  Description,
  MenuItemLi,
  StyledNavLink,
  IconWrapper,
  Logo,
} from "./styles";

interface MenuItem {
  label: string;
  Icon: React.FC;
  to: string;
}

interface NavigationProps {
  menuItems: MenuItem[];
  logoSrc: string;
  logoAlt: string;
  description: string;
}

export const Navigation: React.FC<NavigationProps> = ({
  menuItems,
  logoSrc,
  logoAlt,
  description,
}) => {
  return (
    <NavigationWrapper>
      <StyledNavLink to="/">
        <Logo src={logoSrc} alt={logoAlt} />
      </StyledNavLink>
      <Description>{description}</Description>

      <MenuList>
        {menuItems.map(({ label, Icon, to }) => (
          <MenuItemLi key={to}>
            <StyledNavLink to={to}>
              <IconWrapper>
                <Icon />
              </IconWrapper>
              <span>{label}</span>
            </StyledNavLink>
          </MenuItemLi>
        ))}
      </MenuList>
    </NavigationWrapper>
  );
};
