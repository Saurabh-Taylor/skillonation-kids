// pages/api/save-form-data.js

import { google } from "googleapis";
import { NextApiRequest, NextApiResponse } from "next";
const axios = require("axios");
const qs = require("qs");
interface ResponseData {
  message: string;
}

export async function POST(req: Request, res: NextApiResponse<ResponseData>) {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  const formData = await req.json();
  try {
    const formFields = {
      "entry.177382573": formData.firstname, // Name - Google Form field ID
      "entry.390418166": formData.class, // Class - Google Form field ID
      "entry.2135812947": formData.school, // School - Google Form field ID
      "entry.1861740709": formData.marks, // Marks - Google Form field ID
      "entry.921758023": formData.parentsname, // Parents Name - Google Form field ID
      "entry.884091076": formData.phnumber, // Contact - Google Form field ID
      "entry.212690042": formData.email, // Email - Google Form field ID
      "entry.922894889": formData.city, // City - Google Form field ID
      "entry.590946507": formData.achievements, // Achievements - Google Form field ID
    };

    const data = qs.stringify({
      ...formFields,
      fvv: "1",
      partialResponse: '[null,null,"-910453511687907015"]',
      pageHistory: "0",
      fbzx: "-910453511687907015",
      submissionTimestamp: Date.now().toString(),
    });

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfstwsMLSVTA2ZvQj3J1KtewAub69WJv-XpJHQbkwpTU_AFMQ/formResponse",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:127.0) Gecko/20100101 Firefox/127.0",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,/;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        Referer:
          "https://docs.google.com/forms/d/e/1FAIpQLSfstwsMLSVTA2ZvQj3J1KtewAub69WJv-XpJHQbkwpTU_AFMQ/viewform?fbzx=-910453511687907015",
        "Content-Type": "application/x-www-form-urlencoded",
        Origin: "https://docs.google.com",
      },
      data,
    };

    const response = await axios.request(config);
    return new Response("Form data saved successfully", { status: 200 });
  } catch (error) {
    console.error("Error submitting form:", error);
    return new Response("Error submitting form", { status: 500 });
  }
}
