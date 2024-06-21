"use client";
import * as React from "react";
import { useState } from "react";
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

  const handleShowAnswer = () => {
    setShowAnswer(true);
    setShowOptions(true);
  };

  const handleOptionClick = (option) => {
    console.log("Option clicked:", option);
    // TODO: Add logic to save the difficulty level of the flashcard
  };

  const handleEdit = () => console.log("Edit");

  return (
    <Card>
      <CardHeader>
        <CardTitle>{question}</CardTitle>
        {showAnswer && <CardDescription>{answer}</CardDescription>}
      </CardHeader>
      <CardFooter className="flex justify-between border-t bg-accent py-2">
        {/* TODO: Add number of remaining flashcards */}
        <Button type="button" onClick={handleEdit}>
            <span>Edit</span>
        </Button>
        
        <div className="flex flex-col items-center w-full pt-2">
          {!showOptions && (
          <Button type="button" onClick={handleShowAnswer}>
            <span>Show Answer</span>
          </Button>
          )}
          {showOptions && (
            <div className="flex flex-wrap justify-center gap-2">
              <Button type="button" className="dark:text-red-500 text-red-300 font-semibold" onClick={() => handleOptionClick("Option 1")}>
                Again
              </Button>
              <Button type="button" className="dark:text-orange-500 text-orange-300 font-semibold" onClick={() => handleOptionClick("Option 2")}>
                Hard
              </Button>
              <Button type="button" className="dark:text-green-500 text-green-300 font-semibold" onClick={() => handleOptionClick("Option 3")}>
                Good
              </Button>
              <Button type="button" className="dark:text-blue-500 text-blue-300 font-semibold" onClick={() => handleOptionClick("Option 4")}>
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