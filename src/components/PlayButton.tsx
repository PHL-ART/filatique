"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IconPlus } from "@tabler/icons-react";

export const PlayButton = () => {
  const [plusOn, setPlusOn] = useState<boolean>(false);
  const [playerOn, setPlayerOn] = useState<boolean>(false);
  const plusHandler = () => {
    if (playerOn) {
      setPlayerOn(false);
    }
    setPlusOn((prevValue) => !prevValue);
  };

  const playerHandler = () => {
    setPlayerOn((prevValue) => !prevValue);
  };

  const plusVariants = {
    initial: { rotate: 0 },
    close: { rotate: 135 },
    rotated: { rotate: 90 },
  };

  const playVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  const getMode = (plusState: boolean, playerState: boolean) => {
    console.log(plusState, playerState);
    if (plusState) {
      if (playerState) {
        return "close";
      }
      return "rotated";
    }

    return "initial";
  };

  return (
    <div>
      <div className="play-button-parent">
        <motion.div
          onClick={() => plusHandler()}
          animate={getMode(plusOn, playerOn)}
          variants={plusVariants}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="play-button-plus"
        >
          <IconPlus
            size={36}
            color="white"
            style={{ transformOrigin: "12 12" }}
          />
        </motion.div>
        <motion.div
          onClick={() => playerHandler()}
          initial={{ rotate: -90, opacity: 0 }}
          animate={plusOn ? "visible" : "hidden"}
          variants={playVariants}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="play-button-text"
        >
          Play
        </motion.div>
      </div>
    </div>
  );
};
