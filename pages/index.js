import CardGrid from "../components/CardGrid";
import pfp from "../public/pfp.jpg";

const Home = () => {
  return (
    <div>
      <img
        src={pfp.src}
        alt="berserk"
        className="h-[8rem] w-[8rem]  rounded-full mx-auto mt-[4rem] "
      />
      <p className="w-max mx-auto mt-4">
        Hey I'm Manish. I'm 15yo Frontend Developer from India.
      </p>
      <CardGrid />
    </div>
  );
};

export default Home;
