//  CommonJS, every file is module (by default)
// Modules - Encapsulated Code (only share minimum)
// You can either destructure or use properties from imported variable
const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavors')
console.log(data)
require('./7-mind-grenade')
sayHi('Ryan')
sayHi(names.jon)
sayHi(names.peter)