import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCard } from "../utils/cardSlice";

const Card = () => {
  const cardItem = useSelector((store) => store.card.items);
  const dispatch = useDispatch();
  const handleClearCard = () => {
    dispatch(clearCard());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="text-2xl fort-bold">Card</h1>
      <div className="w-6/12 m-auto ">
        <button
          className="p-2 m-2 bg-black text-white rounded-lg"
          onClick={handleClearCard}
        >
          Clear Card
        </button>
        <ItemList items={cardItem} />
      </div>
    </div>
  );
};

export default Card;
