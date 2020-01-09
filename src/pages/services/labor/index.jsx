import React from 'react';
import { graphql } from "gatsby";

import Service from '../service';
import NavRouter from 'src/components/navRoutes';
import About from "src/components/about";
import Documents from 'src/components/documents';
import CostsAndFeesList from 'src/components/costsAndFeesList';

const Labor = ({ data, location }) => {
  const { 
    h2,
    p,
    documentList,
    costsList,
  } = data.allStrapiLabors.edges[0].node;
  return (
    <Service location={location}>
      <NavRouter currentNavName={h2} />
      <About 
        h2={h2}
        p={p}
        imgName='newContract' 
        documentList={documentList}
        costsList={costsList}
      />
      <Documents 
        documentList={documentList}
      />
      <CostsAndFeesList 
        costsList={costsList}
      />
    </Service>
  )
}

export default Labor;

export const pageQuery = graphql`
  query laborQuery {
    allStrapiLabors{
      edges {
        node {
          h2
          p
          documentList {
            name
            type
          }
          costsList {
            name
            price
          }
        }
      }
    }
  }
`
