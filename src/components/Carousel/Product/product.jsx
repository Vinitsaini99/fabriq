// ProductComponent.jsx
export default function Product({ img }) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <img
        src={img}
        alt="product"
        className="w-[300px] h-[450px] object-cover rounded-xl transition-all duration-700 hover:scale-110 hover:-translate-y-2 hover:shadow-xl"
      />
    </div>
  );
}
