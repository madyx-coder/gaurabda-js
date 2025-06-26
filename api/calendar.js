import { Calendar } from '../src/calendar/index.js'; // <-- direct path to source

export default function handler(req, res) {
  try {
    const date = req.query.date || '2025-06-26';

    const latitude = 19.076;  // Mumbai
    const longitude = 72.877;

    const cal = new Calendar({
      date: new Date(date),
      latitude,
      longitude,
    });

    const result = cal.getDayData();

    res.status(200).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
