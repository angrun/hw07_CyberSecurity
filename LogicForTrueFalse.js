function trueFalseFunction(summa) {

    var funny = new RegExp("^[01]*$");

    if (/\D/.test(summa) || summa.length !== 27) {
        // document.write("Something is wrong with the whole input");

        return "Invalid Message";

    }

    var summaPrefix = summa.substring(0, 2);
    // document.write(" prefix is" + summaPrefix);

    var numbertoCheck = parseInt(summa.substring(0, 2));


    if (numbertoCheck < 7 || numbertoCheck > 49) {

        // document.write(" Something is wrong with prefix");
        return "Invalid Message";

    }


    summa = summa.substring(2, 24);
    // document.write(" Summa to check" + summa);

    //Checking that user's input is valid. MESSAGE IS
    if (/\D/.test(summa) || !funny.test(summa)) {

        // document.write(" Something is wrong with summa");
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
    // document.write(count);
    // document.write(count === numbertoCheck);

    return (count === numbertoCheck);


}

