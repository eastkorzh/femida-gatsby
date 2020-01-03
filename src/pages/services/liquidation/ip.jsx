import React from 'react';

import Service from '../service';
import NavRouter from 'src/components/navRoutes';
import About from "src/components/about";
import Info from 'src/components/info';
import Documents from 'src/components/documents';
import CostsAndFeesList from 'src/components/costsAndFeesList';
import ExtendedAbout from 'src/components/extendedAbout';

import { graphql } from "gatsby";

const Liquidation = ({ data, location }) => {
  const { 
    h2,
    info,
    p,
    about,
    docH3_1,
    docH3_2,
    costsList,
    feesList,
    documentList,
    documentList2,
  } = data.allStrapiLiquidations.edges[1].node;

  return (
    <Service location={location}>
      <NavRouter currentNavName={h2} />
      <About 
        h2={h2}
        p={p}
        imgName='liquidation' 
        costsList={costsList}
        documentList={documentList}
      />
      <ExtendedAbout about={about} />
      <Info>
        <div dangerouslySetInnerHTML={{ __html: (info)}} />
      </Info>      
      <Documents 
        h4={docH3_1}
        documentList={documentList}
      />
      <Documents 
        h4={docH3_2}
        documentList={documentList2}
        disableH3={true}
      />
      <CostsAndFeesList 
        costsList={costsList}
        feesList={feesList}
        disableH3={true}
      />
    </Service>
  )
}

export default Liquidation;

export const pageQuery = graphql`
  query liquidationQuery1 {
    allStrapiLiquidations {
      edges {
        node {
          about
          costsList {
            name
            price
          }
          docH3_1
          docH3_2
          documentList {
            name
            type
          }
          documentList1 {
            name
            type
          }
          feesList {
            name
            price
          }
          h2
          info
          p
        }
      }
    }
  }
`
