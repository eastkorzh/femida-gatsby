import React from 'react';

import Service from '../service';
import NavRouter from 'src/components/navRoutes';
import About from "src/components/about";
//import Info from 'src/components/info';
//import Documents from 'src/components/documents';
import CostsAndFeesList from 'src/components/costsAndFeesList';
//import Roadmap from 'src/components/roadmap';

const Claim = ({ data, location }) => {
  const { 
    h2,
    p,
    costsList,
  } = data.allStrapiClaims.edges[0].node;
  return (
    <Service location={location}>
      <NavRouter currentNavName={h2} />
      <About 
        h2={h2}
        p={p}
        imgName='claim' 
        costsList={costsList}
      />
      {/* <Info>
        <div>{data && data.info}</div>
      </Info> */}
      {/* <Documents data={data} /> */}
      <CostsAndFeesList 
        costsList={costsList}
      />
      {/* <Roadmap data={data} /> */}
    </Service>
  )
}

export default Claim;

export const pageQuery = graphql`
  query claimQuery {
    allStrapiClaims {
      edges {
        node {
          h2
          p
          costsList {
            name
            price
            oldPrice
          }
        }
      }
    }
  }
`