function perfecteGetallen(limiet) {
    for (let getal = 1; getal <= limiet; getal++) {
        let som = 0;
        for (let deler = 1; deler < getal; deler++) {
            if (getal % deler == 0) {
                som += deler;
            }
        }

        if (som == getal) {
            console.log(getal);
        }
    }
}
perfecteGetallen(500);
