import React from 'react';

import Service from '../../service';
import NavRouter from 'src/components/navRoutes';
import About from "src/components/about";
import Info from 'src/components/info';
import Documents from 'src/components/documents';
import CostsAndFeesList from 'src/components/costsAndFeesList';
//import Roadmap from 'src/components/roadmap';
import { graphql } from "gatsby";

const Mfc = ({ data, location }) => {
  const {
    documentList1,
    documentList2,
    h2,
    h3,
    info,
    p,
    costsList,
  } = data.allStrapiMfcs.edges[0].node;

  return (
    <Service location={location}>
      <NavRouter currentNavName={h2} />
      <About 
        h2={h2}
        p={p}
        imgName='mfc' 
        documentList={documentList1}
      />
      <Info>
        <div dangerouslySetInnerHTML={{ __html: info}} />
      </Info>
      <Documents
        documentList={documentList1}
        documentList2={documentList2}
      />
      <CostsAndFeesList 
        costsList={costsList}
      />
    </Service>
  )
}

export default Mfc;

export const pageQuery = graphql`
  query MfcQuery {
    allStrapiMfcs {
      edges {
        node {
          documentList1 {
            name
            type
          }
          documentList2 {
            name
            type
          }
          h2
          h3
          info
          p
          costsList {
            name
            price
          }
        }
      }
    }
  }
`