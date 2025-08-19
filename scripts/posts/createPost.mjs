import fs from "fs";
import path from "path";
import { getCurrentDateInfo } from "../../lib/utils/date-utils.mjs";
import { getPostsDir } from "../../lib/utils/path-utils.mjs";
import { logSuccess, logInfo } from "../../lib/utils/logging.mjs";

const { year, month, day, monthStr, dayStr } = getCurrentDateInfo();

const postDir = path.join(getPostsDir(), `${year}`, `${monthStr}`);
const baseFilename = `${year}-${monthStr}-${dayStr}`;

// Function to generate default content
const generateDefaultContent = (filename) => {
  return `---
title: "New Post on ${year}-${monthStr}-${dayStr}"
date: "${year}.${monthStr}.${dayStr}"
tags: [development, blog]
---

Write your content here.

This is a sample post created with the developer blog. You can write in markdown and use all the standard formatting options.

## Features

- Clean markdown writing experience
- Tag-based organization
- Fast search and filtering
- Responsive design

Happy writing!
`;
};

// Create the directories if they don't exist
fs.mkdirSync(postDir, { recursive: true });

// Function to determine the next available filename
const getAvailableFilename = (baseDir, baseName) => {
  let counter = 0;
  let filename = baseName;
  let filePath = path.join(baseDir, `${filename}.md`);

  while (fs.existsSync(filePath)) {
    counter += 1;
    filename = `${baseName}.${counter}`;
    filePath = path.join(baseDir, `${filename}.md`);
  }

  return filePath;
};

// Create the new post with the next available number
const postPath = getAvailableFilename(postDir, baseFilename);
const actualFilename = path.basename(postPath, ".md");
const defaultContent = generateDefaultContent(actualFilename);

// Create the new markdown file with default content
fs.writeFileSync(postPath, defaultContent, "utf8");

logSuccess(`New post created at: ${postPath}`);
logInfo(`Edit your post and then run 'pnpm run publish' when ready.`);
