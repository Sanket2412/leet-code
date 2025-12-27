
// First Version of Add two numbers with Array
var getReminderAndQuotient=function(value)
{
    let rem=value % 10;
    let quotient= Math.floor(value / 10); 
    return {
        rem,
        quotient
    }
}

var addTwoNumbers= function(l1,l2){
    let sumArray=[];
    let reminder=0;
    for (let index = 0; index < l1.length || index < l2.length || reminder > 0; index++) {
        if(l1[index] && l2[index])
        {
            let sum=l1[index]+l2[index]+reminder;
            if(sum > 9)
            {
                const { rem,quotient  }=getReminderAndQuotient(sum);
                reminder=quotient;
                sumArray.push(rem);
            }
            else
            {
                reminder=0;
                sumArray.push(sum);
            }
        }
        else if(l1[index] || l2[index])
        {
            let sum= reminder + (l1[index] || l2[index]);
            if(sum > 9)
            {
                const { rem,quotient  }=getReminderAndQuotient(sum);
                reminder=quotient;
                sumArray.push(rem);
            }
            else
            {
                reminder=0;
                sumArray.push(sum);
            }
        }
        else
        {
            sumArray.push(reminder);
            reminder=0;
        }
        
    }
    return sumArray;
}
var l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
console.log("Returned Array",addTwoNumbers(l1,l2));