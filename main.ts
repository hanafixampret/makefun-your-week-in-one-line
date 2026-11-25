import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Claimed 500 PXIO at 4 AM, entered 11 bounties by breakfast, won nothing, repeat tomorrow.";

// Mirror the sealed scorer's gate: 1-100 chars, not only whitespace.
if (LINE.length < 1 || LINE.length > 100 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-100 chars, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
