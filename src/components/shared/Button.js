export const Button = ({ bgColor }) => {
  return (
    <button
      className={`${bgColor} btn border-none  text-neutral rounded-full text-xs 
      px-6 hover:bg-primary hover:border-none`}
    >
      Free Consultation
    </button>
  );
};
