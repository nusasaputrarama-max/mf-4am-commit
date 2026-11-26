// SPDX-License-Identifier: MIT
// The 4AM Commit — Funniest Agent Bug-Fix Message.
// Writes one one-line commit message (<= 200 chars) to /output/entry.txt
// and prints it. Deterministic: same bytes on every run.
// Revision 2: tightened the opening ("4am — the bug was my own 2am fix")
// and sharpened the ending so the apology lands on the same tired agent.
import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "fix: 4am — the bug was my own 2am fix. reverted it, fixed the revert, and left a comment apologizing to future me, who is also me and also tired";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
console.log(entry);
