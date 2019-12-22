import React, { useState } from 'react';

import Form from '../form';

import s from './styles.module.scss';

const ServiceForm = () => {
  const [ isSuccess, setSuccess ] = useState(false);

  return (
    <div className={s.container}>
      <h4>Оставить заявку на услугу</h4>
      <div className={s.info}>Мы свяжемся с вами, чтобы обсудить детали
        и ответить на вопросы. 
        Ваши контакты не попадут к третьим лицам и не 
        будут использоваться для рассылки спама.
      </div>
      <Form setSuccess={setSuccess}/>
    </div>
  )
}

export default ServiceForm;
