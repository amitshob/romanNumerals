var romanNumerals = function(number) {

  var romanNum = new symbolNum();
  romanNum['I'] = 1;
  romanNum['V'] = 5;
  romanNum['X'] = 10;
  romanNum['L'] = 50;
  romanNum['C'] = 100;
  romanNum['D'] = 500;
  romanNum['M'] = 1000;

  var num = number.toString();

  num_array = num.split("");

  num_array = num_array.reverse();

  rom_unit = []; rom_tens = []; rom_hund =[]; rom_thou =[];

  if (num_array.length >= 1) {
    var unit = num_array[0]
      if (unit === 9) {
        rom_unit.push("IX")
      }
      }
    }
  }
  if ((num_array.length === 2) {
    var tens = num_array[1]
  }
  if (num_array.length === 3) {
    var hundreds = num_array[2]
  }
  // convert number to string
  // split()
  //  separate digits in 100s, 10s, units etc.....
 }

// output = "";
// roman = ["I", "IV", "V", "IX", "X", "XL", "L", "XC", "C", "CD", "D", "CM", "M"]
// nums = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000]
//
// for (var i = 0; i <nums.length; i++) {
//
//   if (number >= nums[i];
//     output += roman[i];
//     number -= nums[i];
//     i=0;
//   }
// }
//
// }
// return output;
