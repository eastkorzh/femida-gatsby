import React from 'react';

import Service from '../service';
import NavRouter from 'src/components/navRoutes';
import About from "src/components/about";
import Info from 'src/components/info';
//import Documents from 'src/components/documents';
import CostsAndFeesList from 'src/components/costsAndFeesList';
import Roadmap from 'src/components/roadmap';
import { graphql } from "gatsby";

const RegisterAndliquidation = ({ data, location }) => {
  const { 
    h2,
    h3,
    info1,
    info2,
    p,
    costsList,
    stepsList,
  } = data.allStrapiRegisterandliquidation.edges[0].node;

  return (
    <Service location={location}>
      <NavRouter currentNavName={h2} />
      <About 
        h2={h2}
        p={p}
        imgName='editing' 
        costsList={costsList}
      />
      <Info>
        <div dangerouslySetInnerHTML={{ __html: (info1)}} />
      </Info>      
      <Info style={{marginTop: '40px'}}>
        <div dangerouslySetInnerHTML={{ __html: (info2)}} />
      </Info>
      {/* <Documents data={data}/> */}
      <CostsAndFeesList 
        costsList={costsList}
      />
      <Roadmap h3={h3} stepsList={stepsList} />
    </Service>
  )
}

export default RegisterAndliquidation;

export const pageQuery = graphql`
  query liquidQuery {
    allStrapiRegisterandliquidation {
      edges {
        node {
          h2
          h3
          info1
          info2
          costsList {
            name
            price
          }
          p
          stepsList {
            name
          }
        }
      }
    }
  }
`
