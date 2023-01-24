import {
  format as dateFormat,
  parseISO,
  setDefaultOptions,
  isValid,
} from 'date-fns';
import { es } from 'date-fns/locale/index.js';

setDefaultOptions({ locale: es });

const months =
  'Enero_Febrero_Marzo_Abril_Mayo_Junio_Julio_Agosto_Septiembre_Octubre_Noviembre_Diciembre';
const monthsShort = 'Ene._Feb._Mar_Abr._May_Jun_Jul._Ago_Sept._Oct._Nov._Dec.';
const weekdays = 'Domingo_Lunes_Martes_Miercoles_Jueves_Viernes_Sabado';
const weekdaysShort = 'Dom._Lun._Mar._Mie._Jue._Vie._Sab.';
const weekdaysMin = 'Do_Lu_Ma_Mi_Ju_Vi_Sa';
const monthsInLoweCase =
  'enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre';

const formatDate = (date, format) => {
  let parsedDate = parseISO(date);
  let formatedDate;
  try {
    const fechaInvalida = 'Fecha inválida';
    const formatoInvalido = 'Formato inválido';

    if (isValid(parsedDate) === false) {
      throw fechaInvalida;
    }

    switch (format) {
      case 'day_month_year':
        formatedDate = dateFormat(parsedDate, 'dd MMMM y');
        return formatedDate;
      case 'weekday_date':
        formatedDate = dateFormat(parsedDate, 'EEEE d');
        return formatedDate;
      case 'day_month_year_hour_minute':
        formatedDate = `${dateFormat(parsedDate, 'PPP')} a ${
          dateFormat(parsedDate, 'hh') === '01' ? 'la' : 'las'
        } ${dateFormat(parsedDate, 'hh:mm a')}`;
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
); // 26 de Agosto de 2022 a la 01:00 PM
console.log(
  'day_month_year_hour_minute plural',
  formatDate('2022-08-26T10:52:03-06:00', 'day_month_year_hour_minute') // 26 de Agosto de 2022 a las 12:52 PM
);
