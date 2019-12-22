import React from 'react';
import useStoreon from 'storeon/react';

import s from './styles.module.scss';

const ThanksModal = () => {
  const { dispatch } = useStoreon();

  return (
    <div 
      role='button' 
      tabIndex={0}
      onClick={() => dispatch('setEmailSuccess', false)} 
      className={s.modal} 
      onKeyDown={e => console.log(e)}
    >
      <div className={s.modalContent}>
        <img src={require('../../img/icons/success.svg')} alt=""/>
        <div>Ваша заявка принята!</div>
      </div>
    </div>
  )
}

export default ThanksModal;
