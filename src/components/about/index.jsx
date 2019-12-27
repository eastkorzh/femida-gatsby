import React from 'react';

import scrollTo from 'src/utils/scrollTo';
import s from './styles.module.scss';

const About = (props) => {
  const { 
    documentList, 
    costsList, 
    h2, 
    p, 
    imgName 
  } = props;

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.left}>
          <h2>{h2}</h2>
          <div className={s.paragraph} dangerouslySetInnerHTML={{ __html: p }} />
          {
            <div className={s.navIcons}>
              {documentList &&
                <a 
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo('documentList');
                  }} 
                  href='#documentList' 
                  className={s.item}
                >
                  <img src={require('../../img/icons/blanks.png')} alt=""/>
                  <div>Список необходимых документов</div>
                </a>
              }
              {costsList &&
                <a 
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo('costsList');
                  }} 
                  href='#costsList' 
                  className={s.item}
                >
                  <img src={require('../../img/icons/ruble.svg')} alt=""/>
                  <div>Стоимость услуг</div>
                </a>
              }
            </div>
          }
        </div>
        <div className={s.img}>
          <img src={require(`../../img/icons/${imgName}.png`)} alt=""/>
        </div>
      </div>
    </div>
  )
}

export default About;
