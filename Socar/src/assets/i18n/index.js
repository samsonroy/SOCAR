// ES6 module syntax
import LocalizedStrings from 'react-native-localization';

// CommonJS syntax
// let LocalizedStrings  = require ('react-native-localization');

export const Strings = new LocalizedStrings({
  'en-US': require('./en.json'),
});
