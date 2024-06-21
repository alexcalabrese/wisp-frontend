"use client";

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import { Flashcard } from "@/components/flashcards/flashcard";



export default async function StudyPage() {

  return (
    <DashboardShell>
      <DashboardHeader heading="It's time to study" text="Review your flashcards." />
        <Flashcard question="What is the capital of France?" answer="Paris" />
    </DashboardShell>
  );
};
