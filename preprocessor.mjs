function makeButtonLink({ Chapter }) {
  return `<a href="${Chapter.path.replace(".md", ".html")}">${Chapter.name}</a>`;
}

function generateButtonLinks(items) {
  return '<div class="button-links">' + items.map(makeButtonLink).join("\n") + "</div>";
}
function replaceButtonLinks(chapter) {
  if (chapter.sub_items && chapter.content.includes("{{#button-links}}")) {
    chapter.content = chapter.content.replace("{{#button-links}}", generateButtonLinks(chapter.sub_items));
  }

  if (chapter.sub_items) {
    chapter.sub_items.forEach((section) => {
      replaceButtonLinks(section.Chapter);
    });
  }
}

// Function to perform the preprocessing
function preprocessMdBook([_context, book]) {
  book.sections.forEach((section) => {
    replaceButtonLinks(section.Chapter);
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
