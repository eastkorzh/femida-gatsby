import React, { useEffect } from 'react';

import Header from 'src/components/landing/header';
import Services from 'src/components/landing/services';
import Advantages from 'src/components/landing/advantages';
import FAQ from 'src/components/landing/FAQ';
import Footer from 'src/components/landing/footer';
import FooterBar from 'src/components/footerBar';

import 'src/styles/index.css';

const Landing = ({ data, location }) => {
  const { 
    h1,
    h2,
    advantagesH2,
    advantagesP1,
    advantagesP2,
    FrequentlyAskedQuestions,
    phone,
    email,
    address,
  } = data.allStrapiLandings.edges[0].node;

  useEffect(() => {
    const state = location.state;
    
    if (state && state.scrollTo) {
      const top = document.getElementById(state.scrollTo).offsetTop;
      window.scrollTo({ top: top - 50, behavior: 'instant'})
    }
  }, [location.state])

  return (
    <>
      <Header h1={h1} h2={h2} location={location}/>
      <Services />
      <Advantages 
        advantagesH2={advantagesH2}
        advantagesP1={advantagesP1}
        advantagesP2={advantagesP2}
      />
      <FAQ FrequentlyAskedQuestions={FrequentlyAskedQuestions} />
      <Footer 
        phone={phone}
        address={address}
        email={email}
      />
      <FooterBar />
    </>
  )
}

export default Landing;

export const pageQuery = graphql`
  query IndexQuery {
    allStrapiLandings {
      edges {
        node {
          h1
          h2
          advantagesH2
          advantagesP1
          advantagesP2
          FrequentlyAskedQuestions {
            answer
            question
          }
          phone
          email
        }
      }
    }
  }
`
