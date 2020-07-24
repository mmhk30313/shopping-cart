function formatNumberWithCommas(x) {
    return x.toString().replace(/B(?=(d{3})+(?!d))/g, ",");
}
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

//Kaj kore....
// const number = "23,4555,643";

//Kaj kore....
let num = 234555643;
let number = num.toString();

//function diye kaj kore...
// console.log(formatNumberWithCommas(number));
// console.log(formatNumberWithCommas(number.toString()));
console.log(typeof(number), number);
//.replace(/,/g, "") eta string er all comma(,) vanish kore string return kore...
console.log(number.replace(/,/g, ""));
console.log(typeof number.replace(/,/g, ""));
//Number(any integer value) ja number(int,float) return kore
console.log(Number(parseInt(number.replace(/,/g, ""))).toLocaleString('en-IN'));
//.toLocaleString('en-IN') number ke string convert kore & 
//('en-US','bn-BD','en-IN') egula holo USA,Bangladesh & India er Tk er format...
console.log(typeof Number(parseInt(number.replace(/,/g, ""))).toLocaleString('en-IN'));
//.split('item1').join('item2') eta string er item1 ke remove kore 
//item1 jaygay item2 insert kore & string return kore...
console.log(Number(parseInt("1555874....584.4877,".split('.').join(""))));
console.log(typeof Number(parseInt("1555874....584.4877,".split('.').join(""))));
console.log(Number(parseInt("1555874....584.4877,".split('.').join(""))).toLocaleString("en-US"));
console.log(typeof Number(parseInt("1555874....584.4877,".split('.').join(""))).toLocaleString("en-US"));
console.log(Number(parseInt("8715,75897,5744".replace(/,/g, ""))).toLocaleString("bn-BD"));

//From any string, we have to find just number...
let st = "015e2rfdf11ds0arqe,8.af8/f[f[fqa]5[p-=`Kae8Mahdi";
let N = "";
for(var i=0;i<st.length;i++){
    if(parseInt(st[i])>-1){
        N += st[i];
        continue;
    }
}
console.log({st},{N});//for loop using...
console.log("st:",st.replace(/[^0-9]/g, ''));//short-cut using...
st = st.replace(/[^0-9]/g, '');
num = new Number(parseInt(st)).toLocaleString('en-IN');//Local number e conversion...
console.log({num});
st = "01.5e2rfdf11ds0arqe,8.af8/f[f[fqa]5.[p-=`K..a.e8.Mahdi587";//All dot(.) & number rakhte chai...
console.log("st:",st.replace(/[^0-9.]/g, ''));
N="";//First dot(.) rakhte chai...
let ck = true;
for(var i=0;i<st.length;i++){
    if(parseInt(st[i])>-1 || st[i]=='.'){
        if(st[i]!='.'){
            N +=st[i];
        }else{
            if(st[i]=='.' && ck){
                N += st[i];
                ck = false;
            }
        }
        //continue;
    }
}
console.log(typeof {N},{N});
console.log({st},"\nst:",st.replace(/[.](?=.*?\.)/g, ''));//short cut e last dot(.) rakhte chai...
var justOneDot = st.replace(/[.](?=.*?\.)/g, '');//look-ahead to replace all but last dot
var outStr = parseFloat(justOneDot.replace(/[^0-9.]/g,'')).toFixed(2); //parse as float and round to 2dp 
console.log({outStr});
// = 1234.57
//Object confusion...
let sn = new String('47774588');
let nm = new Number(47745888);
console.log(typeof sn,sn, typeof nm,nm);