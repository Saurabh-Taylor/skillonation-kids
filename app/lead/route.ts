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
      "entry.2092238618": formData.name, // Name - Google Form field ID
      "entry.1411810404": formData.email, // Class - Google Form field ID
      "entry.479301265": formData.number, // School - Google Form field
    };

    const data = qs.stringify({
      ...formFields,
      fvv: "1",
      partialResponse: '[null,null,"7096788945615701405"]',
      pageHistory: "0",
      fbzx: "-7096788945615701405",
      submissionTimestamp: Date.now().toString(),
    });

    //docs.google.com/forms/u/0/d/e/1FAIpQLScOse6VP-arLy0B616N_9QgEL6q6tw4A0DTAGXZMLM99RxQgA/formResponse

    const config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://docs.google.com/forms/d/e/1FAIpQLScOse6VP-arLy0B616N_9QgEL6q6tw4A0DTAGXZMLM99RxQgA/formResponse",
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:127.0) Gecko/20100101 Firefox/127.0",
        Accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,/;q=0.8",
        "Accept-Language": "en-US,en;q=0.5",
        "Accept-Encoding": "gzip, deflate, br, zstd",
        Referer:
          "https://docs.google.com/forms/d/e/1FAIpQLScOse6VP-arLy0B616N_9QgEL6q6tw4A0DTAGXZMLM99RxQgA/viewform?fbzx=-910453511687907015",
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
