const { Calendar } = require('gaurabda-js');

module.exports = (req, res) => {
  const { date = '2025-06-26' } = req.query;

  const latitude = 19.076;   // Mumbai
  const longitude = 72.877;

  try {
    const cal = new Calendar({
      date: new Date(date),
      latitude,
      longitude,
    });

    const result = cal.getDayData();

    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Calendar calculation failed.' });
  }
};
