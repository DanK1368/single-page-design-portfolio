const Cards = ({ text, graphic, layout }) => {
  return (
    <div
      className={`  p-5 rounded-md text-neutral text-2xl font-medium flex flex-col justify-between ${layout}`}
    >
      <div className="flex justify-end">
        <img src={graphic} alt="" />
      </div>
      <h2>{text}</h2>
    </div>
  );
};
export default Cards;
