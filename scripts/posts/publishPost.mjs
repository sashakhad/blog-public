import { execSync } from "child_process";
import { logSuccess, logInfo, logError } from "../../lib/utils/logging.mjs";

try {
  // Add all posts to git
  execSync("git add posts/", { stdio: "inherit" });
  
  // Check if there are any changes to commit
  try {
    execSync("git diff --cached --exit-code", { stdio: "pipe" });
    logInfo("No changes to commit.");
    process.exit(0);
  } catch (error) {
    // There are changes to commit, continue
  }
  
  // Commit the changes
  const commitMessage = `Add new blog post - ${new Date().toISOString().split('T')[0]}`;
  execSync(`git commit -m "${commitMessage}"`, { stdio: "inherit" });
  
  logSuccess("✅ Post committed successfully!");
  logInfo("Your post is now ready. Push to your repository when ready to publish.");
  
} catch (error) {
  logError(`Failed to publish post: ${error.message}`);
  process.exit(1);
}
