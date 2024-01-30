import { ListObjectsCommand, S3Client } from "@aws-sdk/client-s3";
import { NextResponse } from "next/server";

const s3Client = new S3Client({
  region: process.env.REGION as string,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
  },
});

export async function GET() {
  try {
    const params = {
      Bucket: process.env.AWS_BUCKET_NAME as string,
      prefix: "themes/",
    };

    const command = new ListObjectsCommand(params);
    const response = await s3Client.send(command);

    const images = response.Contents?.filter((object) => {
      if (object.Key !== "themes/" && object.Key?.includes("themes/")) {
        return {
          Key: object.Key,
        };
      }
    });
    return NextResponse.json({ success: true, images });
  } catch (error) {
    console.error("Error fetching image:", error);
    NextResponse.json({ message: "Error fetching image" });
  }
}
