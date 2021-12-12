import { isEmpty } from "lodash";
import GalleryCarousel from "./single-product/gallery-carousel";
import Price from "./single-product/price";
import Form from "./form/Form";
import AddToCartButton from "./cart/AddToCartButton";

const SingleProduct = (props) => {
  const { product, refetch } = props;
  console.log(product);
  return (
    <div className='single-product container mx-auto my-32 px-4 xl:px-0'>
      <div className='grid md:grid-cols-2 gap-4'>
        <div className='product-images'>
          {!isEmpty(product?.galleryImages?.nodes) ? (
            <GalleryCarousel gallery={product?.galleryImages?.nodes} />
          ) : !isEmpty(product.image) ? (
            <img
              src={product?.image?.sourceUrl}
              alt='Product Image'
              width='100%'
              height='auto'
              srcSet={product?.image?.srcSet}
            />
          ) : null}
        </div>
        <div className='product-info'>
          <h4 className='products-main-title text-2xl uppercase'>
            {product.name}
          </h4>
          <div
            dangerouslySetInnerHTML={{
              __html: product.description,
            }}
            className='product-description mb-5'
          />
          <Price
            salesPrice={product?.price}
            regularPrice={product?.regularPrice}
          />
          <AddToCartButton product={product} />
        </div>
      </div>
      <div className='grid md:grid-cols-2 gap-4'>
        <div className='product-images'>
          <Form
            // handleFormSubmit={handleCommentSubmit}
            product={product}
            title={"Add a comment"}
          />
        </div>

        <div
          className='product-info'
          style={{ maxHeight: "500px", overflowX: "hidden" }}
        >
          <h2 className='main-title text-xl mb-5 mt-5 uppercase'>
            <span className='text-2xl mb-5'>Reviews</span>
          </h2>
          {product.reviews.nodes.map((review, index) => {
            return (
              <div
                key={index}
                className='max-w-sm w-full lg:max-w-full lg:flex'
              >
                <div className='border-r border-b border-l border-gray-400 lg:border-l lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal w-full'>
                  <div className='mb-8'>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: review.content,
                      }}
                      className='product-description mb-5 w-full'
                    />
                  </div>
                  <div className='flex items-center'>
                    <div className='text-sm'>
                      <p className='text-gray-900 leading-none'>
                        {review.author.node.name}
                      </p>
                      <p className='text-gray-600'>{review.date}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
