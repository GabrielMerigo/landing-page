import React from 'react'
import { GetStaticProps } from 'next'

import SectionHero from 'components/SectionHero'
import SectionAboutProject from 'components/SectionAboutProject'
import SectionTech from 'components/SectionTech'
import SectionConcepts from 'components/SectionConcepts'
import SectionModules from 'components/SectionModules'
import SectionAgenda from 'components/SectionAgenda'
import PricingBox from 'components/PricingBox'
import SectionAboutUs from 'components/SectionAboutUs'
import SectionReviews from 'components/SectionReviews'
import SectionFaq from 'components/SectionFaq'
import Footer from 'components/Footer'
import JsonSchema from 'components/JsonSchema'

import client from 'graphql/client'
import GET_LADING_PAGE from 'graphql/queries/getLadingPage'
import { LadingPageProps } from 'types/api'

const Index = ({
  logo,
  SectionHeader,
  SectionAboutProject: SectionProject,
  SectionTech: SectionTecnologies,
}: LadingPageProps) => (
  <>
    <SectionHero logo={logo} SectionHeader={SectionHeader} />
    <SectionAboutProject SectionProject={SectionProject} />
    <SectionTech SectionTecnologies={SectionTecnologies}  />
    <SectionConcepts />
    <SectionModules />
    <SectionAgenda />
    <PricingBox />
    <SectionAboutUs />
    <SectionReviews />
    <SectionFaq />
    <Footer />
    <JsonSchema />
  </>
);

export const getStaticProps: GetStaticProps = async () => {
  const { ladingPage } = await client.request(GET_LADING_PAGE);

  return {
    props: {
      ...ladingPage.data.attributes
    }
  }
}

export default Index
