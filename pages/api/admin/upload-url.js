import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const s3 = new S3Client({
  region: process.env.AWS_REGION || "us-east-2",
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  },
});

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end();
  }

  const { filename, contentType } = req.body || {};

  if (!filename || !contentType) {
    return res.status(400).json({ error: "filename and contentType are required" });
  }

  // Only allow image types
  if (!contentType.startsWith("image/")) {
    return res.status(400).json({ error: "Only image uploads are allowed" });
  }

  // Sanitize filename — strip path traversal, keep only safe characters
  const safeName = filename.replace(/[^a-zA-Z0-9._-]/g, "_");
  const key = `uploads/${Date.now()}-${safeName}`;

  const command = new PutObjectCommand({
    Bucket: process.env.S3_BUCKET_NAME,
    Key: key,
    ContentType: contentType,
  });

  try {
    const url = await getSignedUrl(s3, command, { expiresIn: 120 });
    return res.status(200).json({ url, key });
  } catch (err) {
    console.error("Presign error:", err);
    return res.status(500).json({ error: "Failed to generate upload URL" });
  }
}
