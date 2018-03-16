/**
 * @author Daniel Vera Morales
 */
const tSModuleAlias = require("@momothepug/tsmodule-alias");

// make it work using custom alias before execution
tSModuleAlias.use({
  "@leoAlias": __dirname + "/leo/orange/dog/orange",
  "@pugpath/pug": __dirname + "/myfooobar/func",
  "@bar": __dirname + "/bar/bar"
});

console.log(require("@bar"));
console.log(require("@pugpath/pug")("Jhon Doe"));
console.log(require("@leoAlias"));
