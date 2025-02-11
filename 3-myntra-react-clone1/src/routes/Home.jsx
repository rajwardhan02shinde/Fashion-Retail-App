import HomeItem from "../components/HomeItem";
import { useSelector } from "react-redux";

const Home = () => {
  const items = useSelector((state) => state.items);

  return (
    <div className="items-container">
      {items.map((item) => (
        <HomeItem key={item.id} item={item} />
      ))}
    </div>
  );
};
export default Home;
