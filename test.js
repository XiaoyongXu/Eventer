const moment = require("moment");

const date = moment().format("YYYYMMDDTHHmmss");
const newDate = date + "Z";
console.log(newDate);
