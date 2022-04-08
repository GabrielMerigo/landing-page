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

fragment tecnologies on LadingPage {
  SectionTech {
    title
    tecnologies {
      title
      icon {
        data {
          attributes {
            url
            alternativeText
          }
        }
      }
    }
  }
}

fragment concepts on LadingPage {
  SectionConcepts {
    concepts {
      concept
    }
    title
  }
}

fragment modules on LadingPage {
  SectionModules {
    title
    modules {
      title
      subtitle
      description
    }
  }
}

fragment agenda on LadingPage {
  SectionAgenda {
    title
    description
  }
}

fragment princingBox on LadingPage {
  SectionPrincingBox {
    totalPrice
    installments
    priceInstallment
    description
    button {
      label
      url
    }
  }
}

fragment aboutUs on LadingPage {
  AboutUs {
    title
    authors {
      data {
        attributes {
          name
          rule
          description
          links {
            url
            label
          }
          photo {
            data {
              attributes {
                alternativeText
                url
              }
            }
          }
        }
      }
    }
  }
}

fragment reviews on LadingPage {
  SectionReview {
    title
    reviews {
      name
      description
      photo {
        data {
          attributes {
            url
            alternativeText
          }
        }
      }
    }
  }
}

fragment faq on LadingPage {
  SectionFAQ {
    questions {
      question
      answer
    }
  }
}

fragment footer on LadingPage{
  footer {
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
        ...tecnologies
        ...concepts
        ...modules
        ...agenda
        ...princingBox
        ...aboutUs
        ...reviews
        ...faq
        ...footer
      }
    }
  }
}

`;

export default GET_LADING_PAGE;