import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import { Link } from 'gatsby';
import { useStaticQuery, graphql } from "gatsby"

import s from './styles.module.scss';


const HeaderBar = (props) => {
  const { fixed, location } = props;

  const data = useStaticQuery(graphql`
    query MyQuery1 {
      allStrapiLandings {
        edges {
          node {
            address
            phone
          }
        }
      }
    }
  `)

  const { address, phone } = data.allStrapiLandings.edges[0].node;

  const [ isOpen, setOpen ] = useState(false);

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
    <div className={s.headerBar}>
      <div style={fixed ? {padding: 0} : {}} className={s.content} >
        <Link to='/' onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className={s.logo} >
          <div className={s.imgWrapper}>
            <img src={require('../../../img/logo.png')} alt=""/>
          </div>
          <div className={s.text}>
            <p>Юридический</p>
            <p>центр</p>
            <p>«Фемида»</p>
          </div>
        </Link>

        <div className={s.info}>
          <div className={s.top}>
            <div className={s.item}>
              <img src={require('../../../img/metro.svg')} alt=""/>
              <div>{address}</div>
            </div>
            <div className={s.item}>
              ПН - ВС 10:00 - 19:00
            </div>
            <a href={`tel:${phone}`} className={s.item}>
              {phone}
            </a>
          </div>
          <nav>
          {location.pathname === '/' ?
            <>
              <a href="#services">Услуги</a>
              <a href="#advantages">Приемущества</a>
              <a href="#faq">Вопрос-ответ</a>
              <a href="#contacts">Контакты</a>
            </> :
            <>
              <Link to={{
                pathname: '/',
                hash: '#services',
                state: {
                  scrollTo: 'services'
                }
              }}>
                Услуги
              </Link>
              <Link to={{
                pathname: '/',
                hash: '#advantages',
                state: {
                  scrollTo: 'advantages'
                }
              }}>
                Приемущества
              </Link>
              <Link to={{
                pathname: '/',
                hash: '#faq',
                state: {
                  scrollTo: 'faq'
                }
              }}>
                Вопрос-ответ
              </Link>
              <Link to={{
                pathname: '/',
                hash: '#contacts',
                state: {
                  scrollTo: 'contacts'
                }
              }}>
                Контакты
              </Link>
            </>
            }  
          </nav>        
        </div>
        <a href={`tel:${phone}`} className={s.phone}>
          {phone}
        </a>
        <div onClick={() => setOpen(true)} className={s.burger}>
          <img src={require('../../../img/burger.svg')} alt=""/>
        </div>

        <Transition 
          in={isOpen} 
          onEnter={node => node.offsetHeight} 
          timeout={duration} 
          mountOnEnter={true} 
          unmountOnExit={true} 
        >
          {state => {
            return(
            <div 
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
              className={s.modal}
            >
              <div className={s.content}>
                <a href={`tel:${phone}`}>
                  {phone}
                </a>
                <nav onClick={() => setOpen(false)}>
                  {location.pathname === '/' ?
                  <>
                    <a href="#services">Услуги</a>
                    <a href="#advantages">Приемущества</a>
                    <a href="#faq">Вопрос-ответ</a>
                    <a href="#contacts">Контакты</a>
                  </> :
                  <>
                    <Link to={{
                      pathname: '/',
                      hash: '#services',
                      state: {
                        scrollTo: 'services'
                      }
                    }}>
                      Услуги
                    </Link>
                    <Link to={{
                      pathname: '/',
                      hash: '#advantages',
                      state: {
                        scrollTo: 'advantages'
                      }
                    }}>
                      Приемущества
                    </Link>
                    <Link to={{
                      pathname: '/',
                      hash: '#faq',
                      state: {
                        scrollTo: 'faq'
                      }
                    }}>
                      Вопрос-ответ
                    </Link>
                    <Link to={{
                      pathname: '/',
                      hash: '#contacts',
                      state: {
                        scrollTo: 'contacts'
                      }
                    }}>
                      Контакты
                    </Link>
                  </>
                  }           
                </nav>     
                <div onClick={() => setOpen(false)} className={s.close}>
                  <img src={require('../../../img/close.svg')} alt=""/>
                </div>     
              </div>
            </div>
          )}}
        </Transition>
      </div>
    </div>
  )
};

export default HeaderBar;
