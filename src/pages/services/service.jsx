import React, { useEffect } from 'react';

import HeaderBar from 'src/components/landing/headerBar';
import ServiceForm from 'src/components/serviceForm';
import FooterBar from 'src/components/footerBar';

import s from './styles.module.scss';

const Service = (props) => {
  const { children, location } = props;

  useEffect(() => {
    if (location.action === 'PUSH') {
      window.scrollTo({ top: 0, behavior: 'instant'});
    }
  }, [location.action])

  return (
    <div className={s.container}>
      <div className={s.headerBarWrapper}>
        <div style={{maxWidth: '100%', margin: '0 auto'}}>
          <HeaderBar location={location} fixed={true} />
        </div>
      </div>
      <div className={s.content}>
        {children}
        <ServiceForm />
      </div>
      <FooterBar />
    </div>
  )
}

export default Service;
