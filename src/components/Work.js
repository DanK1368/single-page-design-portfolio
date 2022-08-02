import Cards from "../components/shared/Cards";
import graphicDesign from "../assets/pattern-graphic-design.svg";
import uiUxDesign from "../assets/pattern-ui-ux.svg";
import appsDesign from "../assets/pattern-apps.svg";
import illustrationsDesign from "../assets/pattern-illustrations.svg";
import photographyDesign from "../assets/pattern-photography.svg";
import motionDesign from "../assets/pattern-motion-graphics.svg";

const Work = () => {
  return (
    <div className="  grid grid-cols-2 gap-6 my-8 md:grid-cols-4 md:grid-rows-3 lg:grid-rows-2  ">
      <Cards
        text="Graphic Design"
        graphic={graphicDesign}
        layout="row-span-3 gap-16 col-span-2 bg-primary md:row-span-2 lg:row-span-2 lg:col-span-1 lg:"
      />
      <Cards text="UI/UX" graphic={uiUxDesign} layout=" gap-7  bg-accent  " />
      <Cards text="Apps" graphic={appsDesign} layout=" gap-7  bg-[#F39E9E] " />
      <Cards
        text="Illustrations"
        graphic={illustrationsDesign}
        layout="col-span-2 bg-secondary gap-10"
      />
      <Cards
        text="Photography"
        graphic={photographyDesign}
        layout="col-span-2 bg-[#61C4B7] gap-10 lg:col-start-4 lg:row-start-1"
      />
      <Cards
        text="Motion Graphics"
        graphic={motionDesign}
        layout="col-span-2 bg-[#552049] gap-10"
      />
    </div>
  );
};
export default Work;
