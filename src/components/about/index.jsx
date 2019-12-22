import React from 'react';

import s from './styles.module.scss';

const About = (props) => {
  const { documentList, costsList, h2, p, data, imgName } = props;

  return (
    <div className={s.wrapper}>
      <div className={s.container}>
        <div className={s.left}>
          <h2>{h2 || (data && data.h2)}</h2>
          <div className={s.paragraph} dangerouslySetInnerHTML={{ __html: (p || (data && data.p)) }} />
          {(data || documentList || costsList) &&
            <div className={s.navIcons}>
              {(documentList || (data.documentList && data.documentList[0])) &&
                <a href='#documentList' className={s.item}>
                  <img src={require('../../img/icons/blanks.png')} alt=""/>
                  <div>Список необходимых документов</div>
                </a>
              }
              {(costsList || (data.costsList && data.costsList[0])) &&
                <a href='#costsList' className={s.item}>
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
