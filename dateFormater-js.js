// import moment from 'moment';
// import 'moment/locale/es-mx';

const months =
  'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre';
const monthsShort = 'Ene._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.';
const weekdays = 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado';
const weekdaysShort = 'Dom._Lun._Mar._Mie._Jue._Vie._Sab.';
const weekdaysMin = 'Do_Lu_Ma_Mi_Ju_Vi_Sa';
const monthsInLoweCase =
  'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre';

/**
 * @param {string} date of the transaction eg. 2022-08-26T10:52:03-06:00
 *
 * @param {DatesFormat} format of the transaction eg. day_month_year
 * function to format a date as following 26 de agosto de 2022 a las 11:30
 *
 * @param {DatesFormat} format of the transaction eg. weekday_date
 * function to format a date as following viernes 26.
 *
 * @param {DatesFormat} format of the transaction eg. day_month_year_hour_minute
 * function to format a date as following 26 de Agosto de 2022 a las 11:52.
 */
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
