import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';
import Form from 'src/components/form';

import s from './styles.module.scss';

const Footer = (props) => {
  const { phone, email, address } = props;

  return (
    <footer id="contacts" className={s.footer}>
      <h2>Наши контакты</h2>

      <div className={s.iconsWrapper}>
        <a className={s.item} href={`tel:${phone}`}>
          <img src={require('src/img/icons/phone.svg')} alt=""/>
          <div>
            {phone}
          </div>
        </a>
        <a 
          href='https://vk.com/femidamurino'  
          rel="noopener noreferrer"
          target='_blank' 
          className={s.item}
        >
          <img src={require('src/img/icons/vk.svg')} alt=""/>
          <div className={s.item}>
            https://vk.com/<br />femidamurino
          </div>
        </a>
        <a href={`mailto:${email}`} className={s.item}>
          <img src={require('src/img/icons/email.svg')} alt=""/>
          <div className={s.item}>
          {email}
          </div>
        </a>
        <a 
          href='https://www.instagram.com/femida_murino/'  
          rel="noopener noreferrer"
          target='_blank' 
          className={s.item}
        >
          <img src={require('src/img/icons/instagram.svg')} alt=""/>
          <div className={s.item}>
            https://instagram.com/<br />femida_murino
          </div>
        </a>
        <div className={s.item}>
          <img src={require('src/img/icons/building.svg')} alt=""/>
          <div className={s.item}>
            {address && address.split(',').map((item, index, arr) => (
              <React.Fragment key={index}>
              {(index === 0) ? 
                <div style={{displya: 'flex', alignItems: 'center'}}>
                  <img src={require('src/img/metro.svg')} alt=""/>
                  <div>{item+','}</div>
                </div> :
                <>
                {(arr.length - index === 1) ? 
                  <div>{item}</div> : 
                  <div>{item+','}</div>}
                </>
              }
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>

      <div className={s.info}>
        <div className={s.left}>
          <div className={s.h}>Бесплатная консультация</div>
          <Form />
        </div>
        <div className={s.right}>
          <div>Мы здесь:</div>
          <div>ПН-ВС 10:00-19:00</div>     
          <YMaps>
            <div style={{borderRadius: '7px', overflow: 'hidden'}}>
              <Map
                style={{
                  width: '100%',
                  height: '310px',
                }}
                defaultState={{
                  center: [60.04894, 30.443461],
                  zoom: 17,
                }}
              >
                <Placemark geometry={[60.048490, 30.443727]} />
              </Map>
            </div>
          </YMaps>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
