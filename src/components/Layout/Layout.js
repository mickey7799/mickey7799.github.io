import styled from 'styled-components';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import MobileNav from '../MobileNav';

export const StyledContent = styled(Content)`
  min-height: 100vh;
  @media (max-width: 640px) {
    margin-left: 0 !important;
  }
`
const Layout = ({ info, children }) => {
    return (
      <>
        <MobileNav />
        <Sidebar />
        <StyledContent>
          <Header info={info} />
          <div>{children}</div>
        </StyledContent>
      </>
    );
  };
  
  export default Layout;