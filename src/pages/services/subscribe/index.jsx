import React from 'react';

import Service from '../service';
import NavRouter from 'src/components/navRoutes';
import About from "src/components/about";
import CostsAndFeesList from 'src/components/costsAndFeesList';
import Roadmap from 'src/components/roadmap';
import { graphql } from "gatsby";

const Subscribe = ({ data, location }) => {
  const { 
    h2,
    p,
    costsList,
    h3,
    h3_after,
    stepsList,
  } = data.allStrapiSubscribes.edges[0].node;
  return (
    <Service location={location}>
      <NavRouter currentNavName={h2} />
      <About 
        h2={h2}
        p={p}
        imgName='subscribe' 
        costsList={costsList}
      />
      <Roadmap h3={h3} h3After={h3_after} stepsList={stepsList} />
      <CostsAndFeesList 
        costsList={costsList}
      />
    </Service>
  )
}

export default Subscribe;

export const pageQuery = graphql`
  query subscribe {
    allStrapiSubscribes {
      edges {
        node {
          h2
          p
          costsList {
            name
            price
          }
          h3
          h3_after
          stepsList {
            name
          }
        }
      }
    }
  }
`
