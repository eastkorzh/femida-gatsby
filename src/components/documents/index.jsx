import React from 'react';

import s from './styles.module.scss';

const Documents = (props) => {
  const { data } = props;

  return (
    <div id='documentList' className={s.container}>
      <h3>Список необходимых документов</h3>
      <div className={s.documentList}>
        {data && data.documentList.map((item, index) => {
          const itemType = item.type && item.type.split('_')
          return (
            <div key={index} className={s.item}>
              <div className={s.img}>
                <img src={require(`../../img/icons/${itemType ? itemType[0] : 'blank'}.${itemType ? itemType[1] : 'png'}`)} alt=""/>
              </div>
              <div>{item.name}</div>
            </div>
          )
        })}
      </div>
      {(data && data.documentsDelimiter) &&
        <div className={s.documentsDelimiter}>{data.documentsDelimiter}</div>
      }
      {(data && data.documentList2) &&
        <div className={s.documentList}>
          {data.documentList2.map((item, index) => {
            const itemType = item.type && item.type.split('_')
            return (
              <React.Fragment key={index}>
                <div className={s.item}>
                  <div className={s.img}>
                    <img src={require(`../../img/icons/${itemType ? itemType[0] : 'blank'}.${itemType ? itemType[1] : 'png'}`)} alt=""/>
                  </div>
                  <div>{item.name}</div>
                </div>
                {item.ifNext && 
                  <div className={s.ifNext}>ИЛИ</div>
                }
              </React.Fragment>
            )
          })}
        </div>
      }
    </div>
  )
}

export default Documents;
