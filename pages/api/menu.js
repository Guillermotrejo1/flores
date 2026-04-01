const UPSTREAM_MENU_API = (
  process.env.MENU_API_URL ||
  process.env.NEXT_PUBLIC_MENU_API ||
  "https://zpet76ni78.execute-api.us-east-2.amazonaws.com/prod/menu"
).replace(/\/$/, "");

export default async function handler(req, res) {
  const method = req.method || "GET";

  if (method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const response = await fetch(UPSTREAM_MENU_API, { method: "GET" });
    const responseText = await response.text();

    let payload;
    try {
      payload = responseText ? JSON.parse(responseText) : [];
    } catch {
      payload = { raw: responseText };
    }

    if (!response.ok) {
      return res.status(response.status).json({
        error: payload?.error || "Upstream request failed",
        details: payload,
      });
    }

    return res.status(200).json(payload);
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to fetch upstream API";
    return res.status(502).json({ error: message });
  }
}
