"use client";

import { motion } from "motion/react";

interface QuestionPageProps {
  question: {
    question: string;
    options: string[];
  };
  onAnswer: (answer: string) => void;
}

export default function QuestionPage({
  question,
  onAnswer,
}: QuestionPageProps) {
  return (
    <div className="w-full max-w-2xl px-4">
      <motion.h2
        className="mb-8 text-center text-2xl font-bold"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {question.question}
      </motion.h2>
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 1.1, duration: 0.5 }}
            whileHover={{
              scale: 1.2,
              transition: { delay: 0, duration: 0.3 },
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
            }}
            whileTap={{ scale: 1 }}
            onClick={() => onAnswer(option)}
            className="w-full rounded-lg bg-white p-4 text-left shadow"
          >
            {option}
          </motion.button>
        ))}
      </div>
    </div>
  );
}
