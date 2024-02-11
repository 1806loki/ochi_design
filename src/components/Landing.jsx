import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
  return (
    <div className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStructure  mt-40 px-20 ">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker  " key={index}>
              <div className=" flex items-end  0">
                {index === 1 && (
                  <div className="w-[10vw]  h-[7vw] relative    bg-red-900"></div>
                )}
                <h1 className="uppercase text-[8vw] tracking-tighter leading-[7vw] first-letter font-semibold  ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}

        <div className="border-t-[1px] border-zinc-700 mt-20 flex justify-between items-center py-5 px-3">
          {[
            "For Public and private companies",
            "From the first pitch to IPO",
          ].map((item, index) => (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none px-20 "
            >
              {item}
            </p>
          ))}
          <div className="start flex items-center">
            <div className="px-5 py-2 border-[1px] rounded-full border-zinc-800 font-light text-sm capitalize ">
              Start the project
            </div>
            <div className="w-10 h-10 flex items-center justify-center border-[1px]  rounded-full">
              <i className="rotate-45">
                <FaArrowUpLong />
              </i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
