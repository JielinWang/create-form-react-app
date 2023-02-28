import React, { useState, useEffect } from "react";
import { motion as m } from "framer-motion";
import Confetti from "react-confetti";

const Success = () => {
  const [pieces, setPieces] = useState(300);

  //Set Confetti stopping time
  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 2500);
  };

  useEffect(() => {
    stopConfetti();
  }, []);

  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" h-screen items-center flex justify-center "
    >
      <div className="bg-white rounded-lg  font-latoRegular text-gray-700 p-16">
        <h1 className="text-3xl pb-4 font-latoBold">
          Thanks for submitting it! ✨
        </h1>
        <p className="text-lg  text-gray-500">
          We have successfully received your information and will get back to
          you as soon as we can!
        </p>
      </div>
      <Confetti gravity={0.2} numberOfPieces={pieces} />
    </m.main>
  );
};

export default Success;
