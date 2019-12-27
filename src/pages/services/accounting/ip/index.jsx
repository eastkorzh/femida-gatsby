import React from 'react';

import Service from '../../service';
import NavRouter from 'src/components/navRoutes';
import About from "src/components/about";
import Info from 'src/components/info';
import Documents from 'src/components/documents';
import Subservices from 'src/components/subservices';
//import CostsAndFeesList from 'src/components/costsAndFeesList';
//import Roadmap from 'src/components/roadmap';
import s from '../styles.module.scss';


const Accounting = ({ data, location }) => {
  const {
    documentList1,
    documentList2,
    h2,
    h3_1,
    h3_2,
    info,
    p,
    subservices,
  } = data.allStrapiAccountings.edges[0].node;

  return (
    <Service location={location}>
      <NavRouter currentNavName={h2} />
      <About 
        h2={h2}
        p={p}
        imgName='calc' 
        documentList={documentList1}
      />
      <Info>
        <div dangerouslySetInnerHTML={{ __html: info}} />
      </Info>
      {subservices &&
        <div className={s.subservicesWrapper}>
          {subservices[0] &&
            <Subservices to={'/services/accounting/zeroreporting'} data={subservices[0]} />
          }
          {subservices[1] &&
            <Subservices to={'/services/accounting/envd'} data={subservices[1]} />
          }
        </div>
      }
      <Documents 
        h4={h3_1}
        documentList={documentList1}
        documentsDelimiter={h3_2}
        documentList2={documentList2}
      />
    </Service>
  )
}

export default Accounting;

export const pageQuery = graphql`
  query Accounting {
    allStrapiAccountings {
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
          h3_1
          h3_2
          info
          p
          subservices {
            about
            h3
            p
            price
          }
        }
      }
    }
  }
`