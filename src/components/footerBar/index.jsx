import React from 'react';

import s from './styles.module.scss';

const FooterBar = () => {
  return (
    <div className={s.bottom}>
      <div className={s.content}>
        <div>© Юридический центр “Фемида”, 2019</div>
        <div>Создание сайтов</div>
      </div>
    </div>
  )
}

export default FooterBar;
