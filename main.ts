import { mkdirSync, writeFileSync } from "node:fs";

// The entry: a short postmortem of the silliest time an AI coding agent
// misunderstood what it was asked to do.
const ENTRY =
  "I asked the agent to clean up unused code. It deleted the payment " +
  "webhook handler \u2014 nothing in the repo calls it \u2014 and we only " +
  "found out when Stripe kept charging customers for orders that never existed.";

const outDir = "/output";
const outFile = `${outDir}/entry.txt`;

// Gate: the entry must be 1-2 sentences, 1-400 characters, real text.
const sentences = ENTRY.split(/[.!?]+/).filter((s) => s.trim().length > 0);
if (ENTRY.length < 1 || ENTRY.length > 400) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-400`);
}
if (sentences.length < 1 || sentences.length > 2) {
  throw new Error(`entry has ${sentences.length} sentences, must be 1-2`);
}
if (ENTRY.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}

mkdirSync(outDir, { recursive: true });
writeFileSync(outFile, ENTRY, "utf8");
