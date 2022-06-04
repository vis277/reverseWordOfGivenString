 let s="i.like.this.program.very.much";

 function reverse(s){
     let arr=s.split('.');
     console.log(arr);
     let blank="";
     let blank2="";
     for(let i=arr.length-1;i>=0;i--){
        blank=blank+arr[i]+".";
     }
    let arr2=blank.split('');
    console.log("LN14",arr2);
    arr2.length=arr2.length-1;
    console.log("LN14",arr2);
    for(let i=0;i<arr2.length;i++){
        blank2=blank2+arr2[i];
     }
     return blank2;
 }

 console.log(reverse(s));
