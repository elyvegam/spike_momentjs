import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale.js';

dayjs.extend(updateLocale);
dayjs.locale('es-mx');

const formatDate = (date, format) => {
  let formatedDate;

  try {
    const fechaInvalida = 'Fecha inválida';
    const formatoInvalido = 'Formato inválido';
    if (dayjs(date).isValid() === false) {
      throw fechaInvalida;
    }
    switch (format) {
      case 'day_month_year':
        formatedDate = `${dayjs(date).format('DD')} de ${dayjs(date).format(
          'MMMM'
        )} de ${dayjs(date).format('YYYY')}`;
        return formatedDate;
      case 'weekday_date':
        formatedDate = `${`${dayjs(date).format('dddd')} ${dayjs(date).format(
          'DD'
        )}`}`;
        return formatedDate;
      case 'day_month_year_hour_minute':
        formatedDate = `${dayjs(date).format('DD')} de ${dayjs(date).format(
          'MMMM'
        )} de ${dayjs(date).format('YYYY')} a ${
          dayjs(date).format('hh') === '01' ? 'la' : 'las'
        } ${dayjs(date).format('hh:mm A')}`;
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
); // 26 de agosto de 2022 a la 01:00 PM
console.log(
  'day_month_year_hour_minute plural',
  formatDate('2022-08-26T10:52:03-06:00', 'day_month_year_hour_minute') // 26 de agosto de 2022 a la 01:00 PM
);
