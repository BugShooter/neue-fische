// 4. Text Formatter

const log = console.log

interface TextInterface {
    getText: () => string;
}
class PlainText implements TextInterface {
    constructor(private text: string) { }
    getText() {
        return this.text;
    }
}

class BoldTextDecorator implements TextInterface {
    constructor(private text: TextInterface) { }
    getText() {
        return `<b>${this.text.getText()}</b>`;
    };
}

class ItalicTextDecorator implements TextInterface {
    constructor(private text: TextInterface) { }
    getText() {
        return `<i>${this.text.getText()}</i>`
    }
}

class UnderlineTextDecorator implements TextInterface {
    constructor(private text: TextInterface) { }
    getText() {
        return `<u>${this.text.getText()}</u>`
    }
}

export function main() {
    log("4. Text Formatter");
    let text: TextInterface = new PlainText("Cogito, ergo sum.");
    log("Plain text:", text.getText());

    const boldText = new BoldTextDecorator(text);
    log("Bold text decorator:", text.getText());

    const italicText = new ItalicTextDecorator(text);
    log("Italic text decorator:", italicText.getText());

    const underlineText = new UnderlineTextDecorator(text);
    log("Underline text decorator:", underlineText.getText());

    text = new UnderlineTextDecorator(new ItalicTextDecorator(new BoldTextDecorator(text)));
    log("Bold+Italic+Underline text decorator:", text.getText());
}