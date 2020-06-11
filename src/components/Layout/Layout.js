import styled from 'styled-components';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header/Header';
import MobileNav from '../MobileNav/MobileNav';


export const StyledContent = styled(Content)`
  min-height: 100vh;
  @media (max-width: 640px) {
    margin-left: 0 !important;
  }
`
const Layout = ({ children }) => {
    
    return (
      <>
        <MobileNav />
        <Sidebar />
        <StyledContent>
          <Header />
          <div>{children}</div>
        </StyledContent>
      </>
    );
  };
  
  export default Layout;