import React from 'react';

import s from './styles.module.scss';

const CostsAndFeesList = (props) => {
  const { 
    costsList,
    feesList,
  } = props;

  return (
    <div id='costsList' className={s.container}>
      <h3>Стоимость услуг</h3>
      <div className={s.costsWrapper}>
        <div className={s.costsList}>
          {costsList && costsList.map((item, index) => {
            return (
              <div key={index} className={s.item}>
                <div className={s.name}>{item.name}</div>
                {item.oldPrice ? 
                  <div className={s.promo}>
                    <div className={s.oldPrice}>{item.oldPrice} {item.oldPrice === 'Бесплатно' ? '' : '₽'}</div>
                    <div className={s.price}>{item.price} {item.price === 'Бесплатно' ? '' : '₽'}</div>
                  </div> :
                  <>
                    {item.price &&
                      <div className={s.price}>{item.price} {item.price === 'Бесплатно' ? '' : '₽'}</div>
                    }
                  </>
                }
              </div>
            )
          })}
        </div>
        {feesList && 
          <h3>Госпошлина</h3>
        }
        <div className={s.feesList}>
          {feesList && feesList.map((item, index) => {
            return (
              <div key={index} className={s.item}>
                <div className={s.name}>{item.name}</div>
                <>
                  {item.price &&
                    <div className={s.price}>{item.price} {item.price === 'Бесплатно' ? '' : '₽'}</div>
                  }
                </>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default CostsAndFeesList;
