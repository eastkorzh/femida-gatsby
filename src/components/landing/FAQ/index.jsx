import React, { useState } from 'react';

import './styles.scss';

const FAQ = (props) => {
  const { FrequentlyAskedQuestions } = props;
  const [isOpen, setOpen] = useState([]);

  return (
    <div id="faq" className="faq">
      <div className="container">
        <h3>Часто задаваемые вопросы</h3>
        {FrequentlyAskedQuestions && FrequentlyAskedQuestions.map((item, index) => {
            return (
              <div 
                id={`card-${index}`}
                key={index} 
                className="faq-card"
              >
                <div id={`collapsed-card-${index}`} className="faq-card-content">
                  <div className="question" dangerouslySetInnerHTML={{__html: item.question}} />
                  <div 
                    className="expand"
                    onClick={() => {
                      const state = [...isOpen];
                      state[index] = !state[index];
                      setOpen(state);
                    }} 
                  >
                    {!isOpen[index] ?
                      <img src={require('../../../img/plus.svg')} alt=""/> :
                      <img src={require('../../../img/hide.svg')} alt=""/>
                    }
                  </div>
                </div>
                {isOpen[index] &&
                  <div id={`answer-${index}`} className="answer" dangerouslySetInnerHTML={{__html: item.answer}} />
                }
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default FAQ;
