import React from "react";

export default function CartSummary({ products, discountPercent }) {
  const subTotal = products.reduce((total, product) => {
    return (total += product.price * product.quantity);
  }, 0);
  const discount = (subTotal * discountPercent) / 100;
  const tax = (subTotal - discount) * 0.1;
  const total = subTotal - discount + tax;

  return (
    <React.Fragment>
      <div className="summary">
        <ul>
          <li>
            Subtotal <span>${subTotal}</span>
          </li>

          {discount > 0 && (
            <li>
              Discount <span>${discount}</span>
            </li>
          )}

          <li>
            Tax <span>${tax.toFixed(2)}</span>
          </li>
          <li className="total">
            Total <span>${total}</span>
          </li>
        </ul>
      </div>
      <div className="checkout">
        <button type="button">Check Out</button>
      </div>
    </React.Fragment>
  );
}
