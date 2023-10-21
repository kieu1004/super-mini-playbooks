export const emailValidator = (email: string) => {
  const re = /\S+@\S+\.\S+/;

  if (!email || email.length <= 0) return 'Email cannot be empty.';
  if (!re.test(email)) return 'Ooops! We need a valid email address.';

  return '';
};

export const passwordValidator = (password: string) => {
  if (!password || password.length <= 0) return 'Password cannot be empty.';

  return '';
};

export const nameValidator = (name: string) => {
  if (!name || name.length <= 0) return 'Name cannot be empty.';

  return '';
};

export const phoneNumberValidator = (phoneNumber: string) => {
  const re = /^\+84\d{9}$/;

  if (!phoneNumber || phoneNumber.replace(/\D/g, '').length <= 0) {
    return 'Phone number cannot be empty.';
  }
  if (!re.test(phoneNumber)) {
    return 'Please enter a valid phone number with a country code, starting with \'+84\'.';
  }

  return '';
};

