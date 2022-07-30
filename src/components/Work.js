import Cards from "../components/shared/Cards";
import graphicDesign from "../assets/pattern-graphic-design.svg";
import uiUxDesign from "../assets/pattern-ui-ux.svg";
import appsDesign from "../assets/pattern-apps.svg";
import illustrationsDesign from "../assets/pattern-illustrations.svg";
import photographyDesign from "../assets/pattern-photography.svg";
import motionDesign from "../assets/pattern-motion-graphics.svg";

const Work = () => {
  return (
    <div className=" grid grid-cols-2 col gap-6 my-8 ">
      <Cards
        text="Graphic Design"
        graphic={graphicDesign}
        layout="gap-16 col-span-2 bg-primary"
      />
      <Cards text="UI/UX" graphic={uiUxDesign} layout="gap-10 bg-accent" />
      <Cards text="Apps" graphic={appsDesign} layout="gap-10 bg-[#F39E9E]" />
      <Cards
        text="Illustrations"
        graphic={illustrationsDesign}
        layout="col-span-2 bg-secondary"
      />
      <Cards
        text="Photography"
        graphic={photographyDesign}
        layout="col-span-2 bg-[#61C4B7]"
      />
      <Cards
        text="Motion Graphics"
        graphic={motionDesign}
        layout="col-span-2 bg-[#552049]"
      />
    </div>
  );
};
export default Work;
