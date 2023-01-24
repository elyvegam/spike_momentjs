import { DateTime, Settings } from 'luxon';

Settings.defaultLocale = 'es-mx'; // seteo global

const months =
  'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre';
const monthsShort = 'Ene._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.';
const weekdays = 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado';
const weekdaysShort = 'Dom._Lun._Mar._Mie._Jue._Vie._Sab.';
const weekdaysMin = 'Do_Lu_Ma_Mi_Ju_Vi_Sa';
const monthsInLoweCase =
  'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre';

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
        formatedDate = `${`${dt.toFormat('cccc')} ${dt.toFormat('dd')}`}`;
        return formatedDate;
      case 'day_month_year_hour_minute':
        formatedDate = `${dt.toFormat('DDD')} a ${
          dt.toFormat('hh') === '01' ? 'la' : 'las'
        } ${dt.toFormat('t')} ${dt.toFormat('a') === 'a. m' ? 'AM' : 'PM'}`;
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
); // 26 de agosto de 2022 a la 13:00 PM (a pesar que la documentación refiere a query AM/PM el resultado no es el mencionado)
console.log(
  'day_month_year_hour_minute plural',
  formatDate('2022-08-26T10:52:03-06:00', 'day_month_year_hour_minute') // 26 de agosto de 2022 a las 12:52 PM
);
