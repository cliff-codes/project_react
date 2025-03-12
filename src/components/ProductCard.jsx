
const ProductCard = ({ product }) => {
  return (
    <div className="max-w-sm rounded-xl overflow-hidden shadow-lg bg-white p-4">
      <img className="w-full h-48 object-cover" src={product.image} alt={product.title} />
      <div className="py-4">
        <h3 className="font-bold text-lg">{product.title}</h3>
        <p className="text-gray-700 text-sm">{product.description.substring(0, 100)}...</p>
        <p className="text-gray-900 font-semibold mt-2">${product.price}</p>
        <p className="text-sm text-gray-500">Category: {product.category}</p>
        <p className="text-yellow-500">⭐ {product.rating.rate} ({product.rating.count} reviews)</p>
        <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
