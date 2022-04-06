const GET_LADING_PAGE = /* GraphQL */ `

fragment logo on LadingPage {
  logo {
    data {
      attributes {
        alternativeText
        url
      }
    }
  }
}

fragment header on LadingPage {
  SectionHeader {
    title
    description
    button {
      label
      url
    }
    image {
      data {
        attributes {
          alternativeText
          url
        }
      }
    }
  }
}

fragment aboutProject on LadingPage {
  SectionAboutProject {
    photo {
      data {
        attributes {
          alternativeText
          url
        }
      }
    }
    title
    description
  }
}

query GET_LADING_PAGE {
  ladingPage {
    data {
      attributes {
        ...header
        ...logo
        ...aboutProject
      }
    }
  }
}
`

export default GET_LADING_PAGE;