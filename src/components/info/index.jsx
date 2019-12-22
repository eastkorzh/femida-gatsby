import React from 'react'

import s from './styles.module.scss';

const Info = (props) => {
  const { children } = props;
  return (
    <div style={props.style ? {...props.style} : {}} className={s.container}>
      <div className={s.top}>
        <img src={require('../../img/icons/info.svg')} alt=""/>
        <div>Важная информация</div>
      </div>
      {children}
    </div>
  )
}

export default Info;
