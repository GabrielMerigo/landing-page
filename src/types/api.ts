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

export type LadingPageProps = {
  logo: LogoProps,
  SectionHeader: HeaderProps,
  SectionAboutProject: SectionAboutProps,
  SectionTech: SectionTechProps
}