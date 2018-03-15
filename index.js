/**
 *
 */
const TSModuleAlias = require("@momothepug/tsmodule-alias");
const tsconfigToReadFromRoot = "./";
const aliasRegister = TSModuleAlias.play(tsconfigToReadFromRoot);
/**
 *  Alias override should be used only for development process
 */
if (process.env.MY_VAR) {
    aliasRegister.addPathAlias("@my_dynamic_alias", __dirname + "/leo/orange/dog/orange");
    console.log(require("@my_dynamic_alias"));
}
// aliasRegister.addPathAlias("@mod", __dirname + "/leo/orange/dog/orange");
console.log(require("@mod"));
console.log(require("@pugpath/pug"));
console.log(require("@bar"));
console.log(require("./myfooobar/func")("Daniel"));
console.log(require("@more/canela/canela"));
console.log(require("@leon/tigre"));
