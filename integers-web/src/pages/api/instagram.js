export default async function handler(req, res) {
  try {
    const INSTAGRAM_ID = process.env.INSTAGRAM_ID;
    const ACCESS_TOKEN = process.env.ACCESS_TOKEN;

    if (!INSTAGRAM_ID || !ACCESS_TOKEN) {
      return res.status(500).json({ error: "Missing env variables" });
    }

    const url = `https://graph.facebook.com/v22.0/${INSTAGRAM_ID}/media?fields=id,caption,media_type,media_url,permalink,timestamp&limit=6&access_token=${ACCESS_TOKEN}`;

    const response = await fetch(url);
    const data = await response.json();

    // console.log("data: ",data);

    if (data.error) {
      return res.status(400).json({ error: data.error.message });
    }

    return res.status(200).json(data);
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
}
