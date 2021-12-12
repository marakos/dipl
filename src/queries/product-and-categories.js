import { gql } from "@apollo/client";

/**
 * GraphQL categories and products query.
 */
const PRODUCTS_AND_CATEGORIES_QUERY = gql`
  query {
    heroCarousel: productCategories(where: { slug: "offers" }) {
      nodes {
        id
        children {
          nodes {
            id
            name
            slug
            databaseId
            description
            image {
              id
              sourceUrl
              srcSet
            }
          }
        }
      }
    }
    productCategories(where: { parent: 0, exclude: [15, 33] }) {
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
      }
    }
    products(where: { orderby: { field: MODIFIED } }, first: 8) {
      nodes {
        id
        productId: databaseId
        averageRating
        slug
        description
        image {
          id
          altText
          sourceUrl
        }
        name
        ... on SimpleProduct {
          price
          regularPrice
          id
        }
        ... on VariableProduct {
          price
          id
          regularPrice
        }
        ... on ExternalProduct {
          price
          id
          externalUrl
          regularPrice
        }
        ... on GroupProduct {
          id
          products {
            nodes {
              ... on SimpleProduct {
                id
                price
                regularPrice
              }
            }
          }
        }
      }
    }
  }
`;

export default PRODUCTS_AND_CATEGORIES_QUERY;
