export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.supertonapp.com');
  res.setHeader('Access-Control-Allow-Methods', 'POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { pin } = req.body;
  const correctPin = process.env.ADMIN_PIN;

  if (!correctPin) {
    return res.status(500).json({ error: 'Not configured' });
  }

  if (pin === correctPin) {
    return res.status(200).json({ success: true });
  }

  return res.status(401).json({ error: 'Invalid PIN' });
}
