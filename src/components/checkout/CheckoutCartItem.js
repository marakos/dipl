const CheckoutCartItem = ({ item }) => {
  return (
    <tr className='woo-next-cart-item' key={item.productId}>
      <td className='woo-next-cart-element'>
        <img
          width='64'
          src={item.image.sourceUrl}
          srcSet={item.image.srcSet}
          alt={item.image.title}
        />
      </td>
      <td className='woo-next-cart-element'>{item.name}</td>
      <td className='woo-next-cart-element'>
        {item.totalPrice.replace(/\&nbsp;/g, "")}
      </td>
    </tr>
  );
};

export default CheckoutCartItem;
