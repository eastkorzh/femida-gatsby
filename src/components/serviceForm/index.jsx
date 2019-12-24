import React from 'react';

import Form from '../form';

import s from './styles.module.scss';

const ServiceForm = () => {
  return (
    <div className={s.container}>
      <h4>Оставить заявку на услугу</h4>
      <div className={s.info}>Мы свяжемся с вами, чтобы обсудить детали
        и ответить на вопросы. 
        Ваши контакты не попадут к третьим лицам и не 
        будут использоваться для рассылки спама.
      </div>
      <Form />
    </div>
  )
}

export default ServiceForm;
