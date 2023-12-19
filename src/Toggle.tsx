import { FC } from "react";
import { motion } from "framer-motion";

import styles from "./Toggle.module.css";

const Toggle: FC<{ value: boolean; onChange: (value: boolean) => void }> = ({
  value,
  onChange,
}) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={value}
      className={styles.wrapper}
      onClick={() => onChange(!value)}
    >
      <motion.span
        className={styles.ball}
        initial={false}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 40,
        }}
        animate={{
          x: value ? "100%" : "0%",
        }}
      />
    </button>
  );
};

export default Toggle;
