// pages/api/save-form-data.js

import { log } from "console";
import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";
interface ResponseData {
  message: string;
}

export async function POST(req: Request, res: NextApiResponse<ResponseData>) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }
  const payload = await req.json();
  console.log("saurabh::",process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL);
  
  const clientEmail = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
  const privateKey =
    process.env.GOOGLE_SERVICE_PRIVATE_KEY?.replace(/\\n/g, "\n") ?? undefined;
  const spreadsheetId = process.env.NEXT_PUBLIC_SPREADSHEET_ID;

  console.log(privateKey);

  const auth = new google.auth.JWT(clientEmail, "", privateKey, [
    "https://www.googleapis.com/auth/spreadsheets",
  ]);

  const sheets = google.sheets({ version: "v4", auth });

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A1", // Adjust the range as needed
      valueInputOption: "RAW",
      requestBody: {
        values: [
          [
            payload.firstname,
            payload.lastname,
            payload.classnumber,
            payload.school,
            payload.marks,
            payload.parentsname,
            payload.phnumber,
            payload.email,
            payload.city,
            payload.achievements,
          ],
        ],
      },
    });

    return new Response("Form data saved successfully", { status: 200 });
  } catch (error) {
    console.error("Error saving form data:", error);
    return new Response("Error saving form data", { status: 500 });
  }
}
