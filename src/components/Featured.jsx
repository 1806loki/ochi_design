const Featured = () => {
  return (
    <div className="w-full py-10 ">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl tracking-tight">Featured Projects</h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-10 mt-10">
          <div className="cardContainer rounded-xl w-1/2 h-[75vh]   relative ">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-[10px] h-[10px] bg-black rounded-full"></div>
              <h1>FYDE</h1>
            </div>
            <h1 className="absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2  text-[#CDEA68] z-[9] text-[9vw] font-founders-bold uppercase">
              {"Fyde".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full bg-green-600 overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt="Fyde"
                className="w-full h-full bg-cover "
              />
            </div>
            <div className="p-2 pl-0 flex whitespace-nowrap gap-2">
              <button className="border-[1px] border-zinc-900 rounded-full px-2 uppercase">
                Audit
              </button>
              <button className="border-[1px] border-zinc-900 rounded-full px-2 uppercase">
                COPYWRITING
              </button>
              <button className="border-[1px] border-zinc-900 rounded-full px-2 uppercase">
                Sales DEck
              </button>
              <button className="border-[1px] border-zinc-900 rounded-full px-2 uppercase">
                Slides Design
              </button>
            </div>
          </div>
          <div className="cardContainer rounded-xl w-1/2 h-[75vh]   relative">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-[10px] h-[10px] bg-black rounded-full"></div>
              <h1>VISE</h1>
            </div>
            <h1 className="absolute right-full top-1/2 translate-x-1/2 -translate-y-1/2  text-[#CDEA68] z-[9] text-[9vw] font-founders-bold uppercase">
              {"Vise".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full   ">
              <img
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt="Vise"
                className="w-full h-full bg-cover"
              />
            </div>
            <div className="p-2 pl-0 flex whitespace-nowrap gap-2">
              <button className="border-[1px] border-zinc-900 rounded-full px-2 uppercase">
                Agency
              </button>
              <button className="border-[1px] border-zinc-900 rounded-full px-2 uppercase">
                company presentation
              </button>
            </div>
          </div>
        </div>
        <div className="cards w-full flex gap-10 mt-28">
          <div className="cardContainer rounded-xl w-1/2 h-[75vh]   relative ">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-[10px] h-[10px] bg-black rounded-full"></div>
              <h1>TRAWA</h1>
            </div>
            <h1 className="absolute left-full top-1/2 -translate-x-1/2 -translate-y-1/2  text-[#CDEA68] z-[9] text-[9vw] font-founders-bold uppercase">
              {"TRAWA".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full bg-green-600 overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2023/08/Frame-3875-663x551.jpg"
                alt="trawa"
                className="w-full h-full bg-cover "
              />
            </div>
            <div className="p-2 pl-0 flex whitespace-nowrap gap-2">
              <button className="border-[1px] border-zinc-900 rounded-full px-2 uppercase">
                Brand Identity
              </button>
              <button className="border-[1px] border-zinc-900 rounded-full px-2 uppercase">
                Design Research
              </button>
              <button className="border-[1px] border-zinc-900 rounded-full px-2 uppercase">
                Investor Deck
              </button>
            </div>
          </div>
          <div className="cardContainer rounded-xl w-1/2 h-[75vh]   relative">
            <div className="flex items-center gap-2 mb-5">
              <div className="w-[10px] h-[10px] bg-black rounded-full"></div>
              <h1>PREMIUM BLEND</h1>
            </div>
            <h1 className="absolute right-full top-1/2 translate-x-1/2 -translate-y-1/2 tracking-tight text-[#CDEA68] z-[9] text-[7vw]  font-founders-bold uppercase">
              {"PREMIUM BLEND".split("").map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="card w-full h-full   ">
              <img
                src="https://ochi.design/wp-content/uploads/2022/12/PB-Front-4-663x551.png"
                alt="PREMIUM BLEND"
                className="w-full h-full bg-cover"
              />
            </div>
            <div className="p-2 pl-0 flex whitespace-nowrap gap-2">
              <button className="border-[1px] border-zinc-900 rounded-full px-2 uppercase">
                Branded template
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
