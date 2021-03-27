import { useState } from "react";

export default function CartPromotion({ applyPromoCode }) {
  const [promoCode, setPromoCode] = useState("");
  
  return (
    <div className="promotion">
      <label htmlFor="promo-code">Have A Promo Code?</label>
      <input
        type="text"
        id="promo-code"
        value={promoCode}
        onChange={(event) => setPromoCode(event.target.value)}
      />
      <button type="button" onClick={() => applyPromoCode(promoCode)} />
    </div>
  );
}
