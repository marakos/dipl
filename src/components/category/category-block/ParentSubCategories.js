import Link from "next/link";
import Image from "../../../image";

import ProductSubCategoryBlock from "./ParentSubCategoryBlock";

const ParentSubCategoriesBlock = (props) => {
  const { productSubCategories } = props;

  return (
    <div className='product-categories grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4'>
      {productSubCategories.map((subCategory, index) => (
        <ProductSubCategoryBlock
          key={subCategory?.node.productCategoryId ?? index}
          category={subCategory.node}
        />
      ))}
    </div>
  );
};

export default ParentSubCategoriesBlock;
