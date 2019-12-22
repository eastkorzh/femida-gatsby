import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby"

import HeaderBar from '../headerBar';
import Button from 'src/components/ui/Button';
import Form from 'src/components/form';

import s from './styles.module.scss';
import throttle from 'src/utils/throttle';

const Header = ({ h1, h2, location }) => {
  const [ isNear, setNear ] = useState(true);
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

  const throttledHandleScroll = throttle(() => {
    if (window.pageYOffset + 200 > document.documentElement.clientHeight) {
      if (isNear === true) setNear(false);
    } else {
      if (isNear === false) setNear(true);
    }
  }, 300);
  
  useEffect(() => {
    window.addEventListener('scroll', throttledHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    }
  }, [throttledHandleScroll]);

  const img = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "femida.png" }) {
        childImageSharp {
          fluid(maxWidth: 670) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return(
    <header className={s.header}>
      <div className={s.container}>
        <HeaderBar location={location} />
        {!isNear &&
          <div className={s.fixedMenu}>
            <HeaderBar location={location} fixed={true}/>
          </div>
        }
        <div className={s.content}>
          <div className={s.left}>
            <h1>{h1}</h1>
            <h2>{h2}</h2>
            <Button 
              onClick={() => {
                setOpen(true);
              }}  
              className={s.btnWrapper}
            >
              Бесплатная консультация
            </Button>
          </div>
          <div className={s.right}>
            <Img 
              style={{height: '100%',  width: 'auto'}} 
              fluid={img.placeholderImage.childImageSharp.fluid} 
              imgStyle={{ objectFit: 'contain' }}
            />
          </div>
        </div>
      </div>

      <Transition 
        in={isOpen} 
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
                setOpen(false);
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
    </header>
  )
}

export default Header;
