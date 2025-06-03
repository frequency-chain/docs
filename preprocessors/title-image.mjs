import { readFileSync } from "node:fs";

function titleImage(chapter) {
  const regex = /{{#title-image\s(\S+)\s(\S+)\s(.+?)}}/g;
  const matches = [...chapter.content.matchAll(regex)];

  matches.forEach((match) => {
    const number = match[1];
    const svgFileLight = match[2];
    const svgFileDark = svgFileLight.replace(".svg", "-Dark.svg");

    // Read SVG content
    const svgOutputLight = readFileSync(svgFileLight, "utf8");
    const svgOutputDark = readFileSync(svgFileDark, "utf8");

    // Embed both the SVG and the number in the output HTML
    const replaceWith = [
      `<div class="title-embed">`,
      `<div class="title-embed-light">${svgOutputLight}</div>`,
      `<div class="title-embed-coal">${svgOutputDark}</div>`,
      `<span class="embed-number">${number}</span>`,
      `</div>`,
    ].join("\n");

    // Replace the markdown placeholder with the generated HTML
    chapter.content = chapter.content.replace(match[0], replaceWith);
  });

  // Recursively apply to sub-items if they exist
  if (chapter.sub_items) {
    chapter.sub_items.forEach((section) => {
      section.Chapter && titleImage(section.Chapter);
    });
  }
}

// Function to perform the preprocessing
function preprocessMdBook([_context, book]) {
  // Embed titles with SVG and number
  book.sections.forEach((section) => {
    section.Chapter && titleImage(section.Chapter);
  });

  // Output the processed content in mdbook preprocessor format
  process.stdout.write(JSON.stringify(book));
}

// Entry point for the script
if (process.argv.includes("supports")) {
  process.exit(0);
}

// Read data from stdin and process
process.stdin.setEncoding("utf-8");
process.stdout.setEncoding("utf-8");

let inputData = "";

process.stdin.on("data", (chunk) => {
  inputData += chunk;
});

process.stdin.on("end", () => {
  try {
    preprocessMdBook(JSON.parse(inputData));
  } catch (error) {
    console.error("Error processing mdbook content:", error);
    process.exit(1);
  }
});
