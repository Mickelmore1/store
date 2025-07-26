function Basket({ basketList, subTotal }) {
  return (
    <>
      <h3>Subtotal: £{subTotal}</h3>
      <h1>This is the basket</h1>;
      {basketList.map((product) => (
        <h3>{product.title}</h3>
      ))}
    </>
  );
}

export default Basket;
