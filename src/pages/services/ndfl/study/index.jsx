import React from 'react';
import { graphql } from "gatsby";

import Service from '../../service';
import NavRouter from 'src/components/navRoutes';
import About from "src/components/about";
import Info from 'src/components/info';
import Documents from 'src/components/documents';
import CostsAndFeesList from 'src/components/costsAndFeesList';
//import Roadmap from 'src/components/roadmap';


const Study = ({ data, location }) => {
  const { 
    costsList,
    h2,
    info,
    p,
    documentList,
  } = data.allStrapiNdfls.edges[3].node;

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
      {/* <Roadmap h3={h3} stepsList={stepsList} /> */}
      <Documents documentList={documentList} />
      <CostsAndFeesList 
        costsList={costsList}
      />
    </Service>
  )
}

export default Study;

export const pageQuery = graphql`
  query studyQuery {
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
          documentList {
            name
          }
        }
      }
    }
  }
`