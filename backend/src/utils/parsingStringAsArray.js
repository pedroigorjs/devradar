export default function stringToArray(arrayAsString) {
  return arrayAsString.split(',').map(string => string.trim());
}
