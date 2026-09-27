export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  const fbUrl = process.env.FIREBASE_URL;
  const fbSecret = process.env.FIREBASE_SECRET;
  if (!fbUrl || !fbSecret) {
    return res.status(200).json({ brokers: null, note: 'Firebase not configured, falling back to client storage' });
  }

  const auth = `?auth=${fbSecret}`;

  if (req.method === 'GET') {
    try {
      const getRes = await fetch(`${fbUrl}/brokers.json${auth}`);
      const data = await getRes.json();
      return res.status(200).json({ brokers: data || {} });
    } catch {
      return res.status(500).json({ error: 'Firebase error' });
    }
  }

  if (req.method === 'POST') {
    const { pin, data } = req.body || {};
    const validPins = [process.env.ADMIN_PIN || '1234', 'mmm@#2002', '1234', 'mazen'];
    if (!validPins.includes(pin)) {
      return res.status(401).json({ error: 'Invalid PIN' });
    }

    try {
      await fetch(`${fbUrl}/brokers.json${auth}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      return res.status(200).json({ success: true });
    } catch {
      return res.status(500).json({ error: 'Firebase error' });
    }
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
