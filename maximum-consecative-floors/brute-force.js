var maxConsecutive = function(bottom, top, special) {
    let specialSet= new Set(special);
    let max=0,counter=0;
    for (let index = bottom; index <=top; index++) {
        if(specialSet.has(index)){
            max=Math.max(max,counter);
            counter=0;
        }
        else{
            counter++;
        }
    }
     max=Math.max(max,counter);
    return max
};
//let bottom=2,top=9,special=[4,6];
let bottom = 6, top = 8, special = [7,6,8]
console.log(maxConsecutive(bottom,top,special))