import React from 'react';

import s from './styles.module.scss';

const Advantages = (props) => {
  const { advantagesH2, advantagesP1, advantagesP2 } = props;

  return (
    <section id="advantages" className={s.section}>
      <img className={s.timer} src={require('src/img/timer.svg')} alt=""/>
      <div className={s.container}>
        <div className={s.text}>
          <h2>{advantagesH2}</h2>
          <div>{advantagesP1}</div>
          <div>{advantagesP2}</div>
        </div>
        <div className={s.imgWrapper}>
          <img src={require('src/img/building.png')} alt=""/>
        </div>
      </div>
      <div className={s.ground} />
    </section>
  )
}

export default Advantages;
