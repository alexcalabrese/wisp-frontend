"use client";
import * as React from "react";
import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";



export function Flashcard({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleShowAnswer = () => {
    setShowAnswer(true);
    setShowOptions(true);
  };

  const handleOptionClick = (option) => {
    console.log("Option clicked:", option);
    // TODO: Add logic to save the difficulty level of the flashcard
  };

  const handleEdit = () => console.log("Edit");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.code === "Space") {
      event.preventDefault();
      handleShowAnswer();
    }
  };

  useEffect(() => {
    cardRef.current?.focus();
  }, []);

  return (
    <Card
      ref={cardRef}
      tabIndex={-1} // Make the Card focusable
      onKeyDown={handleKeyDown} // Attach the event to the Card
    >
      <CardHeader className="flex flex-col items-center">
        <CardTitle className="text-2xl">{question}</CardTitle>
        {showAnswer && <CardDescription className="text-lg">{answer}</CardDescription>}
      </CardHeader>
      <CardFooter className="flex justify-between border-t bg-accent py-2">
        {/* TODO: Add number of remaining flashcards */}
        <Button type="button" onClick={handleEdit}>
            <span>Edit</span>
        </Button>
        
        <div className="flex w-full flex-col items-center pt-2">
          {!showOptions && (
            <Button type="button" onClick={handleShowAnswer}
              onKeyDown={handleKeyDown} // Add this line
              tabIndex={-1} // Ensure the button is focusable to receive keyboard events
            >
            <span>Show Answer </span>
          </Button>
          )}
          {showOptions && (
            <div className="flex flex-wrap justify-center gap-2">
              <Button type="button" className="font-semibold text-red-300 dark:text-red-500" onClick={() => handleOptionClick("Option 1")}>
                Again
              </Button>
              <Button type="button" className="font-semibold text-orange-300 dark:text-orange-500" onClick={() => handleOptionClick("Option 2")}>
                Hard
              </Button>
              <Button type="button" className="font-semibold text-green-300 dark:text-green-500" onClick={() => handleOptionClick("Option 3")}>
                Good
              </Button>
              <Button type="button" className="font-semibold text-blue-300 dark:text-blue-500" onClick={() => handleOptionClick("Option 4")}>
                Easy
              </Button>
            </div>
              )}
        </div>
      </CardFooter>
    </Card>
  );
}

export default Flashcard;