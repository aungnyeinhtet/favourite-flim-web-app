import React from "react";
import { motion } from "framer-motion";

const Drawer = ({ children, onClose }) => {
  const ref = React.useRef();
  return (
    <>
      <div ref={ref} className="fixed inset-0 overflow-hidden h-full z-50">
        <div className="absolute inset-0 overflow-hidden">
          <div
            onClick={onClose}
            className="absolute inset-0 bg-black bg-opacity-80 transition-opacity"
          />
          <motion.section
            initial={{ x: -200 }}
            animate={{ x: 0 }}
            transition={{
              type: "spring",
              damping: 20,
            }}
            className="absolute inset-y-0 left-0 max-w-full flex  outline-none"
          >
            <div className="h-full w-screen max-w-md">
              <div className="h-full flex flex-col text-lg shadow-xl overflow-y-auto bg-PRIMARY-BG ">
                {children}
              </div>
            </div>
          </motion.section>
        </div>
      </div>
      ;
    </>
  );
};

export default Drawer;
