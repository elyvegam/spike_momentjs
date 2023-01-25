import { DateTime, Settings } from 'luxon';

Settings.defaultLocale = 'es-mx'; // seteo global

const formatDate = (date, format) => {
  const dt = DateTime.fromISO(date); // necesario al utilizar ISO
  let formatedDate;
  try {
    const fechaInvalida = 'Fecha inválida';
    const formatoInvalido = 'Formato inválido';

    if (dt.isValid === false) {
      throw fechaInvalida;
    }

    switch (format) {
      case 'day_month_year':
        formatedDate = dt.toFormat('DDD');
        return formatedDate;
      case 'weekday_date':
        formatedDate = dt.toFormat('cccc dd');
        return formatedDate;
      case 'day_month_year_hour_minute':
        const useSingularOrPlural = dt.toFormat('hh') === '01' ? 'la' : 'las';
        const useAMorPM = dt.toFormat('a') === 'a. m' ? 'AM' : 'PM';
        formatedDate = dt.toFormat(
          `DDD 'a ${useSingularOrPlural}' t '${useAMorPM}'`
        );
        return formatedDate;
      default:
        throw formatoInvalido;
    }
  } catch (error) {
    return error;
  }
};

console.log(
  'day_month_year',
  formatDate('2022-08-26T10:52:03-06:00', 'day_month_year')
); // 26 de agosto de 2022
console.log(
  'weekday_date',
  formatDate('2022-08-26T10:52:03-06:00', 'weekday_date')
); // viernes 26
console.log(
  'day_month_year_hour_minute singular',
  formatDate('2022-08-26T11:00:01-06:00', 'day_month_year_hour_minute')
); // 26 de agosto de 2022 a la 13:00 PM (a pesar que la documentación refiere a query AM/PM el resultado no es el mencionado, pasa igual con formato 12 horas)
console.log(
  'day_month_year_hour_minute plural',
  formatDate('2022-08-26T10:52:03-06:00', 'day_month_year_hour_minute') // 26 de agosto de 2022 a las 12:52 PM
);
