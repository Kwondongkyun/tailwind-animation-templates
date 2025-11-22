"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ExternalLink } from "lucide-react";
import Link from "next/link";
import { CodeBlock } from "./code-block";

interface ExampleSectionProps {
  title: string;
  titleLink?: string;
  description?: string;
  preview: React.ReactNode;
  code: string;
}

export function ExampleSection({
  title,
  titleLink,
  description,
  preview,
  code,
}: ExampleSectionProps) {
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-bold mb-2">
          {titleLink ? (
            <Link
              href={titleLink}
              className="inline-flex items-center gap-2 hover:text-primary underline-offset-4 hover:underline"
            >
              {title}
              <ExternalLink className="size-5" />
            </Link>
          ) : (
            title
          )}
        </h2>
        {description && <p className="text-muted-foreground">{description}</p>}
      </div>
      <Tabs defaultValue="preview" className="w-full">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
        </TabsList>
        <TabsContent value="preview" className="mt-4">
          <div className="flex items-center justify-center min-h-[200px] border rounded-lg bg-background p-8">
            {preview}
          </div>
        </TabsContent>
        <TabsContent value="code" className="mt-4">
          <CodeBlock code={code} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
