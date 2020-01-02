import React from 'react';
import { Link } from 'gatsby';

import s from './styles.module.scss';

const Services = () => {
  return (
    <section id="services" className={s.section}>
      <h2>Наши услуги</h2>
      <div className={s.grid}>
        <div className={s.link}>
          <img src={require('src/img/icons/newContract.png')} alt=""/>
          <div>Составление договоров</div>
          <div className={s.info}>
            <div className={s.infoHeader}>Составление <br /> договоров</div>
            <Link to='/services/deedofgift'>• Дарения</Link>
            <Link to='/services/buysales'>• Купли-продажи</Link>
          </div>
        </div>
        <Link className={s.link} to="/services/ndfl">
          <img src={require('src/img/icons/3ndfl.png')} alt=""/>
          <div>Составление деклараций 3НДФЛ</div>
        </Link>
        <div className={s.link}>
          <img src={require('src/img/icons/register.png')} alt=""/>
          <div className={s.text}>Регистрация компаний ООО и ИП</div>
          <div className={s.info}>
            <div className={s.infoHeader}>Регистрация <br /> компаний</div>
            <Link to='/services/registration/ooo'>• Регистрация ООО</Link>
            <Link to='/services/registration/ip'>• Регистрация ИП</Link>
          </div>
        </div>
        <div className={s.link}>
          <img src={require('src/img/icons/liquidation.png')} alt=""/>
          <div className={s.text}>Ликвидация компаний ООО и ИП</div>
          <div className={s.info}>
            <div className={s.infoHeader}>Регистрация <br /> компаний</div>
            <Link to='/services/liquidation/ooo'>• Ликвидация ООО</Link>
            <Link to='/services/liquidation/ip'>• Ликвидация ИП</Link>
          </div>
        </div>
        <div className={s.link}>
          <img src={require('src/img/icons/editing.png')} alt=""/>
          <div className={s.text}>Внесение изменений в организации</div>
          <div className={s.info}>
            <div className={s.infoHeader}>Внесение <br /> изменений</div>
            <Link to='/services/editing/ooo'>• В ООО</Link>
            <Link to='/services/editing/ip'>• В ИП</Link>
          </div>
        </div>
        <Link className={s.link} to="/services/court">
          <img src={require('src/img/icons/representation.png')} alt=""/>
          <div>Представительство в судах</div>
        </Link>
        <Link className={s.link} to="/services/subscribe">
          <img src={require('src/img/icons/subscribe.png')} alt=""/>
          <div>Абонентское юридическое обслуживание</div>
        </Link>
        <Link className={s.link} to="/services/claim">
          <img src={require('src/img/icons/claim.png')} alt=""/>
          <div>Написание исков, заявлений, претензий</div>
        </Link>
        <div className={s.link}>
          <img src={require('src/img/icons/calc.png')} alt=""/>
          <div>Ведение бухгалтерии</div>
          <div className={s.info}>
            <div className={s.infoHeader}>Ведение <br /> бухгалтерии</div>
            <Link to='/services/accounting/ooo'>• Для ООО</Link>
            <Link to='/services/accounting/ip'>• Для ИП</Link>
            <Link to='/services/accounting/zeroreporting'>• Нулевая отчетность</Link>
            <Link to='/services/accounting/envd'>• Декларация ЕНВД</Link>
          </div>
        </div>
        <div className={s.link}>
          <img src={require('src/img/icons/mfc.png')} alt=""/>
          <div className={s.text}>Заполнение заявлений для подчи в МФЦ</div>
          <div className={s.info}>
            <div className={s.infoHeader}>Заполнение заявлений для подчи в МФЦ</div>
            <Link to='/services/mfc/inn'>• ИНН</Link>
            <Link to='/services/mfc/migration'>• Постановка на миграционный учет</Link>
            <Link to='/services/mfc/passport'>• Оформление загранпаспорта</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services;
