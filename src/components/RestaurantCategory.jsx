import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex, dummy }) => {
  const handleClick = () => {
    setShowIndex();
  };

  console.log("datdatadatadatadataa", data?.["@type"]);
  console.log("datdatadatadatadataa", data?.categories?.[0]?.itemCards);
  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold text-lg">
            {data?.title} ({data?.categories?.[0]?.itemCards?.length})
          </span>
          <span>⬇️</span>
        </div>

        {showItems && (
          <ItemList items={data?.categories?.[0]?.itemCards} dummy={dummy} />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
