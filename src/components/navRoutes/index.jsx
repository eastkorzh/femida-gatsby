import React from 'react';
import { Link } from 'gatsby';

import s from './styles.module.scss';

const NavRoutes = (props) => {
  const { currentNavName } = props;
  return (
    <div className={s.container}>
      <Link to={{
        pathname: '/',
        hash: '#services',
        state: { 
          fromServices: true,
          scrollTo: 'services'
        }
      }}>
        Услуги
      </Link>
      <div>/</div>
      <div>{currentNavName}</div>
    </div>
  )
}

export default NavRoutes;
