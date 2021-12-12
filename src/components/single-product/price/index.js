const Price = ({ regularPrice = 0 }) => {
  /**
   * Get discount percent.
   *
   * @param {String} regularPrice
   * @param {String} salesPrice
   */

  return (
    <h6 className='product-price text-gray-800 font-semibold mr-3 mb-5'>
      <span>{regularPrice.replace(/\&nbsp;/g, "")}</span>
    </h6>
  );
};

export default Price;
