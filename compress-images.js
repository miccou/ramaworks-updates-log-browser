const sharp = require("sharp");
const glob = require("glob");
const path = require("path");
const fs = require("fs");

// Set the input and output directories
const inputDir = "content";
const outputDir = "public";

// Set the maximum width and height for thumbnails
const maxThumbnailWidth = 600;
const maxThumbnailHeight = 600;

// Get all image files in the input directory
const files = glob.sync(`${inputDir}/**/*.png`);

let index = [];

// Loop through each file and compress it
for (const file of files) {
  console.log(`Processing: ${file} - ${Object.values(files).indexOf(file) + 1}/${files.length}`);
  const filename = path.basename(file).split("-")[0].replaceAll('.', '-'); //gets just the date component
  const ext = path.extname(file);
  const outputFilePath = path.join(outputDir, `${filename}.jpeg`);
  index.push(outputFilePath);

  // Create the output directory if it doesn't exist
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  if (ext == '.png') {
    sharp(file)
      .jpeg({ quality: 60 })
      .toFile(outputFilePath);

    // Create a thumbnail
    sharp(file)
      .jpeg({ quality: 95 })
      .resize({
        width: maxThumbnailWidth,
        height: maxThumbnailHeight,
        fit: sharp.fit.inside,
      })
      .toFile(path.join(outputDir, `thumb_${filename}.jpeg`));
  } else {
    // If the file is not an image, simply copy it to the output directory
    fs.copyFileSync(file, outputFilePath);
  }
}

console.log('Writing index');
const indexJson = JSON.stringify(index);
fs.writeFileSync(path.join(outputDir, 'index.json'), indexJson);
console.log(`Index written with ${index.length} entries`);

process.exit()