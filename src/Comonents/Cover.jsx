import PopularMenu from "../Pages/Home/PopularMenu";

const Cover = ({img , title , slogan}) => {
    return (
      <div>
        <div
  className="hero h-[700px]"
  style={{
    backgroundImage: `url("${img}")`,
  }}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-neutral-content text-center">
    <div className="max-w-md">
      <h1 className="mb-5  uppercase text-5xl font-bold font-Cinzel">{title}</h1>
      <p className="mb-5 font-Cinzel font-semibold">
        {slogan}
      </p>
    </div>
  </div>

</div>
    <PopularMenu></PopularMenu>
    <PopularMenu></PopularMenu>
    <PopularMenu></PopularMenu>
    </div>
    );
};

export default Cover;