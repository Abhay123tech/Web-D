const figlet = require("figlet"); //in case of package we not need to write ./import figlet from "figlet";
// figlet -> by using diffetent simbols and character we write text
async function doStuff() {
    const text = await figlet.text("Apna Collage");
    console.log(text);
}

doStuff();