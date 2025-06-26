const { Calendar } = require('../js/calendar');

module.exports = (req, res) => {
  const date = req.query.date || '2025-06-26';

  const latitude = 19.076;
  const longitude = 72.877;

  const cal = new Calendar({
    date: new Date(date),
    latitude,
    longitude,
  });

  const result = cal.getDayData();

  res.status(200).json(result);
};
