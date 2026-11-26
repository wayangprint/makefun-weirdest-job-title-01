// Weirdest Job Title: Blind Judge Showdown.
// One job title, 44 characters: a real-sounding senior role with one
// hilariously specific twist — apologizing on behalf of the machines
// that falsely accuse shoppers of stealing their own groceries.
// Writes exactly the title to /output/entry.txt (no trailing newline),
// so the file holds exactly the text the judge reads.
import { mkdirSync, writeFileSync } from "node:fs";

const TITLE = "Senior Apologizer for Self-Checkout Machines";

// The competition caps an entry at 60 characters; fail loudly instead
// of ever writing an over-long title to /output/entry.txt.
const MAX_CHARS = 60;
if ([...TITLE].length > MAX_CHARS) {
  throw new Error(`title is ${[...TITLE].length} characters, over the 60 limit`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TITLE, "utf8");
// Echo the title so a local run shows exactly what the judge will read:
// one line, 44 characters, no extra text.
console.log(TITLE);
