import gql from "graphql-tag";

export const QUERY_PRODUCTS = gql`
        query fdf{
            products {
                id
                nome
                short_description
                long_description
                imagens
                peso
                dimensoes
                disponibilidade
                categoria
                cor
                marca
                long_description
                createdAt
                tags
                updatedAt
            }
        }
`;

export const GET_USERS = gql`
  query GetUsers {
    usuarios {
      id
      name
      email
      address{
        city
        street
      }
    }
  }
`;