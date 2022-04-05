const GET_LOGO = /* GraphQL */ `
  query GET_LOGO{
    ladingPage{
      data {
        attributes {
          logo {
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
`

export default GET_LOGO;