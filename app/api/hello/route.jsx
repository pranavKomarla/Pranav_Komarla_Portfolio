// export async function GET(request) {
//     console.log(request.body);
// }

// export async function POST(request) {
//     const body = await request.json()
//     console.log(body)
//     return new Response("OK");
// }

const fs = require("fs");
const path = require("path");

export function GET(req) {
    const filePath = path.join(process.cwd(),
        "public", "next.svg"); // Path to your file
    // Filename for the downloaded file
    const fileName = "Resume.pdf";

    // Check if the file exists
    if (!fs.existsSync(filePath)) {
        return Response.status(404).send("File not found");
    }

    // Define a mapping of file extensions to content types
    const contentTypeMap = {
        svg: "image/svg+xml",
        ico: "image/x-icon",
        png: "image/png",
        jpg: "image/jpeg",
        pdf: "application/pdf",
        // Add more mappings as needed for other file types
    };

    // Get the file extension
    const fileExtension = fileName.split(".").pop().toLowerCase();

    // Determine the content type based on the file extension
    const contentType =
        contentTypeMap[fileExtension] || "application/octet-stream";

    // Set headers to force download
    res.setHeader("Content-Disposition",
        `attachment; filename="${fileName}"`);
    res.setHeader("Content-Type", contentType);

    // Stream the file
    const fileStream = fs.createReadStream(filePath);
    fileStream.pipe(Response);
}