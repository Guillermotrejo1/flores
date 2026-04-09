export default function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).end();
  }

  const { password } = req.body || {};

  if (!password || password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ error: "Invalid password" });
  }

  const token = process.env.ADMIN_TOKEN;
  if (!token) {
    return res.status(500).json({ error: "Server not configured" });
  }

  res.setHeader(
    "Set-Cookie",
    `admin_token=${token}; HttpOnly; Path=/; SameSite=Strict; Max-Age=86400`
  );

  return res.status(200).json({ ok: true });
}
