import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full  py-20 rounded-tl-3xl rounded-tr-3xl  bg-[#004D43] text-zinc-100">
      <div className="text border-t-2 border-b-2 border-zinc-300 flex gap-14 overflow-hidden  whitespace-nowrap ">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration:10 }}
          className="uppercase leading-none text-[28vw] font-founders-bold font-[900] -mb-[7vw] mt-3 "
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration:10 }}
          className="uppercase leading-none text-[28vw] font-founders-bold font-[900] -mb-[7vw] mt-3 "
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration:10 }}
          className="uppercase leading-none text-[28vw] font-founders-bold font-[900] -mb-[7vw] mt-3 "
        >
          we are ochi
        </motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
