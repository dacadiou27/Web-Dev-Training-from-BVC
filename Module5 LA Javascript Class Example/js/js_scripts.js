
        function square(a, b) {
            return a * b;
        }

        function display() {
            var number = document.getElementById('number1').value;
            var z = square(number, number);
            var w = square(number, number) * number;
            document.getElementById("result1").innerHTML = " Square of " + number + " = " + z;
            document.getElementById("result2").innerHTML = " Cube of " + number + " = " + w;
        }

        function displayOnConsole(){
            var  number = 4;
            var z = square(number, number);
            var w = square(number, number) * number;
             return "Square of " + number + " = " + z + " and " + "Cube of " + number + " = " + w;
        }

        console.log(displayOnConsole());