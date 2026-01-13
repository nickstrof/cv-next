// 1
// const fs = require("fs");
// const path = require("path");

// 2
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const args = process.argv.slice(2);
const [componentName, subdirectory] = args;

if (!componentName) {
  console.error("Please provide a component name.");
  process.exit(1);
}

// Specify the base directory where your components are stored
const componentsDir = path.join(__dirname);

// If a subdirectory is provided, use it; otherwise, default to the base directory
const targetDir = subdirectory
  ? path.join(componentsDir, subdirectory)
  : componentsDir;

// Create the subdirectory if it doesn't exist
if (!fs.existsSync(targetDir)) {
  fs.mkdirSync(targetDir, { recursive: true });
}

// Create a folder specifically for the new component
const componentDir = path.join(targetDir, componentName);

if (!fs.existsSync(componentDir)) {
  fs.mkdirSync(componentDir);
}

const componentFilePath = path.join(componentDir, `${componentName}.tsx`);
const componentContent = `import React, { FC } from 'react';

const ${componentName}: FC = () => {
    return (
        <div>
            {/* ${componentName} component */}
        </div>
    );
};

export default ${componentName};
`;

// Write the component file inside the component's folder
fs.writeFileSync(componentFilePath, componentContent);
console.log(`${componentName} created at ${componentFilePath}`);
