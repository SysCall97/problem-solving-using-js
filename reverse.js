function reverseText(text) {
    let reverse = "";
    for(let i = text.length-1; i>=0; --i) {
        reverse += text[i];
    }
    return reverse;
}


let speech = "Wikis are enabled by wiki software, otherwise known as wiki engines. A wiki engine, being a form of a content management system, differs from other";

let reverse = reverseText(speech);

console.log(reverse);