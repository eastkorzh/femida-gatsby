import React from 'react';
import { graphql } from "gatsby";

import Service from '../service';
import NavRouter from 'src/components/navRoutes';
import About from "src/components/about";
import Info from 'src/components/info';
import Documents from 'src/components/documents';
import CostsAndFeesList from 'src/components/costsAndFeesList';
import ExtendedAbout from 'src/components/extendedAbout';

const Registration = ({ data, location }) => {
  const { 
    h2,
    info,
    p,
    about,
    docH3_1,
    docH3_2,
    docH3_3,
    docH3_4,
    costsList,
    feesList,
    documentList,
    documentList2,
    documentList3,
    documentList4,
  } = data.allStrapiRegistrations.edges[0].node;

  return (
    <Service location={location}>
      <NavRouter currentNavName={h2} />
      <About 
        h2={h2}
        p={p}
        imgName='register' 
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
      <Documents 
        h4={docH3_3}
        documentList={documentList3}
        disableH3={true}
      />
      <Documents 
        h4={docH3_4}
        documentList={documentList4}
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

export default Registration;

export const pageQuery = graphql`
  query registerationQuery {
    allStrapiRegistrations {
      edges {
        node {
          about
          docH3_1
          docH3_2
          docH3_3
          docH3_4
          costsList {
            name
            price
          }
          documentList {
            name
            type
          }
          documentList2 {
            name
            type
          }
          documentList3 {
            name
            type
          }
          documentList4 {
            name
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
