export default function CartHeader({ products }) {
  const numberItems = products.reduce((total, product) => {
    return (total += product.quantity);
  }, 0);

  return (
    <header className="container">
      <h1>Shopping Cart</h1>
      <ul className="breadcrumb">
        <li>Home</li>
        <li>Shopping Cart</li>
      </ul>
      <span className="count">{numberItems} items in the bag</span>
    </header>
  );
}
