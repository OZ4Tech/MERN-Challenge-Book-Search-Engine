export const GET_ME = graphql`

        user {
          username
          email
          bookCount
          savedBooks {
            bookId
            authors
            description
            title
            image
            link
          }
        }
      `;