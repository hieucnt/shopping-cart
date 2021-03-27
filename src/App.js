import { useState } from "react";
import CartHeader from "./components/CartHeader";
import CartBody from "./components/CartBody";
import CartPromotion from "./components/CartPromotion";
import CartSummary from "./components/CartSummary";
import Modal from "./components/Modal";

const PRODUCTS = [
  {
    id: 1,
    nameProduct: "Nike Air Max Viva",
    description:
      "Designed with every woman in mind, the mixed material upper of the Nike Air Max Viva features a plush collar, detailed patterning and intricate stitching. The new lacing system uses 2 separate laces constructed from heavy-duty tech chord, letting you find the perfect fit. Mixing comfort with style, it combines Nike Air with a lifted foam heel for and unbelievable ride that looks as good as it feels.",
    price: 150,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/20875a18-6199-407b-9d5d-ec0f6c73ae76/air-max-viva-shoe-31Zblk.jpg",
    quantity: 3,
  },
  {
    id: 2,
    nameProduct: "Nike Air Force 1 '07 SE",
    description:
      "The radiance lives on in the Nike Air Force 1 '07 SE, the b-ball icon that puts a Valentine's Day spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine. The embossed words LOVE and LOVE FOR ALL form the Swoosh designs, while little lockets of creativity throughout reveal your love for style and detail.",
    price: 300,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/87e2a0be-5ffe-481f-9abc-ca4f385a0ce4/air-force-1-07-se-shoe-G0dtLG.jpg",
    quantity: 2,
  },
  {
    id: 3,
    nameProduct: "Air Jordan 1 Mid",
    description:
      "The Air Jordan 1 Mid Shoe is inspired by the first AJ1, offering fans of Jordan retros a chance to follow in the footsteps of greatness. Fresh colour trims the clean, classic materials, injecting some newness into the familiar design.",
    price: 459,
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,b_rgb:f5f5f5/zzmfk3kwuw3ktkilxfnp/air-jordan-1-mid-shoe-BpARGV.jpg",
    quantity: 3,
  },
];

const PROMOTIONS = [
  {
    id: "ABCXYZ",
    discountPercent: 10,
  },
  {
    id: "ABCDEF",
    discountPercent: 20,
  },
];

function App() {
  const [products, setProducts] = useState(PRODUCTS);
  const [discountPercent, setDiscountPercent] = useState(0);
  const [isVisible, setVisible] = useState(false);
  const [productId, setProductId] = useState(null);

  function confirmRemoveProduct(id) {
    setVisible(true);
    setProductId(id);
  }

  function removeProduct() {
    // Tao ra mang moi khong chua san pham can xoa
    const newProducts = products.filter((product) => product.id !== productId);

    // Cap nhat state
    setProducts(newProducts);

    // Tat modal
    setVisible(false);
  }

  function changeQuantity(event, productId) {
    // Cap nhat lai quantity cua product tuong ung
    const newProducts = products.map((product) => {
      if (product.id === productId) {
        const value = event.target.value;
        product.quantity = value === "" ? 0 : parseInt(value);
        return product;
      }

      return product;
    });

    // Cap nhat state
    setProducts(newProducts);
  }

  function applyPromoCode(promoCode) {
    const code = PROMOTIONS.find((c) => c.id === promoCode);

    if (code) {
      setDiscountPercent(code.discountPercent);
    } else {
      alert("Ma giam gia khong hop le!");
    }
  }

  return (
    <main>
      <CartHeader products={products} />

      <CartBody
        products={products}
        changeQuantity={changeQuantity}
        confirmRemoveProduct={confirmRemoveProduct}
      />

      {/* {products.length === 0 && (
        <section className="container">
          <h1>Khong co san pham nao trong gio hang</h1>
        </section>
      )}

      {products.length > 0 && (
        <section className="container">
          <CartPromotion applyPromoCode={applyPromoCode} />

          <CartSummary products={products} discountPercent={discountPercent} />
        </section>
      )} */}

      {products.length > 0 ? (
        <section className="container">
          <CartPromotion applyPromoCode={applyPromoCode} />

          <CartSummary products={products} discountPercent={discountPercent} />
        </section>
      ) : (
        <section className="container">
          <h1>Khong co san pham nao trong gio hang</h1>
        </section>
      )}

      <Modal
        isVisible={isVisible}
        setVisible={setVisible}
        removeProduct={removeProduct}
      />
    </main>
  );
}

export default App;
