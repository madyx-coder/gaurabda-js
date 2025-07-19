import { computeCalendar } from 'gaurabda-js';

export default async function handler(req, res) {
  const lat   = parseFloat(req.query.lat  || '0');
  const lng   = parseFloat(req.query.lng  || '0');
  const year  = parseInt(req.query.year || new Date().getFullYear());
  const month = parseInt(req.query.month) ?? new Date().getMonth();

  if (!lat || !lng) {
    return res.status(400).json({ error: 'Missing lat & lng' });
  }

  try {
    const events = await computeCalendar({ lat, lng, year, month });
    return res.status(200).json(events);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: 'Calculation failed' });
  }
}
