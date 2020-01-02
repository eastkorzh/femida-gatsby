import React from 'react';

import Service from '../service';
import NavRouter from 'src/components/navRoutes';
import About from "src/components/about";
import Info from 'src/components/info';
//import Documents from 'src/components/documents';
import CostsAndFeesList from 'src/components/costsAndFeesList';
import Roadmap from 'src/components/roadmap';
import { graphql } from "gatsby";

const Ndfl = ({ data, location }) => {
  const { 
    costsList,
    h2,
    h3,
    info,
    p,
    stepsList,
  } = data.allStrapiNdfls.edges[0].node;

  return (
    <Service location={location}>
      <NavRouter currentNavName={h2} />
      <About 
        h2={h2}
        p={p}
        imgName='3ndfl' 
        costsList={costsList}
      />
      <Info>
        <div dangerouslySetInnerHTML={{ __html: (info)}} />
      </Info>
      <Roadmap h3={h3} stepsList={stepsList} />
      {/* <Documents data={data} /> */}
      <CostsAndFeesList 
        costsList={costsList}
      />
    </Service>
  )
}

export default Ndfl;

export const pageQuery = graphql`
  query ndflQuery {
    allStrapiNdfls {
      edges {
        node {
          costsList {
            name
            price
          }
          h2
          h3
          info
          p
          stepsList {
            name
          }
        }
      }
    }
  }
`