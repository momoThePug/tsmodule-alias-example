/**
 * @author Daniel Vera Morales
 */
const TSModuleAlias = require("@momothepug/tsmodule-alias");
const tsconfigToReadFromRoot = "./";

// With no custom aliases: TSModuleAlias.play(tsconfigToReadFromRoot);
const aliasRegister = TSModuleAlias.play(tsconfigToReadFromRoot, {
  "@canela": __dirname + "/leo/orange/canela/canela"
});

/**
 *  Alias override and dynamic definitions
 *  should be used only for development process
 */
if (process.env.isDevelop) {
  // defining dynamic alias,  path should be an absolute path
  aliasRegister.addPathAlias(
    "@my_dynamic_alias",
    __dirname + "/leo/orange/dog/orange"
  );
  console.log(require("@my_dynamic_alias"));

  // overriding @mod alias defined in tsconfig
  aliasRegister.addPathAlias("@mod", __dirname + "/leo/orange/dog/orange");
}
console.log(require("@canela"));
console.log(require("@mod"));
console.log(require("@pugpath/pug"));
console.log(require("@bar"));
console.log(require("./myfooobar/func")("Daniel"));
console.log(require("@more/canela/canela"));
console.log(require("@leon/tigre"));
