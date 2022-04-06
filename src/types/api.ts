export type LogoProps = {
  data: {
    attributes: {
      alternativeText: string
      url: string
    }
  }
}

export type HeaderProps ={
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
  SectionAboutProject:  {
    photo:  {
      data:  {
        attributes:  {
          alternativeText: string
          url: string
        }
      }
    }
    title: string
    description: string
  }
}

export type LadingPageProps = {
  logo: LogoProps,
  SectionHeader: HeaderProps,
  SectionAboutProject: SectionAboutProps
}