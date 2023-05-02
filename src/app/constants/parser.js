const regExpressions = [
  new RegExp(/[A-Z]{2}\d{6}</),
  new RegExp(/\s\d{13}/),
  new RegExp(/IDROU[A-Z]{3,22}<</),
  new RegExp(/IDROU[A-Z]{3,22}<<[A-Z]{3,22}</),
  new RegExp(/IDROU[A-Z]{3,22}<<[A-Z]{3,22}<[A-Z]{3,22}</),
];

const parseIdentity = text => {
  const occurencies = regExpressions.map(expression =>
    text.match(expression)?.at(0),
  );
  let serialNo = occurencies[0];
  let cardSeries = serialNo?.substr(0, 2);
  let cardNo = serialNo?.substr(2, 6);
  let uniqueNumber = occurencies[1]?.substr(1, 13);
  let lastName = occurencies[2]?.replace('IDROU', '').slice(0, -2);
  let firstName = occurencies[3]
    ?.replace('IDROU', '')
    .replace('<<', '')
    .replace(lastName, '')
    .slice(0, -1);
  let middleName = occurencies[4]
    ?.replace('IDROU', '')
    .replace('<<', '')
    .replace(lastName, '')
    .replace(firstName, '')
    .replace('<', '')
    .slice(0, -1);
  return {
    cardSeries,
    cardNo,
    uniqueNumber,
    lastName,
    firstName,
    middleName,
  };
};

export default parseIdentity;
