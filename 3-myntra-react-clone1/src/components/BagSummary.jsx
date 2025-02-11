import { useSelector } from "react-redux";

const BagSummary = () => {
  const bagSlice = useSelector((state) => state.bagitems);
  const bagSummary = useSelector((state) => {
    return state.bagSummary;
  });
  console.log(bagSummary);
  const conveniencePay = 0;
  const finalPay = 0;
  return (
    <div className="bag-summary">
      {" "}
      <div className="bag-details-container">
        <div className="price-header">
          PRICE DETAILS ({bagSlice.length} Items){" "}
        </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{bagSummary.totalMRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹{bagSummary.discountOnMRP}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">
            {" "}
            {bagSlice.length > 0 ? bagSummary.convenienceFee : conveniencePay}
          </span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">
            ₹{bagSlice.length > 0 ? bagSummary.finalPayment : finalPay}
          </span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};
export default BagSummary;
