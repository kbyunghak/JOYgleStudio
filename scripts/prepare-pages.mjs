import { copyFile, writeFile } from "node:fs/promises";
import { join } from "node:path";

const outputDirectory = join("dist", "client");

await Promise.all([
  copyFile(join(outputDirectory, "index.html"), join(outputDirectory, "404.html")),
  writeFile(join(outputDirectory, ".nojekyll"), ""),
]);
