import { sendContactEmail } from "../../lib/sendContactEmail.mjs";

const json = (statusCode, body) => ({
  statusCode,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
  body: JSON.stringify(body),
});

export const handler = async (event) => {
  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
      },
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return json(405, { error: "Method not allowed" });
  }

  try {
    const payload = JSON.parse(event.body ?? "{}");
    await sendContactEmail(payload);
    return json(200, { success: true });
  } catch (error) {
    console.error("send-email error:", error);

    if (error.message === "All fields are required") {
      return json(400, { error: error.message });
    }

    if (error.message === "Email service is not configured") {
      return json(500, { error: error.message });
    }

    return json(500, { error: "Failed to send message" });
  }
};
