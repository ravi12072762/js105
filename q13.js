arr= [35, 29, 89, 95, 20, 76, 48, 17, 90, 33];

for(i=0 ; i<arr.length ; i++){
    if(arr[i]<40){
        arr[i]=arr[i] + 20
    }
    if(arr[i]>90){
        arr[i]=90
    }
}
console.log(arr)
