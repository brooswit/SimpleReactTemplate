module.exports = (()=>{
  var t = {};

  t.millisecconds = t.milliseccond = 1;
  t.centiseconds = t.centisecond = 10 *t.milliseccond;
  t.deciseconds = t.decisecond = 10 *t.centisecond;
  t.seconds = t.second = 10 *t.decisecond;
  t.minutes = t.minute = 60 *t.seconds;
  t.hours = t.hour = 60 *t.minutes;
  t.days = t.day = 24 *t.hours;
  t.weeks = t.week = 7 *t.days;
  t.months = t.month = 30 *t.days;
  t.year = 365 *t.days;

  t.years = 365.2422 *t.days;
  t.decades = t.decade = 10 *t.years;
  t.centuries = t.century = 10 *t.decades;
  t.millennia = t.millennium = 10 *t.centuries;

  t.jiffies = t.jiffy = 1/55 *t.seconds;
  t.moments = t.moment = 1/40 *t.hours;
  t.ke = 14 *t.minutes + 24 *t.seconds;
  t.kiloseconds = t.kilosecond = 1000 *t.seconds;
  t.megaseconds = t.megasecond = 1000 *t.kiloseconds;
  t.fortnights = t.fortnight = 2 *t.weeks;
  t.quarters = t.quarter = 3 *t.months;
  t.seasons = t.season = t.quarter;
  t.galacticYears = t.galacticYear = 225000000 *t.years;
  return t;
})();
