function doDecay() {
    //let wholeNucleusesLeft = 128;
    let wholeNucleusesLeft = document.getElementById("starting-nucleus-count").value;
    let nucleusCountArrayWithStart = [wholeNucleusesLeft];
    while (wholeNucleusesLeft != 0) {
        let splitCount = 0;
        for (let nucleusIndex = 0; nucleusIndex < wholeNucleusesLeft; nucleusIndex++) {
            if (split())
                splitCount++;
        }
        wholeNucleusesLeft -= splitCount;
        nucleusCountArrayWithStart.push(wholeNucleusesLeft);
    }

    let output =
        "Decay order: " + nucleusCountArrayWithStart.join(", ") + "\n" +
        "T1/2 times: " + (nucleusCountArrayWithStart.length - 1);
    
    document.getElementById("output").value = output;

    function split() {
        let isSplit = Math.ceil(Math.random() * 2) === 1;
        return isSplit;
    }
}