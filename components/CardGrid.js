import Card from "./Card";
import project from "../public/project.jpg";

const CardGrid = () => {
  const works = [
    {
      heading: "Founders Mafia Podcast",
      desc: "Founders Mafia is a podcasts for Tech Startup Founders to share their success",
      img: project,
    },
    {
      heading: "Vivid Hack",
      desc: "Vivid Hack is a 60hour hackathon for everybody. They provide you with the mentors to bring your dream project to reality .",
      img: project,
    },
    {
      heading: "Onelax Bhamas",
      desc: "A non-profit organization to expose inner-city of bahiminan children to the sport of lacroose",
      img: project,
    },
  ];

  return (
    <div className="flex w-[80%] mx-auto mt-[5rem] flex-wrap justify-around">
      {works.map(({ heading, desc, img }) => {
        return <Card heading={heading} desc={desc} img={img.src} />;
      })}
    </div>
  );
};

export default CardGrid;
