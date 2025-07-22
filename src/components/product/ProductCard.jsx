function ProductCard(props) {
  return (
    <div>
      <h1>
        {props.title} || Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops
      </h1>
      <h2>{props.price} || 109.95</h2>
      <h3>
        {props.description} || Your perfect pack for everyday use and walks in
        the forest. Stash your laptop (up to 15 inches) in the padded sleeve,
        your everyday
      </h3>
      <img src="{props.image} || https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"></img>
    </div>
  );
}

export default ProductCard;
