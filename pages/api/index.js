const data = [
  { id: "ping", message: "pong" },
  { id: "pong", message: "ping" },
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
