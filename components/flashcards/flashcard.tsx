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



export function Flashcard({  question, answer, onNextCard, totalCards, currentCardNumber  }) {
  const [showAnswer, setShowAnswer] = useState(false);
  const [showOptions, setShowOptions] = useState(false);
  const showAnswerButtonRef = useRef<HTMLDivElement>(null);
  const easyButtonRef = useRef<HTMLButtonElement>(null); // Ref for the "Easy" button

  const handleShowAnswer = () => {
    setShowAnswer(true);
    setShowOptions(true);
  };
  
  const handleNextCard = () => {
    console.log("Next card");
    onNextCard();
  }

  const handleOptionClick = (event: React.KeyboardEvent<HTMLDivElement>) => {
    console.log("Option clicked");

    event.preventDefault();
    handleNextCard();

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
    if (showAnswer) {
      easyButtonRef.current?.focus(); // Focus on the "Easy" button when the answer is shown
    } else {
      showAnswerButtonRef.current?.focus(); // Focus on the Card when the answer is hidden
    }
  }, [showAnswer]);

  return (
    <Card
      tabIndex={0} // Make the Card focusable
      onKeyDown={handleKeyDown} // Attach the event to the Card
    >
      <CardHeader className="flex flex-col items-center">
        <div className="text-sm">
          Card {currentCardNumber} of {totalCards}
        </div>

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
            <Button type="button"
              ref={showAnswerButtonRef} // Attach the ref to the "Show Answer" button
              onClick={handleShowAnswer}
              onKeyDown={handleKeyDown} // Add this line
              tabIndex={0} // Ensure the button is focusable to receive keyboard events
            >
            <span>Show Answer</span>
          </Button>
          )}
          {showOptions && (
            <div className="flex flex-wrap justify-center gap-2">
              <Button type="button" 
                className="font-semibold text-red-300 dark:text-red-500" 
                onClick={handleOptionClick}
                >
                Again
              </Button>
              <Button type="button" 
                className="font-semibold text-orange-300 dark:text-orange-500"
                onClick={handleOptionClick}
                >
                Hard
              </Button>
              <Button type="button" 
                className="font-semibold text-green-300 dark:text-green-500"
                ref={easyButtonRef} // Attach the ref to the "Easy" button
                tabIndex={0} // Make the Card focusable
                onKeyDown={handleOptionClick} // Attach the event to the Card
                onClick={handleOptionClick}
                >
                Good
              </Button>
              <Button type="button" 
                className="font-semibold text-blue-300 dark:text-blue-500"
                onClick={handleOptionClick}
                >
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