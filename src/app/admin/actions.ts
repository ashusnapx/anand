"use server";

import fs from "fs";
import path from "path";
import { revalidatePath } from "next/cache";

const CONTENT_FILE = path.join(process.cwd(), "src/data/content.json");

export async function getContent() {
  const fileContent = fs.readFileSync(CONTENT_FILE, "utf-8");
  return JSON.parse(fileContent);
}

export async function updateContent(newContent: any) {
  try {
    fs.writeFileSync(CONTENT_FILE, JSON.stringify(newContent, null, 2));
    revalidatePath("/");
    return { success: true };
  } catch (error) {
    console.error("Failed to update content:", error);
    return { success: false, error: "Failed to save changes" };
  }
}
