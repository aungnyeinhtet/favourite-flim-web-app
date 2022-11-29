import React from "react";
import { motion } from "framer-motion";
import Button from "../Button/Button";
import { XMarkIcon } from "@heroicons/react/24/solid";

const Modal = ({ children, onClose, videoSrc }) => {
  return (
    <>
      <div className="absolute inset-0 h-screen w-full z-60 flex flex-col justify-center items-center">
        <div
          onClick={onClose}
          className="absolute inset-0 bg-black bg-opacity-80 transition-opacity z-50"
        />
        <motion.section
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            damping: 10,
          }}
          className="lg:w-3/5 w-4/5 h-[500px] z-50 bg-PRIMARY-BG p-6 rounded-lg relative"
        >
          <Button
            onClick={onClose}
            className="absolute top-0 right-0 text-PRIMARY-TEXT "
          >
            <XMarkIcon className="w-7 h-7 hover:text-RED-TEXT transition-all duration-150 ease-linear" />
          </Button>
          <iframe
            src={videoSrc}
            title="trailer"
            width={"100%"}
            height={"100%"}
          />
        </motion.section>
      </div>
    </>
  );
};

export default Modal;
