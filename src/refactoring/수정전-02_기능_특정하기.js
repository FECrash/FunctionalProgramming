function beforePrinter(user, phone) {
  console.log('USER PHONE:');
  console.log(`Country code Phone : ${phone.countryCode}`);
  console.log(`Phone area code: ${phone.areaCode}`);
  console.log(`Phone base number: ${phone.baseNumber}\n`);
  console.log('USER DATA:');
  console.log(`User name: ${user.userName}`);
  console.log(`User lastname: ${user.userLastName}`);
  console.log(`User DNI: ${user.userDni}`);
  console.log(`User phone: ${user.userEmail}`);
  console.log(`User email: ${user.userPhone}`);
}

function afterPrinter(user, phone) {
  console.log('USER PHONE:');
  console.log(`Country code Phone : ${phone.getCountryCode()}`);
  console.log(`Phone: ${phone.getFormatPhone()}\n`);
  console.log('USER DATA:');
  console.log(`User name: ${user.getName()}`);
  console.log(`User lastname: ${user.getLastName()}`);
  console.log(`User DNI: ${user.getDni()}`);
  console.log(`User email: ${user.getPhone()}`);
}

class Phone {
  constructor(unformattedNumber) {
    this.unformattedNumber = unformattedNumber;
  }

  get countryCode() {
    return this.unformattedNumber.substring(0, 3);
  }
  get areaCode() {
    return `${this.unformattedNumber.substring(3, 6)}`;
  }
  get baseNumber() {
    return `${this.unformattedNumber.substring(6, 9)} ${this.unformattedNumber.substring(9, 12)}`;
  }
}

class User {
  constructor(name, lastName, dni, phone, email) {
    this.name = name;
    this.lastName = lastName;
    this.dni = dni;
    this.email = email;
    this.phone = `${phone.countryCode} ${phone.areaCode} ${phone.baseNumber}`;
  }

  get userName() {
    return this.name;
  }
  get userLastName() {
    return this.lastName;
  }
  get userDni() {
    return this.dni;
  }
  get userEmail() {
    return this.email;
  }
  get userPhone() {
    return this.phone;
  }
}

const phone1 = new Phone('+34635538973');
const user1 = new User('Fernando', 'Aparicio Galende', '12345678S', phone1, 'fernando.aparicio@guidesmiths.com');

beforePrinter(user1, phone1);
