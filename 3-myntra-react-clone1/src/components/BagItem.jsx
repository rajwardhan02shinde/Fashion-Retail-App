import { useDispatch } from "react-redux";
import { bagSliceActions } from "../store/bagSlice";
import { bagSumActions } from "../store/bagSumSlice";

const BagItem = ({ item }) => {
  const dispatch = useDispatch();
  const handleCutButtonClicked = (item) => {
    console.log(item.id);
    dispatch(bagSliceActions.removeFromBag(item.id));
    dispatch(bagSumActions.removeFromMRP(item.original_price));
    dispatch(
      bagSumActions.removeDiscountOnMRP({
        originalPrice: item.original_price,
        currentPrice: item.current_price,
      })
    );
    dispatch(bagSumActions.removeTotalAmount(item.current_price));
    dispatch(bagSumActions.removeFinalPayment());
  };
  console.log(item);
  return (
    <div className="bag-items-container">
      {" "}
      <div className="bag-item-container">
        <div className="item-left-part">
          <img className="bag-item-img" src={item.image} />
        </div>
        <div className="item-right-part">
          <div className="company">{item.company}hy</div>
          <div className="item-name">{item.item_name}</div>
          <div className="price-container">
            <span className="current-price">Rs {item.current_price}</span>
            <span className="original-price">Rs {item.original_price}</span>
            <span className="discount-percentage">
              ({item.discount_percentage}% OFF)
            </span>
          </div>
          <div className="return-period">
            <span className="return-period-days">
              {item.return_period} days
            </span>{" "}
            return available
          </div>
          <div className="delivery-details">
            Delivery by
            <span className="delivery-details-days">{item.delivery_date}</span>
          </div>
        </div>

        <div
          className="remove-from-cart"
          onClick={() => handleCutButtonClicked(item)}
        >
          X
        </div>
      </div>
    </div>
  );
};
export default BagItem;
