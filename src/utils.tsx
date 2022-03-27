export function getDuration(value: number): string {
  const result = new Date(value * 1000).toISOString().slice(11, 19);
  return result;
}

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

export function getTimeDiff(date: string): string {
  let newDateFormat = new Date();

  new Date(date).toString() === "Invalid Date"
    ? (newDateFormat = new Date(parseInt(date) * 1000))
    : (newDateFormat = new Date(date));

  let timeInSecond = {
    year: 31536000,
    month: 2592000,
    day: 86400,
    hour: 3600,
    minute: 60,
    second: 1,
  };

  const dateDiff = () => {
    let delta = Math.abs(newDateFormat.getTime() - Date.now()) / 1000;
    return Object.entries(timeInSecond).reduce((acc, [key, value]) => {
      acc[key] = Math.floor(delta / value);
      delta -= acc[key] * value;
      return acc;
    }, {} as options);
  };

  const result = dateDiff();

  if (result.year === 0) {
    if (result.month === 0) {
      if (result.day === 0) {
        if (result.hour === 0) {
          if (result.minute === 0) {
            return result.second > 1
              ? `${result.second} secondes`
              : `une seconde`;
          } else {
            return result.minute > 1 ? `${result.minute} minute` : "une minute";
          }
        } else {
          return result.hour > 1 ? `${result.hour} heures` : "une heure";
        }
      } else {
        return result.day > 1 ? `${result.day} jours` : "un jour";
      }
    } else {
      return result.month > 1 ? `${result.month} mois` : " un mois";
    }
  } else {
    return result.year > 1 ? `${result.year} ans` : "un an";
  }
}

type options = {
  [key: string]: number;
};
