//Method for true/false output

function trueFalseFunction(summa) {

    var checkSymbol = new RegExp("^[01]*$");

    if (/\D/.test(summa) || summa.length !== 27) {

        return "Invalid Message";

    }

    var numbertoCheck = parseInt(summa.substring(0, 2));


    //Checking that the AA are correct
    if (numbertoCheck < 7 || numbertoCheck > 49) {

        return "Invalid Message";

    }


    summa = summa.substring(2, 27);


    //Checking that user's input BBBB.. is valid
    if (/\D/.test(summa) || !checkSymbol.test(summa)) {

        return "Invalid Message";

    }

    var count = 0;
    var check = true;

    //General loop
    for (k = 0; k < summa.length; k++) {


        //Rounds with COPYCAT
        if (k < 5) {

            if (k === 0) {
                if (summa.charAt(k) === '1') {
                    count += 2;
                } else {
                    count += 3;
                }
            }

            else if (summa.charAt(k) === '1' && summa.charAt(k - 1) === '0') {
                count -= 1;

            }


            else if (summa.charAt(k) === '1' && summa.charAt(k - 1) === '1') {
                count += 2;
            }

            else if (summa.charAt(k) === '0' && summa.charAt(k - 1) === '1') {
                count += 3;
            }

        }

        //Rounds with ALWAYS CHEAT
        if (k >= 5 && k < 9) {

            if (summa.charAt(k) === '1') {
                count -= 1;
            }
        }

        //Rounds with COOPERATE WOMAN
        if (k >= 9 && k < 13) {
            if (summa.charAt(k) === '1') {
                count += 2;
            } else {
                count += 3;
            }
        }

        //Rounds with GRUDGER
        if (k >= 13 && k < 18) {

            if (check === true) {
                if (summa.charAt(k) === '1') {
                    count += 2;
                } else {
                    count += 3;
                    check = false;
                }

            }

            else if (check === false) {
                if (summa.charAt(k) === '1') {
                    count -= 1;

                }

            }


        }

        //Rounds with DETECTIVE
        if (k >= 18 && k < 22) {

            if (k === 18 || k === 20 || k === 21) {

                if (summa.charAt(k) === '1') {
                    count += 2;
                }

                if (summa.charAt(k) === '0') {
                    count += 3;

                }

            }

            if (k === 19) {
                if (summa.charAt(k) === '1') {
                    count -= 1;
                }
            }
        }

        if (k >= 22) {

            if (summa.charAt(18) === '0' || summa.charAt(19) === '0' || summa.charAt(20) === '0') {


                if (summa.charAt(k) === '1' && summa.charAt(k - 1) !== '1') {
                    count -= 1;
                }

                else if (summa.charAt(k) === '1' && summa.charAt(k - 1) === '1') {
                    count += 2;
                }

                else if (summa.charAt(k) === '0' && summa.charAt(k - 1) === '1') {
                    count += 3;
                }


            } else {

                if (summa.charAt(k) === '1') {
                    count -= 1;
                }


            }

        }

    }


    return (count === numbertoCheck);

}

