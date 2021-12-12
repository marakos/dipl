import Layout from "../../src/components/Layout";
import client from "../../src/components/ApolloClient";
import ParentSubCategories from "../../src/components/category/category-block/ParentSubCategories";
import {
  GET_SUB_CATEGORIES_QUERY,
  GET_SUB_CATEGORIES_QUERIES,
} from "../../src/queries/get-sub-categories";

export default function SubCategories(props) {
  const { productSubCategories } = props;
  return (
    <Layout>
      {/*Sub Categories*/}
      <div className='categories product-categories-container container mx-auto my-32 px-4 xl:px-0'>
        <h2 className='text-2xl mb-5 uppercase'>Sub Categories</h2>
        {productSubCategories &&
          Object.keys(productSubCategories).length > 0 && (
            <ParentSubCategories productSubCategories={productSubCategories} />
          )}
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const {
    params: { slug },
  } = context;

  const { data } = await client.query({
    query: GET_SUB_CATEGORIES_QUERY,
    variables: { slug },
  });

  return {
    props: {
      productSubCategories:
        data?.productCategories?.nodes[0].children.edges ?? [],
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: GET_SUB_CATEGORIES_QUERIES,
  });

  const pathsData = [];

  data?.productSubCategories?.nodes &&
    data?.productSubCategories?.nodes.map((productSubCategory) => {
      if (!isEmpty(productCategory?.slug)) {
        pathsData.push({ params: { slug: productSubCategory?.slug } });
      }
    });

  return {
    paths: pathsData,
    fallback: true,
  };
}
