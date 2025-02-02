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

type Tech = {
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

type Concept = {
  concept: string
}

export type SectionConceptProps = {
  concepts: Concept[],
  title: string
}

type Module = {
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

type Link = {
  url: string
  label: string
}

type Author = {
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

export type Review = {
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
  reviews: Review[]
}

export type SectionFAQ = {
  questions: Array<{
    question: string
    answer: string
  }>
}

export type FooterProps = {
  description: string
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
  SectionFAQ: SectionFAQ,
  footer: FooterProps
}