export function orderWords(str) {
    if (str.length == 0) return str;
    let result = {}
    str.split(" ").forEach(word => {
        const matches = word.match(/(\d+)/);
        if (matches)
            result[parseInt(matches[0])] = word;
    });

    return Object.values(result).join(" ");
}
