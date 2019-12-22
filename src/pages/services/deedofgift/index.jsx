import React from 'react';

import Service from '../service';
import NavRouter from 'src/components/navRoutes';
import About from "src/components/about";
import Info from 'src/components/info';
import Documents from 'src/components/documents';
import CostsAndFeesList from 'src/components/costsAndFeesList';
import Roadmap from 'src/components/roadmap';

const DeedOfGift = ({ data, location }) => {
  const { 
    h2,
    p,
    info,
    documentList,
    documentList2,
    costsList,
    feesList,
    documentsDelimiter,
    h3,
    stepsList,
  } = data.allStrapiDeedofgifts.edges[0].node;
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
        documentsDelimiter={documentsDelimiter}
        documentList2={documentList2}
      />
      <CostsAndFeesList 
        costsList={costsList}
        feesList={feesList}
      />
      <Roadmap h3={h3} stepsList={stepsList} />
    </Service>
  )
}

export default DeedOfGift;

export const pageQuery = graphql`
  query deedOfGift {
    allStrapiDeedofgifts {
      edges {
        node {
          h2
          p
          info
          documentList {
            name
            type
          }
          documentList2 {
            name
            ifNext
          }
          documentsDelimiter
          costsList {
            name
            price
            oldPrice
          }
          costsList {
            name
            price
          }
          h3
          stepsList {
            name
          }
        }
      }
    }
  }
`
