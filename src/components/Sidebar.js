import styled from "styled-components";
import {SideNav} from "carbon-components-react/lib/components/UIShell";
import React from "react";
import {Link, useLocation} from "react-router-dom";
import {SideNavItems, SideNavLink} from "carbon-components-react/lib/components/UIShell";

export const StyledSideNav = styled(SideNav)`
  @media (max-width: 640px) {
    display: none;
  }
`;

export const StyledSideNavItems = styled(SideNavItems)`
  margin-top: 1rem;
`;

const items = [
  {name: "About", path: "/"},
  {name: "Projects", path: "/projects"},
  {name: "Work", path: "/work"},
  {name: "Education", path: "/education"},
];

const Sidebar = () => {
  const location = useLocation();

  return (
    <StyledSideNav
      isFixedNav
      expanded
      isChildOfHeader={false}
      aria-label="Side navigation"
    >
      <StyledSideNavItems>
        {items.map((i) => (
          <SideNavLink
            isActive={
              location.pathname === "/" && i.path === "/"
                ? true
                : location.pathname === i.path
            }
            element={Link}
            to={i.path}
            key={i.name}
          >
            {i.name}
          </SideNavLink>
        ))}
      </StyledSideNavItems>
    </StyledSideNav>
  );
};

export default Sidebar;
