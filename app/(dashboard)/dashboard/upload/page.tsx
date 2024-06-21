"use client";

import {
  FileUploader,
  FileInput,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/dashboard/file-uploader";

import { DashboardHeader } from "@/components/dashboard/header";
import { DashboardShell } from "@/components/dashboard/shell";
import { DropzoneOptions } from "react-dropzone";
import z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Button, buttonVariants } from "@/components/ui/button";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { Paperclip, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

const FileSvgDraw = () => {
  return (
    <>
      <svg
        className="w-8 h-8 mb-3 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 20 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
        />
      </svg>
      <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
        <span className="font-semibold">Click to upload</span>
        &nbsp; or drag and drop
      </p>
      <p className="text-xs text-gray-500 dark:text-gray-400">
        SVG, PNG, JPG or GIF
      </p>
    </>
  );
};

const CardForm = z.object({
  files: z
    .array(
      z.instanceof(File).refine((file) => file.size < 4 * 1024 * 1024, {
        message: "File size must be less than 4MB",
      })
    )
    .max(5, {
      message: "Maximum 5 files are allowed",
    })
    .nullable(),
});

type CardFormType = z.infer<typeof CardForm>;

const FileUploadDropzone = () => {
  const form = useForm<CardFormType>({
    resolver: zodResolver(CardForm),
    defaultValues: {
      message: "",
      files: null,
    },
  });

  const dropzone = {
    multiple: true,
    maxFiles: 3,
    maxSize: 4 * 1024 * 1024,
  } satisfies DropzoneOptions;

  const onSubmit = (data: CardFormType) => {
    toast.success("your message has been sent successfully");
  };

  console.log(form.getValues("files"));

  return (
    <DashboardShell>
      <DashboardHeader heading="Upload your files" text="Add your books or notes here." />
      <Card>
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        // className="relative w-full grid gap-2 h-12 "
      >
        <div
          // className={`w-full flex items-start gap-x-2 rounded-md outline outline-1 outline-border px-2 pb-1 ${form.watch("files") !== null ? "pt-4" : "pt-2"
          //   }`}
        >
          <FormField
            control={form.control}
            name="files"
            render={({ field }) => (
              <FormItem>
                <FileUploader
                  value={field.value}
                  onValueChange={field.onChange}
                  dropzoneOptions={dropzone}
                  reSelect={true}
                  className="relative bg-background rounded-lg p-2"
                >
                  <FileInput
                    className="outline-dashed outline-1 outline-white"
                  >
                    <div className="flex items-center justify-center flex-col pt-3 pb-4 w-full ">
          <FileSvgDraw />
        </div>
                  </FileInput>
                  {field.value && field.value.length > 0 && (
                    <FileUploaderContent>
                      {field.value.map((file, i) => (
                        <FileUploaderItem
                          key={i}
                          index={i}
                          aria-roledescription={`file ${i + 1} containing ${file.name
                            }`}
                        >
                          <Paperclip className="h-4 w-4 stroke-current" />
              <span>{file.name}</span>
                          {/* <AspectRatio className="size-full">
                            <Image
                              src={URL.createObjectURL(file)}
                              alt={file.name}
                              className="object-cover rounded-md"
                              fill
                            />
                          </AspectRatio> */}
                        </FileUploaderItem>
                      ))}
                    </FileUploaderContent>
                  )}
                </FileUploader>
              </FormItem>
            )}
          />
          {/* <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem className="p-0 w-full">
                
              </FormItem>
            )}
          /> */}
        </div>
        {form.formState.errors && (
          <div className="text-destructive text-sm">
            {Object.values(form.formState.errors).map((error) => (
              <p key={error.message}>{error.message}</p>
            ))}
          </div>
        )}
        <CardFooter className="flex flex-col items-center space-y-2 border-t bg-accent py-2 md:flex-row md:justify-between md:space-y-0">
          <Button type="submit" className="h-8 w-fit">
          Send
        </Button>
      </CardFooter>
      </form>
    </Form>
    
    </Card>
    </DashboardShell>
  );
};

export default FileUploadDropzone;
