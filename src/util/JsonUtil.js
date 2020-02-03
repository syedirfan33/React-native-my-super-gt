/**
 * @format
 * @flow
 */

export function jsonToString(input: any) {
  try {
    return JSON.stringify(input);
  } catch (error) {
    console.log('Error to convert json to string: ' + error);
    return null;
  }
}

export function stringToJson(input: string) {
  try {
    return JSON.parse(input);
  } catch (error) {
    console.log('Error to convert string to json: ' + error);
    return null;
  }
}
