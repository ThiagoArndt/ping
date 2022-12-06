const data = [
  { id: "ping", content: "pong" },
  { id: "pong", content: "ping" },
];

async function handler(req, res) {
  if (req.method == "GET") {
    try {
        return res.status(200).json(data);
    } catch (err) {
      return res.status(500).json({ statusCode: 500, message: err.message });
    }
  }
}

export default handler;
