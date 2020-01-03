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
    costsList,
    feesList,
    documentList,
  } = data.allStrapiRegistrations.edges[1].node;

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
      {/* <Documents 
        h4={docH3_2}
        documentList={documentList2}
        disableH3={true}
      /> */}
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
  query registerationQuery1 {
    allStrapiRegistrations {
      edges {
        node {
          about
          docH3_1
          costsList {
            name
            price
          }
          documentList {
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
