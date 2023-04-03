function rollDice () {
    let throwCount = document.getElementById("throw-count").value;
    var nums = [];
    let countOf1s = 0;
    let countOf2s = 0;
    let countOf3s = 0;
    let countOf4s = 0;
    let countOf5s = 0;
    let countOf6s = 0;
    for (let i = 1; i <= throwCount; i++) {
        let rnd = Math.floor(Math.random() * 6 + 1);
        nums.push(rnd);
        switch (rnd) {
            case 1: countOf1s++;
                break;
            case 2: countOf2s++;
                break;
            case 3: countOf3s++;
                break;
            case 4: countOf4s++;
                break;
            case 5: countOf5s++;
                break;
            case 6: countOf6s++;
                break;
            default:
                throw new Error('Something went terribly wrong. RUN!');
        }
    }
    //console.log(toPrint.join(' '));
    let output =
        "1 се падна " + countOf1s + " пъти." + "\n" +
        "2 се падна " + countOf2s + " пъти." + "\n" +
        "3 се падна " + countOf3s + " пъти." + "\n" +
        "4 се падна " + countOf4s + " пъти." + "\n" +
        "5 се падна " + countOf5s + " пъти." + "\n" +
        "6 се падна " + countOf6s + " пъти.";
    document.getElementById("output").value = output;
}
