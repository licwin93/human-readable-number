module.exports = function toReadable (number) {
    const oneWords = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teenWords = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tensWords = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    if (number === 0) return oneWords[0];

    let words = [];

    if (number >= 100) {
        const hundredsPart = Math.floor(number / 100);
        words.push(oneWords[hundredsPart], 'hundred');
        number %= 100;
    }

    if (number >= 20) {
        const tensPart = Math.floor(number / 10);
        words.push(tensWords[tensPart]);
        number %= 10;
    } else if (number >= 10) {
        words.push(teenWords[number - 10]);
        number = 0;
    }

    if (number > 0) {
        words.push(oneWords[number]);
    }

    return words.join(' ');
}