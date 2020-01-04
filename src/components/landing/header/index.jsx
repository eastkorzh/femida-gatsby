import React, { useState, useEffect } from 'react';
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby"
import useStoreon from 'storeon/react';
import { Transition } from 'react-transition-group';

import HeaderBar from '../headerBar';
import Button from 'src/components/ui/Button';
import Modal from 'src/components/modal';

import s from './styles.module.scss';
import throttle from 'src/utils/throttle';

const Header = ({ h1, h2, location }) => {
  const [ isNear, setNear ] = useState(true);
  
  const { dispatch } = useStoreon();

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
      <Modal />
      <div className={s.container}>
        <HeaderBar location={location} />
        
        <Transition 
          in={!isNear} 
          onEnter={node => node.offsetHeight} 
          timeout={duration} 
          mountOnEnter={true} 
          unmountOnExit={true} 
        >
          {state => (
            <div 
              className={s.fixedMenu}
              style={{
                ...defaultStyle,
                ...transitionStyles[state]
              }}
            >
              <HeaderBar location={location} fixed={true}/>
            </div>
          )}
        </Transition>

        <div className={s.content}>
          <div className={s.left}>
            <h1>{h1}</h1>
            <h2>{h2}</h2>
            <Button 
              onClick={() => {
                dispatch('setModalOpen')
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
    </header>
  )
}

export default Header;
