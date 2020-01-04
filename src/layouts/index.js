import React from "react";
import {
  TransitionGroup,
  Transition as ReactTransition,
} from "react-transition-group";
import useStoreon from 'storeon/react';

const Layout = (props) => {
  const { children, location } = props;

  const { dispatch, isFromRoot } = useStoreon('isFromRoot');
  
  const timeout = 200
  const getTransitionStyles = {
    entering: {
      position: `absolute`,
      opacity: 0,
      transform: 'translateX(100px)',
    },
    entered: {
      transition: `all ${timeout}ms ease-out`,
      opacity: 1,
    },
    exiting: {
      transition: `all ${timeout}ms ease-out`,
      opacity: 0,
      transform: 'translateX(-50px)',
    },
  }

  const reverse = {
    entering: {
      position: `absolute`,
      opacity: 0,
      transform: 'translateX(-50px)',
    },
    entered: {
      transition: `all ${timeout}ms ease-out`,
      opacity: 1,
    },
    exiting: {
      transition: `all ${timeout}ms ease-out`,
      opacity: 0,
      transform: 'translateX(100px)',
    },
  }

  React.useEffect(() => {
    setTimeout(() => {
      dispatch('setDefault')
    }, 500)
  }, [isFromRoot])

  return (
    <TransitionGroup>
      <ReactTransition
        key={location.pathname}
        timeout={{
          enter: timeout,
          exit: timeout,
        }}
      >
        {status => {
          return (
          <div
            style={(isFromRoot) ? {
              ...getTransitionStyles[status],
            } : {
              ...reverse[status]
            }   
          }
          >
            {children}
          </div>
        )}}
      </ReactTransition>
    </TransitionGroup>
  )
}

export default Layout
