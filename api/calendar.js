import { GCCalendar } from '../js/GCCalendar.js'; // adjust path
import { GCAstroData } from '../js/GCAstroData.js'; // for earth data, if needed
import { GregorianDateTime } from '../js/GregorianDateTime.js'; // date utils

export default function handler(req, res) {
  // Get date from query or use today
  const dateStr = req.query.date || new Date().toISOString().slice(0, 10);
  const [year, month, day] = dateStr.split('-').map(Number);

  // Create GregorianDateTime object (assuming constructor: year, month, day)
  const vc = new GregorianDateTime(year, month, day);

  // Create earth/astro data instance
  const earth = new GCAstroData();
  // You may need to set location/latitude/longitude if required

  // Use GCCalendar method, e.g. get Gaurabda year
  const gaurabdaYear = GCCalendar.GetGaurabdaYear(vc, earth);

  res.status(200).json({
    date: dateStr,
    gaurabdaYear,
    // Add other info as needed
  });
}
