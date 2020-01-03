const transitionDelay = 200

export const shouldUpdateScroll = ({
    routerProps: { location },
    getSavedScrollPosition,
}) => {
    if (location.action === 'PUSH') {
        const state = location.state;
    
        if (state && state.scrollTo) {
          const topp = document.getElementById(state.scrollTo).offsetTop;
          
          //setTimout prevent autoumatic scroll top provided by Gatsby
          setTimeout(() => {
            window.scrollTo({ top: topp - 50})
          }, transitionDelay)
        } else {
          window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)
        }
    } else {
        const savedPosition = getSavedScrollPosition(location)
        window.setTimeout(
            () => window.scrollTo(...(savedPosition || [0, 0])),
            transitionDelay
        )
    }
    return false
    }

export { default as wrapRootElement } from 'src/storeonWrapper';
