import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export const rootDir = path.join(__dirname, "../..");

export function getPostsDir() {
  return path.join(rootDir, "posts");
}

export function getScriptsDir() {
  return path.join(rootDir, "scripts");
}

export function getPublicDir() {
  return path.join(rootDir, "public");
}
