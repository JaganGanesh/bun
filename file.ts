// Write File
const data = "Lorem Ipsum is simply dummy text.";
await Bun.write("output.txt", data);

// Read File
const file = await Bun.file("output.txt");
console.log("Text:", await file.text());
console.log("Stream:", await file.stream());
console.log("ArrayBuffer:", await file.arrayBuffer());
console.log("File Size:", file.size);
