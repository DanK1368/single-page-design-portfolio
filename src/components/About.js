import { Button } from "./shared/Button";
import profilePic from "../assets/image-amy.webp";

const About = () => {
  return (
    <section className="flex flex-col justify-center items-center gap-6 text-center">
      <img className=" w-[90%] " src={profilePic} alt="" />
      <h3 className=" text-2xl font-semibold w-[90%] text-base-100 ">
        I’m Amy, and I’d love to work on your next project
      </h3>
      <p className=" text-md font-light text-neutral-content leading-6 ">
        I love working with others to create beautiful design solutions. I’ve
        designed everything from brand illustrations to complete mobile apps.
        I’m also handy with a camera!
      </p>
      <Button bgColor="bg-secondary" />
    </section>
  );
};
export default About;
