import moment from 'moment';
import Constants from './Constants';

// get a date by format. Defaulted to YYYYMMDD if arg not passed
export function getDateByFormat(
  format: String = Constants.API_REQUEST_DATE_FORMAT
) {
  return moment().format(format);
}

// get a date by format, added/subtracted number of days. Defaulted to YYYYMMDD and 90 days if arg not passed
export function getOtherDateByFormat(
  format: String = Constants.API_REQUEST_DATE_FORMAT,
  noOfDays: Number = 365
) {
  return moment()
    .subtract(noOfDays, 'days')
    .format(format);
}

// Format a given date with given format into expected format
export function formatDate(
  date,
  inputFormat = Constants.API_RESPONSE_DATE_FORMAT,
  returnFormat = Constants.DISPLAY_DATE_FULL_FORMAT
) {
  return moment(date, inputFormat).format(returnFormat);
}
