export function sanitizeHTML(dirtyHTML) {
  if (!dirtyHTML || typeof dirtyHTML !== "string") return "";

  // Create a DOM parser
  const parser = new DOMParser();
  const doc = parser.parseFromString(dirtyHTML, "text/html");

  /* ❌ Remove dangerous elements */
  const forbiddenTags = [
    "script",
    "iframe",
    "object",
    "embed",
    "link",
    "style",
    "meta"
  ];

  forbiddenTags.forEach((tag) => {
    doc.querySelectorAll(tag).forEach((el) => el.remove());
  });

  /* ❌ Remove React / UI specific attributes */
  doc.querySelectorAll("*").forEach((el) => {
    [...el.attributes].forEach((attr) => {
      const name = attr.name.toLowerCase();

      // Remove event handlers & react leftovers
      if (
        name.startsWith("on") ||
        name.includes("dangerouslysetinnerhtml")
      ) {
        el.removeAttribute(attr.name);
      }

      // Remove results-* classes
      if (name === "class") {
        const cleaned = attr.value
          .split(" ")
          .filter((cls) => !cls.startsWith("results-"))
          .join(" ");

        if (cleaned) el.setAttribute("class", cleaned);
        else el.removeAttribute("class");
      }
    });
  });

  /* ✅ Return only body content (clean) */
  return doc.body.innerHTML.trim();
}
