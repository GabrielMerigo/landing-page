export type LogoProps = {
  data: {
    attributes: {
      alternativeText: string
      url: string
    }
  }
}

export type HeaderProps = {
  title: string
  description: string
  button: {
    label: string
    url: string
  }
  image: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
}

export type SectionAboutProps = {
  photo: {
    data: {
      attributes: {
        alternativeText: string
        url: string
      }
    }
  }
  title: string
  description: string
}

interface Tech {
  title: string
  icon: {
    data: {
      attributes: {
        url: string
        alternativeText: string
      }
    }
  }
}

export type SectionTechProps = {
  title: string
  tecnologies: Tech[]
}

interface Concept {
  concept: string
}

export type SectionConceptProps = {
  concepts: Concept[],
  title: string
}

interface Module {
  title: string
  subtitle: string
  description: string
}

export type SectionModulesProps = {
  title: string,
  modules: Array<Module>
}

export type SectionAgendaProps = {
  title: string
  description: string
}

export type SectionPrincingBoxProps = {
  totalPrice: number
  installments: number
  priceInstallment: number
  description: string
  button: {
    label: string
    url: string
  }
}

interface Link {
  url: string
  label: string
}

interface Author {
  attributes: {
    name: string
    rule: string
    description: string
    links: Link[]
    photo: {
      data: {
        attributes: {
          alternativeText: string
          url: string
        }
      }
    }
  }
}

export type AboutUsProps = {
  title: string
  authors: {
    data: Author[]
  }
}

interface Interview {
  name: string
  description: string
  photo: {
    data: {
      attributes: {
        url: string
        alternativeText: string
      }
    }
  }
}

export type SectionReviewProps = {
  title: string
  reviews: Interview[]
}

export type LadingPageProps = {
  logo: LogoProps,
  SectionHeader: HeaderProps,
  SectionAboutProject: SectionAboutProps,
  SectionTech: SectionTechProps,
  SectionConcepts: SectionConceptProps,
  SectionModules: SectionModulesProps,
  SectionAgenda: SectionAgendaProps,
  SectionPrincingBox: SectionPrincingBoxProps
  AboutUs: AboutUsProps
  SectionReview: SectionReviewProps
}