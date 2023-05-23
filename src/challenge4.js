function points(matches) {
    let totalpoints = 0;

    for (let i = 0; i < matches.length; i++) {
        const [x, y] = matches[i].split(":");
        const ourScore = parseInt(x);
        const oppScore = parseInt(y);

        if (ourScore > oppScore) {
            totalpoints += 3;
        } else if (ourScore === oppScore) {
            totalpoints += 1;
        }
    }
    return totalpoints;
}