// Debugging Help
// Use console.error, not console.log
//
// This does a few things:
// - Replaces `{{#button-links}}` with the child links of that page in button form
// - Replaces `{{#markdown-embed ../services/account/ENVIRONMENT.md [trim from top]}}` or other is found with the contents of that file
// - Replaces `{{#svg-embed ../image.svg title}}` with the contents of the svg wrapped in <div class="svg-embed" title="[title]">[contents]</div>

import { readFileSync } from "node:fs";

function makeButtonLink({ Chapter }, parentPath) {
  // Remove any part of the path that the parent already has.
  // This assumes that there are no nested duplicate names
  const path = Chapter.path.split("/").filter((x) => !parentPath.has(x));
  return `<a href="${path.join("/").replace(".md", ".html")}">${Chapter.name}</a>`;
}

function generateButtonLinks(parent) {
  // Remove the last /page.md as there might be collisions with that part
  const parentPath = new Set(parent.path.replace(/\/[^\/]*$/, "").split("/"));
  return (
    '<div class="button-links">' + parent.sub_items.map((x) => makeButtonLink(x, parentPath)).join("\n") + "</div>"
  );
}
function replaceButtonLinks(chapter) {
  if (chapter.sub_items && chapter.content.includes("{{#button-links}}")) {
    chapter.content = chapter.content.replace("{{#button-links}}", generateButtonLinks(chapter));
  }

  if (chapter.sub_items) {
    chapter.sub_items.forEach((section) => {
      section.Chapter && replaceButtonLinks(section.Chapter);
    });
  }
}

function markdownEmbed(chapter) {
  const regex = /{{#markdown-embed\s(.+?)\s(.+?)}}/g;
  const matches = [...chapter.content.matchAll(regex)];
  matches.forEach((match) => {
    const markdownFile = match[1];
    const output = readFileSync(markdownFile, "utf8");
    const replaceWith = output.split("\n").slice(match[2]).join("\n");
    chapter.content = chapter.content.replace(match[0], replaceWith);
  });
  if (chapter.sub_items) {
    chapter.sub_items.forEach((section) => {
      section.Chapter && markdownEmbed(section.Chapter);
    });
  }
}

function svgEmbed(chapter) {
  const regex = /{{#svg-embed\s(.+?)\s(.+?)}}/g;
  const matches = [...chapter.content.matchAll(regex)];
  matches.forEach((match) => {
    const svgFile = match[1];
    const titleTag = match[2];
    const output = readFileSync(svgFile, "utf8");
    const replaceWith = `<div class="svg-embed" title="${titleTag}">${output}</div>`;
    chapter.content = chapter.content.replace(match[0], replaceWith);
  });
  if (chapter.sub_items) {
    chapter.sub_items.forEach((section) => {
      section.Chapter && svgEmbed(section.Chapter);
    });
  }
}

// Function to perform the preprocessing
function preprocessMdBook([_context, book]) {
  // Button Links
  book.sections.forEach((section) => {
    section.Chapter && replaceButtonLinks(section.Chapter);
  });

  // Markdown Embed
  book.sections.forEach((section) => {
    section.Chapter && markdownEmbed(section.Chapter);
  });

  // SVG Embed
  book.sections.forEach((section) => {
    section.Chapter && svgEmbed(section.Chapter);
  });

  // Output the processed content in mdbook preprocessor format
  process.stdout.write(JSON.stringify(book));
}

if (process.argv < 3) {
  throw new Error("Something strange is happening");
}

if (process.argv[2] === "supports") {
  process.exit(0);
}

process.stdin.setEncoding("utf-8");
process.stdout.setEncoding("utf-8");

// Read data from stdin
let inputData = "";

process.stdin.on("data", (chunk) => {
  inputData += chunk;
});

process.stdin.on("end", () => {
  preprocessMdBook(JSON.parse(inputData));
});
