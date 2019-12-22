import React from 'react';
import { Link } from 'gatsby';

import s from './styles.module.scss';

const Services = () => {
  return (
    <section id="services" className={s.section}>
      <h2>Наши услуги</h2>
      <div className={s.grid}>
        <div className={s.link} to="/newcontract">
          <img src={require('../../../img/icons/newContract.png')} alt=""/>
          <div>Составление договоров</div>
          <div className={s.info}>
            <div className={s.infoHeader}>Составление договоров</div>
            <Link to='/newcontract'>• Дарения</Link>
            <Link to='/buysales'>• Купли-продажи</Link>
          </div>
        </div>
        <Link className={s.link} to="/3ndfl">
          <img src={require('../../../img/icons/3ndfl.png')} alt=""/>
          <div>Составление деклараций 3НДФЛ</div>
        </Link>
        <Link className={s.link} to="/registerandliquidation">
          <img src={require('../../../img/icons/register.png')} alt=""/>
          <div>Регистрация компаний ООО и ИП</div>
        </Link>
        <Link className={s.link} to="/registerandliquidation">
          <img src={require('../../../img/icons/liqidation.png')} alt=""/>
          <div>Ликвидация компаний ООО и ИП</div>
        </Link>
        <Link className={s.link} to="/registerandliquidation">
          <img src={require('../../../img/icons/editing.png')} alt=""/>
          <div>Внесение изменений в организации</div>
        </Link>
        <Link className={s.link} to="/representation">
          <img src={require('../../../img/icons/representation.png')} alt=""/>
          <div>Представительство в судах</div>
        </Link>
        <Link className={s.link} to="/subscribe">
          <img src={require('../../../img/icons/subscribe.png')} alt=""/>
          <div>Абонентское юридическое обслуживание</div>
        </Link>
        <Link className={s.link} to="/claim">
          <img src={require('../../../img/icons/claim.png')} alt=""/>
          <div>Написание исков, заявлений, претензий</div>
        </Link>
        <Link className={s.link} to="/calc">
          <img src={require('../../../img/icons/calc.png')} alt=""/>
          <div>Ведение бухгалтерии для ООО и ИП</div>
        </Link>
        <Link className={s.link} to="/mfc">
          <img src={require('../../../img/icons/mfc.png')} alt=""/>
          <div>Заполнение заявлений для подчи в МФЦ</div>
        </Link>
      </div>
    </section>
  )
}

export default Services;
