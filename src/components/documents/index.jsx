import React from 'react';

import s from './styles.module.scss';

const Documents = (props) => {
  const { 
    documentList,
    documentsDelimiter,
    documentList2,
   } = props;

  return (
    <div id='documentList' className={s.container}>
      <h3>Список необходимых документов</h3>
      <div className={s.documentList}>
        {documentList && documentList.map((item, index) => {
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
        
      <div className={s.documentsDelimiter}>{documentsDelimiter}</div>
      
      <div className={s.documentList}>
        {documentList2 && documentList2.map((item, index) => {
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
    </div>
  )
}

export default Documents;
