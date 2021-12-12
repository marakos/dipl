import { gql } from "@apollo/client";

/**
 * GraphQL categories query.
 */
const GET_CATEGORIES_QUERY = gql`
  query {
    productCategories(where: { parent: 33, childless: false }) {
      nodes {
        productCategoryId
        name
        slug
        image {
          id
          sourceUrl
          srcSet
          parentId
        }
        children {
          edges {
            node {
              id
              name
            }
          }
        }
      }
    }
  }
`;

export default GET_CATEGORIES_QUERY;
