/**
 *
 */
const TSModuleAlias = require("@momothepug/tsmodule-alias");
const tsconfigToReadFromRoot = "./";
TSModuleAlias.play(tsconfigToReadFromRoot);
console.log(require("@mod"));
console.log(require("@pugpath/pug"));
console.log(require("@bar"));
console.log((require("./myfooobar/func"))("Daniel"));
console.log(require("@more/canela/canela"));
console.log(require("@leon/tigre"));
