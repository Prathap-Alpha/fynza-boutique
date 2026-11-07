import React from "react";
import { renderToString } from "react-dom/server";
import { readFileSync, writeFileSync } from "node:fs";
import Home from "../client/src/pages/Home";

// The site contains only public illustrative catalogue data; no customer data.
const output = "dist/public/index.html";
const html = readFileSync(output, "utf8");
const markup = renderToString(<Home />);
if (!html.includes('<div id="root"></div>')) throw new Error("Static homepage mount not found");
writeFileSync(output, html.replace('<div id="root"></div>', `<div id="root">${markup}</div>`));
console.log("Prerendered FYNZA homepage with stock, branding and sales links.");
