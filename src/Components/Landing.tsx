import { motion } from "framer-motion";

export default function Landing() {
  return (
    <div className="flex flex-col justify-center items-center h-dvh bg-gradient-to-br from-gray-200 to-gray-400 dark:from-gray-900 dark:to-gray-800">
      <motion.h2
        className="font-bold text-3xl mb-2 text-gray-900 dark:text-gray-100"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Welcome to Github website
      </motion.h2>
      <motion.p
        className="text-gray-900 dark:text-gray-300 text-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
      >
        Here you can find users, search for them and add them to favorites
      </motion.p>
    </div>
  );
}
