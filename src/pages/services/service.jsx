import React from 'react';

import HeaderBar from 'src/components/landing/headerBar';
import ServiceForm from 'src/components/serviceForm';
import FooterBar from 'src/components/footerBar';
import Modal from 'src/components/modal';

import s from './styles.module.scss';

const Service = (props) => {
  const { children, location } = props;

  return (
    <div className={s.container}>
      <Modal />
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
