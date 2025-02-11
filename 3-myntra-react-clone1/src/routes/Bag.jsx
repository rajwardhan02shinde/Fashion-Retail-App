import { useSelector } from "react-redux";
import BagItem from "../components/BagItem";
import BagSummary from "../components/BagSummary";

const Bag = () => {
  const bagSlice = useSelector((state) => state.bagitems);
  console.log(bagSlice);
  return (
    <main>
      <div className="bag-page">
        <div className="bag-contents">
          {bagSlice.length === 0 ? (
            <div className="h1Container">
              {" "}
              <h1 className="h1Child">No items added in bag </h1>
            </div> // Display this if the bag is empty
          ) : (
            bagSlice.map((item) => <BagItem item={item} />) // Display BagItem components if there are items
          )}
        </div>
        <BagSummary />
      </div>
    </main>
  );
};

export default Bag;
