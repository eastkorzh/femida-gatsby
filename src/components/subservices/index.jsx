import React from 'react';
import { Link } from 'gatsby';
import useStoreon from 'storeon/react';

import Button from '../ui/Button';

import s from './styles.module.scss';

const Subservices = ({ data, to }) => {
  const {
    h3,
    p,
    price,
    about,
  } = data;

  const { dispatch } = useStoreon();

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div>
          <h3><Link to={to}>{h3}</Link></h3>
          <p>{p}</p>
        </div>
        <div className={s.bottom}>
          <div className={s.priceWrapper}>
            <div className={s.price}>{price}</div>
            <div className={s.about}>{about}</div>
          </div>
          <Button onClick={() => dispatch('setModalOpen')} className={s.btnCustom}>
            Отправить заявку
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Subservices;
