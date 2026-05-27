export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.supertonapp.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  const fbUrl = process.env.FIREBASE_URL;
  const fbSecret = process.env.FIREBASE_SECRET;
  if (!fbUrl || !fbSecret) return res.status(500).json({ error: 'Not configured' });

  const auth = `?auth=${fbSecret}`;

  if (req.method === 'GET') {
    try {
      const getRes = await fetch(`${fbUrl}/auction-brokers.json${auth}`);
      const data = await getRes.json();
      return res.status(200).json({ brokers: data || {} });
    } catch {
      return res.status(500).json({ error: 'Firebase error' });
    }
  }

  if (req.method === 'POST') {
    const { pin, ar, en } = req.body;
    if (pin !== process.env.ADMIN_PIN) {
      return res.status(401).json({ error: 'Invalid PIN' });
    }

    try {
      await fetch(`${fbUrl}/auction-brokers.json${auth}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ar, en }),
      });
      return res.status(200).json({ success: true });
    } catch {
      return res.status(500).json({ error: 'Firebase error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
