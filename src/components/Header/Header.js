import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowRight16 } from '@carbon/icons-react';

import { HeaderContainer, MainHeader, Image, ViewResumeLink } from './styles';
import { InfoContext } from '../../contexts/infoContext';

const Header = () => {
  const { info } = useContext(InfoContext);
  const location = useLocation();

  return (
    <HeaderContainer isHome={location.pathname === '/'}>
      <MainHeader>
        <Image src={info.basics.picture} />
        <div>
          <h2>{info.basics.name}</h2>
          <h4>
            <a
              href={`https://gitconnected.com/${info.basics.username}`}
              target="_blank"
              rel="noreferrer noopener"
            >
              @{info.basics.username}
            </a>
          </h4>
          <p>{info.basics.label}</p>
          <p>{info.basics.region}</p>
          <p>{info.basics.headline}</p>
          
        </div>
      </MainHeader>
      <div>
        <ViewResumeLink
          href={`https://gitconnected.com/${info.basics.username}/resume`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>View Résumé</span>
          <ArrowRight16 />
        </ViewResumeLink>
      </div>
    </HeaderContainer>
  );
};

export default Header;