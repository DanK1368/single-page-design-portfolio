import { Button } from "./shared/Button";

const Cta = () => {
  return (
    <section className=" flex flex-col justify-center items-center mt-20 bg-base-100 px-6 py-10 gap-6 text-center rounded-lg ">
      <h4 className=" text-2xl font-medium text-white ">Book a call with me</h4>
      <p>
        I’d love to have a chat to see how I can help you. The best first step
        is for us to discuss your project during a free consultation. Then we
        can move forward from there.
      </p>
      <Button bgColor="bg-secondary" />
    </section>
  );
};
export default Cta;
