//1
let num1 = Boolean(Number('10')) + 1; //2
    console.log(num1);
let num2 = 'sub' + Number(false); //sub0
    console.log(num2);
let num3 = 16 * '91'; // 1456
    console.log(num3);
let num4 = true - 70; //-69
    console.log(num4);
let num5 = Number(1 + String(1)) + 1; //12
    console.log(num5);
//2
let hours = prompt('Введите количество часов:');
let seconds = hours * 3600;
alert(seconds);

//3
let num = 1;
num += 12;
num -= 14;
num *= 5;
num /= 7;
++num;
--num;
alert(num);