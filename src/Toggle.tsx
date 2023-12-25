import { FC } from "react";
import { motion } from "framer-motion";

import styles from "./Toggle.module.css";

const Toggle: FC<{ value: boolean; onChange: (value: boolean) => void }> = ({
  value: checked,
  onChange,
}) => {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      className={styles.wrapper}
      onClick={() => onChange(!checked)}
      style={{
        justifyContent: checked ? "flex-end" : "flex-start",
      }}
    >
      <motion.span
        className={styles.ball}
        layout
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 40,
        }}
      />
    </button>
  );
};

export default Toggle;
