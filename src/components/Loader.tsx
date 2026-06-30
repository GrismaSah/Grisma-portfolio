"use client";
import { motion } from "framer-motion";

/* Full-screen intro loader; fades out shortly after mount. */
export default function Loader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1, duration: 0.5 }}
      style={{ pointerEvents: "none" }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-bg"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-16 w-16">
          <span className="absolute inset-0 animate-spinSlow rounded-full border-2 border-transparent border-r-blue border-t-accent" />
          <span className="absolute inset-2 rounded-full bg-gradient-to-br from-accent to-blue opacity-80 blur-[2px]" />
          <span className="absolute inset-0 grid place-items-center font-display text-xl font-bold text-white">
            G
          </span>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0.4, 1] }}
          transition={{ duration: 1, repeat: Infinity }}
          className="font-body text-xs uppercase tracking-[0.4em] text-muted"
        >
          Loading
        </motion.p>
      </div>
    </motion.div>
  );
}
