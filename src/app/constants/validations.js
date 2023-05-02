export const checkEmail = email => {
  // Check if value is null, empty or contains only white spaces
  if (
    email === undefined ||
    email === null ||
    email === '' ||
    !email.replace(/\s/g, '').length
  ) {
    return false;
  }
  if (email.includes(' ')) {
    email = email.trim();
  }
  return new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  ).test(email);
};

export const isEmpty = value => {
  // Check if value is null, empty or contains only white spaces
  if (
    value === undefined ||
    value === null ||
    value === '' ||
    !value.replace(/\s/g, '').length
  ) {
    return true;
  }
  return false;
};

export const checkPassword = value => {
  if (value === undefined) {
    return false;
  }
  return new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*)(?=.{8,})/).test(
    value,
  );
};

export const checkPhoneNumber = value => {
  if (value === undefined) {
    return false;
  }
  return new RegExp(/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/).test(value);
};
