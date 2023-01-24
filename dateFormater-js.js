const formatDate = (date, format) => {
  let formatedDate;
  try {
    const datejs = new Date(date);

    const formatoInvalido = 'Formato inválido';

    switch (format) {
      case 'day_month_year':
        formatedDate = datejs.toLocaleString('es-mx', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });
        return formatedDate;
      case 'weekday_date':
        formatedDate = datejs.toLocaleString('es-MX', {
          weekday: 'long',
          day: 'numeric',
        });
        return formatedDate;
      case 'day_month_year_hour_minute':
        formatedDate = datejs.toLocaleString('es-MX', {
          weekday: 'long',
          day: 'numeric',
        });
        const formattedTime = datejs.toLocaleString('es-MX', {
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        });
        return `${formatedDate} a las ${formattedTime}`;
      default:
        throw formatoInvalido;
    }
  } catch (error) {
    return error;
  }
};

console.log(
  'day_month_year',
  formatDate('2022-08-26T10:52:03-06:00', 'day_month_year'),
); // 26 de agosto de 2022
console.log(
  'weekday_date',
  formatDate('2022-08-26T10:52:03-06:00', 'weekday_date'),
); // viernes 26
console.log(
  'day_month_year_hour_minute',
  formatDate('2022-08-26T11:00:01-06:00', 'day_month_year_hour_minute'),
); // viernes 26 a las 01:00 p. m.
