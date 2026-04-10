export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', 'https://www.supertonapp.com');
  res.setHeader('Access-Control-Allow-Methods', 'GET');

  const fbUrl = process.env.FIREBASE_URL;
  const fbSecret = process.env.FIREBASE_SECRET;
  if (!fbUrl || !fbSecret) return res.status(500).json({ error: 'Not configured' });

  const auth = `?auth=${fbSecret}`;

  try {
    const getRes = await fetch(`${fbUrl}/visits.json${auth}`);
    const raw = await getRes.json();

    const current = typeof raw === 'number' && raw > 0 && raw < 10_000_000 ? raw : 0;
    const next = current + 1;

    await fetch(`${fbUrl}/visits.json${auth}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(next),
    });

    res.status(200).json({ count: next });
  } catch {
    res.status(500).json({ error: 'Firebase error' });
  }
}
