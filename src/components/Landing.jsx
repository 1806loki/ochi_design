import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

const Landing = () => {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-0.7"
      className="w-full h-screen bg-zinc-100 pt-1"
    >
      <div className="textStructure  mt-40 px-20 ">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker" key={index}>
              <div className="w-fit flex   ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="w-[9vw] h-[6vw] bg-red-500 relative -top-[1.2vw] mr-2 bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] bg-cover"
                  ></motion.div>
                )}
                <h1 className=" flex items-center uppercase text-[9vw] leading-[7vw]  font-founders-bold   ">
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
          <div className="start flex items-center gap-1">
            <div className="px-5 py-2 border-[1px] rounded-full text-black border-zinc-900 font-light text-sm uppercase hover:bg-black hover:text-white">
              Start the project
            </div>
            <div className="w-10 h-10 flex items-center justify-center border-[1px] border-1 border-black rounded-full text-black hover:text-white hover:bg-black">
              <i className="rotate-45   ">
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
