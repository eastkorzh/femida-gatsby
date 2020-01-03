import React from 'react';

import s from './styles.module.scss';

const Roadmap = (props) => {
  const { h3, stepsList, h3After} = props;

  return (
    <div className={s.container}>
      {h3 &&
        <h3>{h3}</h3>
      }
      {h3After &&
        <div className={s.h3After}>{h3After}</div>
      }
      <div className={s.steps}>
        {stepsList.map((item, index) => {
          return (
            <div key={index} className={s.step}>
              <img src={require('../../img/icons/success.svg')} alt=""/>
              <div className={s.text}>{item.name}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Roadmap;
