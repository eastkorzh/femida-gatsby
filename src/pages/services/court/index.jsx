import React from 'react';

import Service from '../service';
import NavRouter from 'src/components/navRoutes';
import About from "src/components/about";
import Info from 'src/components/info';
//import Documents from 'src/components/documents';
import CostsAndFeesList from 'src/components/costsAndFeesList';
import Roadmap from 'src/components/roadmap';
import { graphql } from "gatsby";

const Court = ({ data, location }) => {
  const { 
    h2,
    p,
    h3_1,
    h3_2,
    costsList,
    info,
    stepsList1,
    stepsList2,
  } = data.allStrapiCourts.edges[0].node;

  return (
    <Service location={location}>
      <NavRouter currentNavName={h2} />
      <About 
        h2={h2}
        p={p}
        imgName='representation' 
        costsList={costsList}
      />
      <Info>
        <div dangerouslySetInnerHTML={{ __html: (info)}} />
      </Info>
      <Roadmap h3={h3_1} stepsList={stepsList1} />
      <Roadmap h3={h3_2} stepsList={stepsList2} />
      {/* <Documents data={data} /> */}
      <CostsAndFeesList 
        costsList={costsList}
      />
    </Service>
  )
}

export default Court;

export const pageQuery = graphql`
  query courtQuery {
    allStrapiCourts {
      edges {
        node {
          costsList {
            name
            price
          }
          h2
          h3_1
          h3_2
          info
          p
          stepsList1 {
            name
          }
          stepsList2 {
            name
          }
        }
      }
    }
  }
`