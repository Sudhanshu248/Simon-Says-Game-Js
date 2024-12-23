let a = "nitin", b ="tinin" ;
function anagram(a,b){
    const string1 = a.split("").sort().join();
   const string2 = b.split("").sort().join();
   if(string1===string2){
    console.log("This is anagram")
   }else{
    console.log("This is not anagram")
   }
};
anagram();