import React, { useEffect } from 'react';
import { Helmet } from "react-helmet"

import Header from 'src/components/landing/header';
import Services from 'src/components/landing/services';
import Advantages from 'src/components/landing/advantages';
import FAQ from 'src/components/landing/FAQ';
import Footer from 'src/components/landing/footer';
import FooterBar from 'src/components/footerBar';
import { graphql } from "gatsby";

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

  return (
    <>
      <Helmet>
        <title>Фемида: юридический центр</title>
      </Helmet>
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
          address
        }
      }
    }
  }
`
