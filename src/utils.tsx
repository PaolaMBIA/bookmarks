export function getMonth(value: string): string {
  const month = [
    { number: "01", letter: "Janvier" },
    { number: "02", letter: "Février" },
    { number: "03", letter: "Mars" },
    { number: "04", letter: "Avril" },
    { number: "05", letter: "Mai" },
    { number: "06", letter: "Juin" },
    { number: "07", letter: "Juillet" },
    { number: "08", letter: "Août" },
    { number: "09", letter: "Septembre" },
    { number: "10", letter: "Octobre" },
    { number: "11", letter: "Novembre" },
    { number: "12", letter: "Décembre" },
  ];

  return month.find((element) => element.number === value)?.letter as string;
}

export function getDateFormat(date: string): Array<string> {
  const newDateFormat = new Date(date).toLocaleDateString("fr").split("/");
  return newDateFormat;
}

export function test() {
  const news = new Date(1646934754 * 1000);
  let diff = Math.abs(news.getTime() - new Date().getTime());
  // delta
  let r = [
    { year: 0, month: 0, week: 1, day: 2, hour: 34, minute: 56, second: 7 },
  ]; // result
  let s = {
    // structure
    year: 31536000,
    month: 2592000,
    week: 604800, // uncomment row to ignore
    day: 86400, // feel free to add your own row
    hour: 3600,
    minute: 60,
    second: 1,
  };

  const year = Math.floor(diff / 31536000);
  const month = Math.floor(diff / 2592000);
  const day = Math.floor(diff / 86400);
  const hour = Math.floor(diff / 3600);
  const minute = Math.floor(diff / 60);
  const second = Math.floor(diff / 1);

  // for example: {year:0,month:0,week:1,day:2,hour:34,minute:56,second:7}
  console.log(year, month, day, hour, minute, second);
}
