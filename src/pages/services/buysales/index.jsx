import React from 'react';

import Service from '../service';
import NavRouter from 'src/components/navRoutes';
import About from "src/components/about";
import Info from 'src/components/info';
import Documents from 'src/components/documents';
import CostsAndFeesList from 'src/components/costsAndFeesList';
//import Roadmap from 'src/components/roadmap';

const BuySales = ({ data, location }) => {
  const { 
    h2,
    p,
    info,
    documentList,
    costsList,
    feesList,
  } = data.allStrapiBuysales.edges[0].node;

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
      <Info>
        <div dangerouslySetInnerHTML={{ __html: info}} />
      </Info>
      <Documents 
        documentList={documentList}
      />
      <CostsAndFeesList 
        costsList={costsList}
        feesList={feesList}
      />
    </Service>
  )
}

export default BuySales;

export const pageQuery = graphql`
  query buySalesQuery {
    allStrapiBuysales {
      edges {
        node {
          h2
          p
          info
          costsList {
            name
            price
          }
          feesList {
            name
            price
          }
          documentList {
            name
            type
          }
        }
      }
    }
  }
`
