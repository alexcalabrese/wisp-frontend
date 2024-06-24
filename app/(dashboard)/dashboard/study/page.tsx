"use client";

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import { Flashcard } from "@/components/flashcards/flashcard";
import { useState } from "react";

const exampleCards: Card[] = [
  {
    id: "1",
    question: "What is the capital of France?",
    answer: "Paris",
    images: ["https://source.unsplash.com/random/?paris"],
    status: "reviewed",
    last_review: "2023-04-01",
    createdAt: "2023-01-01"
  },
  {
    id: "2",
    question: "Who wrote 'To Kill a Mockingbird'?",
    answer: "Harper Lee",
    images: ["https://source.unsplash.com/random/?books"],
    status: "new",
    last_review: "2023-04-02",
    createdAt: "2023-01-02"
  },
  {
    id: "3",
    question: "What is the chemical symbol for gold?",
    answer: "Au",
    images: ["https://source.unsplash.com/random/?gold"],
    status: "reviewed",
    last_review: "2023-04-03",
    createdAt: "2023-01-03"
  }
];

type Card = {
  id: string;
  question: string;
  answer: string;
  images: string[];
  status: string;
  last_review: string;
  createdAt: string;
};

export default function StudyPage() {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showCompletitionMessage, setShowCompletitionMessage] = useState(false);

  const handleNextCard = () => {
    if (currentCardIndex < exampleCards.length - 1) {
      setCurrentCardIndex(prevIndex => (prevIndex + 1)); // Loop back to the first card after the last one
    } else {
      setShowCompletitionMessage(true);
    }
  };

    return (
      <DashboardShell>
      <DashboardHeader heading="It's time to study" text="Review your flashcards." />
      {exampleCards.length > 0 && !showCompletitionMessage && (
        <Flashcard
        key={exampleCards[currentCardIndex].id}
        question={exampleCards[currentCardIndex].question}
        answer={exampleCards[currentCardIndex].answer}
        onNextCard={handleNextCard}
        totalCards={exampleCards.length}
        currentCardNumber={currentCardIndex + 1}
        />
      )}

      {showCompletitionMessage && (
        <div className="flex flex-col items-center justify-center">
        <h2 className="text-center text-2xl font-bold">You've reviewed all your flashcards!</h2>
        <p className="mt-4 text-gray-600">Great job! You've reviewed all your flashcards for today.</p>
        </div>
      )}
      </DashboardShell>
    );
  };
