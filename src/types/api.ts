export type LogoProps = {
  data: {
    attributes: {
      alternativeText: string
      url: string
    }
  }
}

export type LadingPageProps = {
  logo: LogoProps
}