import { gql } from "@apollo/client";

/**
 * GraphQL categories query.
 */
export const GET_SUB_CATEGORIES_QUERY = gql`
  query GET_SUB_CATEGORIES_QUERY($slug: [String]) {
    productCategories(where: { slug: $slug }) {
      nodes {
        children {
          edges {
            node {
              productCategoryId
              name
              slug
              image {
                id
                sourceUrl
                srcSet
                parentId
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_SUB_CATEGORIES_QUERIES = gql`
  query GET_SUB_CATEGORIES_QUERIES {
    productCategories(where: { parent: 33, childless: false }) {
      nodes {
        id
        slug
      }
    }
  }
`;
