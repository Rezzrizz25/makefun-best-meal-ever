// The Best Meal You Ever Had — make.fun entry
// Writes one sentence (1-199 chars) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Draft 3 (final): dropped "all afternoon" to make room for a closing beat
// of longing — nobody wanting it to end. One sentence, concrete, personal.
const ENTRY =
  "My grandmother's rendang simmered in coconut milk and lemongrass until the beef fell apart, and we ate it with our hands over warm rice while rain hammered the tin roof, nobody wanting it to end.";

if (!ENTRY || !ENTRY.trim()) {
  throw new Error("entry must not be blank");
}
if (ENTRY.length < 1 || ENTRY.length > 199) {
  throw new Error(`entry must be 1-199 chars, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n") || ENTRY.includes("\r")) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
console.log(`wrote entry.txt (${ENTRY.length} chars)`);
