import React from 'react';
import { Transition } from 'react-transition-group';
import useStoreon from 'storeon/react';

import Form from 'src/components/form';

import s from './styles.module.scss';

const Modal = (props) => {
  const { dispatch, isModalOpen } = useStoreon('isModalOpen');

  const duration = 300;

  const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
  }

  const transitionStyles = {
    entering: { 
      opacity: 1,
    },
    entered: { 
      opacity: 1,
    },
  };

  return (
    <Transition 
      in={isModalOpen} 
      onEnter={node => node.offsetHeight} 
      timeout={duration} 
      mountOnEnter={true} 
      unmountOnExit={true} 
    >
      {state => { 
        return (
        <div
          id='formOutter'
          onClick={(e) => {
            if (e.target.id === 'formOutter') {
              dispatch('setModalClose');
            }
          }}
          style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}
          className={s.modal}
        >
          <div className={s.modalContent}>
            <h4>Бесплатаня консультация</h4>
            <Form />
          </div>
        </div>
      )}}
    </Transition>
  )
}

export default Modal;
