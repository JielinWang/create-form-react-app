import React from "react";
import { useNavigate } from "react-router-dom";
import { motion as m } from "framer-motion";
import Confetti from "react-confetti";

const Success = () => {
  const navigate = useNavigate();
  const [pieces, setPieces] = useState(200);

  const stopConfetti = () => {
    setTimeout(() => {
      setPieces(0);
    }, 3000);
  };

  useEffect(() => {
    stopConfetti();
  }, []);
  return (
    <m.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className=" h-screen items-center flex justify-center relative"
    >
      <div className="bg-white rounded-lg w-1/3 font-latoRegular text-gray-700 p-16">
        <h1 className="text-3xl pb-4 font-latoBold">
          Hi {navigate.query.name}! Thanks for the submitting ! ✨
        </h1>
        <p className="text-lg  text-gray-500">
          We are successfully received your information! We have sent you an
          email over at {navigate.query.email}. We will get back to you as soon
          as we can!
        </p>
      </div>
      <Confetti gravity={0.2} numberOfPieces={pieces} />
    </m.main>
  );
};

export default Success;
