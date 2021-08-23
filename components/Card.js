const Card = ({ heading, desc, img }) => {
  return (
    <div className="mx-4 min-w-[250.25px] mt-4 w-[25vw] max-w-[292.75px] shadow rounded-sm flex flex-col ">
      <img src={img} className="rounded-t-md" />
      <h2 className="font-bold mt-4">{heading}</h2>
      <p className="mt-4">{desc}</p>
    </div>
  );
};

export default Card;
