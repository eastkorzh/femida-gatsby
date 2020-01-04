import React from 'react';
import { graphql } from "gatsby";

import Service from '../service';
import NavRouter from 'src/components/navRoutes';
import About from "src/components/about";
import Info from 'src/components/info';
import Documents from 'src/components/documents';
import CostsAndFeesList from 'src/components/costsAndFeesList';
//import Roadmap from 'src/components/roadmap';

const Rent = ({ data, location }) => {
  const { 
    h2,
    p,
    documentList,
    costsList,
    info,
  } = data.allStrapiRents.edges[0].node;

  return (
    <Service location={location}>
      <NavRouter currentNavName={h2} />
      <About 
        h2={h2}
        p={p}
        imgName='newContract' 
        costsList={costsList}
      />
      <Info>
        <div dangerouslySetInnerHTML={{ __html: (info)}} />
      </Info>
      <Documents documentList={documentList} />
      <CostsAndFeesList 
        costsList={costsList}
      />
    </Service>
  )
}

export default Rent;

export const pageQuery = graphql`
  query rentQuery {
    allStrapiRents {
      edges {
        node {
          costsList {
            name
            price
          }
          h2
          info
          p
          documentList {
            name
          }
        }
      }
    }
  }
`