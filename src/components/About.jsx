const About = () => {
  return (
    <div className="w-full rounded-tl-3xl p-20 rounded-tr-3xl py-20 bg-[#CDEA68] text-black">
      <h1 className=" text-[4vw] leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell products, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="w-full border-t-[1px] pt-20 mt-20 border-[#a1b562] flex gap-5">
        <div className="w-1/2 ">
          <h1 className="text-[5vw]">Our approach:</h1>
          <button className="flex gap-10 items-center uppercase px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
            Read more
            <div className="w-3 h-3 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2      overflow-hidden">
          <img
            src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            alt="Couple Image"
            className="rounded-3xl"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
