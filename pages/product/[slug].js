import Layout from "../../src/components/Layout";
import { useRouter } from "next/router";
import client from "../../src/components/ApolloClient";

import {
  PRODUCT_BY_SLUG_QUERY,
  PRODUCT_SLUGS,
} from "../../src/queries/product-by-slug";
import { isEmpty } from "lodash";
import GalleryCarousel from "../../src/components/single-product/gallery-carousel";
import Price from "../../src/components/single-product/price";
import Form from "../../src/components/form/Form";

import React from "react";
import SingleProduct from "../../src/components/SingleProduct";

export default function Product(props) {
  const { product } = props;
  const router = useRouter();

  // If the page is not yet generated, this will be displayed
  // initially until getStaticProps() finishes running
  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return <Layout>{product ? <SingleProduct product={product} /> : ""}</Layout>;
}

export async function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  const { data } = await client.query({
    query: PRODUCT_BY_SLUG_QUERY,
    variables: { slug },
  });

  return {
    props: {
      product: data?.product || {},
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: PRODUCT_SLUGS,
  });

  const pathsData = [];

  data?.products?.nodes &&
    data?.products?.nodes.map((product) => {
      if (!isEmpty(product?.slug)) {
        pathsData.push({ params: { slug: product?.slug } });
      }
    });

  return {
    paths: pathsData,
    fallback: true,
  };
}
