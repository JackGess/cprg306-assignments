export default function Item({ itemObj, onSelect }) {
  const { name, quantity, category } = itemObj;

  const handleClick = () => {
    if (onSelect) {
      onSelect(itemObj);
    }
  };

  return (
    <div
      onClick={handleClick}
      className="bg-blue-400 m-4 p-4 rounded-2xl w-80 shadow-lg cursor-pointer hover:bg-blue-500 transition"
    >
      <h2 className="text-2xl font-bold text-white mb-2">{name}</h2>
      <ul className="space-y-1 text-white text-base">
        <li>Purchase {quantity}</li>
        <li>Located in {category}</li>
      </ul>
    </div>
  );
}
