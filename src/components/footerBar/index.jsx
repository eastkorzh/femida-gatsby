import React from 'react';

import s from './styles.module.scss';

const FooterBar = () => {
  return (
    <div className={s.bottom}>
      <div className={s.content}>
      <div>© Юридический центр “Фемида”, {new Date().getFullYear()}</div>
        <div>Создание сайтов</div>
      </div>
    </div>
  )
}

export default FooterBar;
