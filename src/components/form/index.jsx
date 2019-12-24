import React, { useState, useEffect } from 'react';
import isMobilePhone from 'validator/es/lib/isMobilePhone';
import { useProximityFeedback } from 'react-proximity-feedback';
import useStoreon from 'storeon/react';

import Input from '../ui/Input';
import Textarea from '../ui/Textarea';
import Button from '../ui/Button';
import ThanksModal from '../thanksModal';

import s from './styles.module.scss';

const Form = (props) => {

  const { dispatch, isEmailSuccess, isEmailError } = useStoreon('isEmailSuccess', 'isEmailError');

  const [ data, setData ] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [ isValid, setValid ] = useState({
    name: false,
    email: true,
    phone: false,
    subject: true,
    message: true,
  });

  const [ submitClicked, setSubmitClicked ] = useState(false);
  const [ isTouchDevice, setTouchDevice ] = useState(true);

  const { ref, proximity } = useProximityFeedback({ threshold: 200, throttleInMs: 50})

  useEffect(() => {
    setTouchDevice("ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0);
  }, [])

  useEffect(() => {
    if (data.name.length > 0) {
      if (isValid.name === false) {
        setValid({
          ...isValid,
          name: true,
        })
      }
    } else if (isValid.name === true) {
      setValid({
        ...isValid,
        name: false,
      })
    }

  }, [data.name, isValid]);

  useEffect(() => {
    if (isMobilePhone(data.phone)) {
      if (isValid.phone === false) {
        setValid({
          ...isValid,
          phone: true,
        })
      }
    } else if (isValid.phone === true) {
      setValid({
        ...isValid,
        phone: false,
      })
    }

  }, [data.phone, isValid]);

  const handleChange = (e) => {
    if (submitClicked === true) setSubmitClicked(false);

    setData({
      ...data,
      [e.target.name]: e.target.value,
    })

    if (e.target.name === 'phone') {
      setValid({
        ...isValid,
        phone: isMobilePhone(data.phone)
      })
    }
  }

  const send = async () => {
    setSubmitClicked(true);
    if (isEmailError === true) dispatch('setEmailError', false);

    let allValid = true;

    for (let item in isValid) {
      if (isValid[item] === false) {
        allValid = false;
        break;
      }
    }

    if (!allValid) return;

    const response = await fetch('http://cms.femidamurino.ru/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        subject: data.subject || '',
        html: `
        <div>
          <h1>Заявка с сайта</h1>
          <div>Имя: ${data.name}</div>
          <div>Почта: ${data.email}</div>
          <div>Телефон: ${data.phone}</div>
          <div>Тема сообщения: ${data.subject}</div>
          <div>Сообщение: ${data.message}</div>
        </div>
        `
      })
    })    
    
    if (response.ok) {      
      setData({
        ...data,
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });

      dispatch('setEmailSuccess', true)
      setSubmitClicked(false);
    } else {
      dispatch('setEmailError', true)
    }
  }

  useEffect(() => {

  }, [])

  const redShadow = (isValid, isTouchDevice, proximity) => {    
    if (!submitClicked) { 
      if (!isTouchDevice) {
        return {
          background: isValid ? 'transparent' : `rgba(229, 51, 51, ${0.17*proximity})`,
        }
      }
    } else {
      return {
        background: !isValid && submitClicked ? 'rgba(229, 51, 51, 0.17)' : 'transparent',
      }
    }
  }

  return (
    <div>
      <form>
        <Input 
          handleChange={handleChange} 
          value={data.name}
          className={s.input} 
          proximityStyle={redShadow(isValid.name, isTouchDevice, proximity)}
          label='ФИО*' img='user' type='text' name='name' 
        />
        <Input 
          handleChange={handleChange} 
          value={data.email}
          className={s.input} 
          label='Email' img='email' type='text' name='email' 
        />
        <Input 
          handleChange={handleChange} 
          value={data.phone}
          className={s.input} 
          proximityStyle={redShadow(isValid.phone, isTouchDevice, proximity)}
          label='Номер телефона*' img='phone' type='text' name='phone'
        />
        <Input 
          handleChange={handleChange} 
          value={data.subject}
          className={s.input} 
          label='Тема сообщения' type='text' name='subject' 
        />
        <Textarea 
          handleChange={handleChange} 
          value={data.message}
          rows={6} 
          className={s.textarea}
          label='Сообщение' type='text' name='message' 
        />
      </form>
      <div className={s.buttonWrapper}>
        <Button forwardRef={ref} onClick={() => send()} className={s.btnCustom}>
          Отправить
        </Button>
        <div className={s.text}>Даю согласие на обработку персональных данных</div>
      </div>
      {isEmailSuccess &&
        <ThanksModal />
      }
      {isEmailError &&
        <div className={s.error}>Ошибка отправки заявки!</div>
      }
    </div>
  )
};

export default Form;
