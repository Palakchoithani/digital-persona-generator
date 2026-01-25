// Export persona as JSON
import JSZip from "jszip";
import { sanitizeHTML } from "./sanitizeHTML"; 

export function exportJSON(persona) {
  const dataStr = JSON.stringify(persona, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "persona.json";
  a.click();
  URL.revokeObjectURL(url);
}

// Export website HTML
export function exportHTML(persona) {
  const htmlContent = `
  <html>
    <head>
      <title>${persona.bio}</title>
      <style>
        body { font-family: sans-serif; padding: 2rem; background: #f4f4f4; }
        h1 { color: #333; }
        p { color: #555; }
      </style>
    </head>
    <body>
      <h1>${persona.bio}</h1>
      <p>Colors: ${persona.colors.join(", ")}</p>
      <img src="${persona.avatar}" alt="avatar" width="150"/>
    </body>
  </html>
  `;

  const blob = new Blob([htmlContent], { type: "text/html" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "persona.html";
  a.click();
  URL.revokeObjectURL(url);
}

/* ✅ Export downloadable website bundle (ZIP) */
export async function exportWebsiteBundle(persona) {
  if (!persona?.website) return;

  const zip = new JSZip();

  // 🔥 SANITIZE HERE
  const cleanWebsiteHTML = sanitizeHTML(persona.website);

  const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Digital Persona</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <main class="container">
      ${cleanWebsiteHTML}
    </main>
  </body>
</html>
`;

  const css = `
body {
  font-family: system-ui, sans-serif;
  background: #f9fafb;
  color: #111;
  margin: 0;
  padding: 2rem;
}

.container {
  max-width: 900px;
  margin: auto;
}

img {
  max-width: 100%;
  border-radius: 12px;
}
`;

  zip.file("index.html", html);
  zip.file("style.css", css);

  const blob = await zip.generateAsync({ type: "blob" });
  const url = URL.createObjectURL(blob);

  const a = document.createElement("a");
  a.href = url;
  a.download = "digital-persona-website.zip";
  a.click();

  URL.revokeObjectURL(url);
}