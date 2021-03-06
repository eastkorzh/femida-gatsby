import React from 'react';

import Service from '../service';
import NavRouter from 'src/components/navRoutes';
import About from "src/components/about";
//import Info from 'src/components/info';
import Documents from 'src/components/documents';
import CostsAndFeesList from 'src/components/costsAndFeesList';
import ExtendedAbout from 'src/components/extendedAbout';

import { graphql } from "gatsby";

const Editing = ({ data, location }) => {
  const { 
    h2,
    p,
    about,
    costsList,
    documentList,
  } = data.allStrapiEditings.edges[1].node;

  return (
    <Service location={location}>
      <NavRouter currentNavName={h2} />
      <About 
        h2={h2}
        p={p}
        imgName='editing' 
        costsList={costsList}
        documentList={documentList}
      />
      {about && 
        <ExtendedAbout about={about} />
      }
      {/* <Info>
        <div dangerouslySetInnerHTML={{ __html: (info)}} />
      </Info>       */}
      <Documents 
        documentList={documentList}
      />
      <CostsAndFeesList 
        costsList={costsList}
      />
    </Service>
  )
}

export default Editing;

export const pageQuery = graphql`
  query editingQuery1 {
    allStrapiEditings {
      edges {
        node {
          about
          costsList {
            name
            price
          }
          documentList {
            name
            type
          }
          h2
          p
        }
      }
    }
  }
`
