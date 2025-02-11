import { useDispatch, useSelector } from "react-redux";
import { bagSliceActions } from "../store/bagSlice";
import { bagSumActions } from "../store/bagSumSlice";

const HomeItem = ({ item }) => {
  let dispatch = useDispatch();

  const addToBagButtonClicked = (item) => {
    dispatch(bagSliceActions.addToBag(item));

    dispatch(bagSumActions.addTotalMRP(item.original_price));
    dispatch(
      bagSumActions.discountOnMRP({
        originalPrice: item.original_price,
        currentPrice: item.current_price,
      })
    );
    dispatch(bagSumActions.totalAmount(item.current_price));
    dispatch(bagSumActions.finalPayment());
  };

  const handleRemoveButtonClicked = (itemId) => {
    console.log(itemId);
    dispatch(bagSliceActions.removeFromBag(itemId));
  };
  const bagitems = useSelector((state) => state.bagitems);
  const Result = bagitems.includes(item);

  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {Result ? (
        <button
          type="button"
          class="btn btn-danger btn-add-bag"
          onClick={() => handleRemoveButtonClicked(item.id)}
        >
          {" "}
          Remove From Bag
        </button>
      ) : (
        <button
          type="button"
          class="btn btn-success btn-add-bag"
          onClick={() => addToBagButtonClicked(item)}
        >
          Add to Bag
        </button>
      )}
    </div>
  );
};
export default HomeItem;
