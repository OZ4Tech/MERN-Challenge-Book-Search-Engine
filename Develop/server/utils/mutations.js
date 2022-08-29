import { graphql } from '@apollo/client';

export const LOGIN_USER = graphql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = graphql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const SAVE_BOOK = graphql`
  mutation saveBook($savedBooks: [Book]!) {
    saveBook(savedBooks: $savedBooks) {
      bookid
      authors
      description
      title
      image
      link {

      }
    }
  }
`;

export const REMOVE_BOOK = graphql`
  mutation removeBook($removeBooks: [Book]!) {
    saveBook(savedBooks: $removeBooks) {
      bookid
      authors
      description
      title
      image
      link 
      }
    }
  }
`;
