let execSync = require("child_process").execSync;
let path = require("path");
let fs = require("fs");
// Convert filename to PascalCase
let toPascalCase = function (str) {
  return str.replace(/(^\w|-\w)/g, clearAndUpper).replace(/-/g, "");
};
// Helper function to convert to PascalCase
let clearAndUpper = function (text) {
  return text.replace(/-/, "").toUpperCase();
};
// Read SVG file name from arguments
let svgFileName = process.argv[2]; // SVG file name passed as argument
let publicDir = path.resolve(__dirname, "public"); // Directory where SVGs are located
let outputDir = path.resolve(__dirname, "src/components/atoms/icons"); // Fixed output directory
// Validate SVG file name
if (!svgFileName) {
  console.error("Please provide the SVG file name as the first argument.");
  process.exit(1);
}
// Construct the full SVG file path
let svgFilePath = path.join(publicDir, svgFileName);
// Check if the SVG file exists
if (!fs.existsSync(svgFilePath)) {
  console.error(`SVG file not found: ${svgFilePath}`);
  process.exit(1);
}
// Derive component name from file name
let fileNameWithoutExt = path.basename(svgFilePath, ".svg");
let componentName = toPascalCase(fileNameWithoutExt) + "Icon"; // Component name in PascalCase
// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}
// Generate the React component
let tempFilePath = path.join(outputDir, "".concat(fileNameWithoutExt, ".tsx"));
let outputFilePath = path.join(outputDir, "".concat(componentName, ".tsx"));
// Run the @svgr/cli command to convert SVG to React component
try {
  execSync(
    "npx @svgr/cli "
      .concat(svgFilePath, " --out-dir ")
      .concat(outputDir, " --icon --typescript"),
    { stdio: "inherit" },
  );
  // Read the generated file
  let fileContent = fs.readFileSync(tempFilePath, "utf8");
  // Update the component name and export statement
  fileContent = fileContent
    .replace(
      /const Svg[\w]+: React.FC<SvgProps>/,
      "const ".concat(componentName, ": React.FC<SvgProps>"),
    )
    .replace(
      /export default Svg[\w]+;/,
      "export default ".concat(componentName, ";"),
    );
  // Write the updated content to the new file
  fs.writeFileSync(outputFilePath, fileContent);
  // Remove the temporary file
  fs.unlinkSync(tempFilePath);
} catch (error) {
  console.error("Error generating React component:", error.message);
  process.exit(1);
}
