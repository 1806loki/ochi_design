const Cards = () => {
  return (
    <div
      data-scroll-section
      data-scroll
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-100 flex gap-5 mt-20 px-32"
    >
      <div className="cardContainer h-[50vh] w-1/2">
        <div className="card relative w-full h-full bg-[#004D43] rounded-xl flex items-center justify-center flex-col">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt="logo1"
          />
          <button className="absolute left-10 bottom-5 border-[1px] border-[#CDEA68] text-[#CDEA68] rounded-3xl px-2 py-1">
            ©️2019-2024
          </button>
        </div>
      </div>
      <div className="cardContainer h-[50vh] w-1/2 flex gap-5">
        <div className=" card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt="logo2"
          />
          <button className="absolute uppercase left-5 bottom-5 border-[1px] border-zinc-100 text-white rounded-3xl px-2 py-1">
            Rating 5.0 on clutch
          </button>
        </div>
        <div className=" card relative w-1/2 h-full bg-[#212121] rounded-xl flex items-center justify-center">
          <img
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt="logo3"
          />
          <button className="absolute uppercase left-5 bottom-5 border-[1px] border-zinc-100 text-white rounded-3xl px-2 py-1">
            business bootcamp alumini
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
