function calculateAverage()
{
    var number=parseInt(document.getElementById("number1").value);
    var number1=parseInt(document.getElementById("number2").value);
    var number2=parseInt(document.getElementById("number3").value);
    var number3=parseInt(document.getElementById("number4").value);
    var number4=parseInt(document.getElementById("number5").value);
    var number5=parseInt(document.getElementById("number6").value);
    var total=number+number1+number2+number3+number4+number5;
    document.getElementById("span").innerHTML=`Total Marks =${total}`
    var percentage=(total/600)*100;
    document.getElementById("span1").innerHTML=`Percentage =${percentage}`
    if(percentage>90)
    {
        document.getElementById("span2").innerHTML=`Congratulation You got ${percentage} percent Marks and this is excellent percentage. Keep it up and continue Hard working`
    }
    else if(percentage>80)
    {
        document.getElementById("span2").innerHTML=`Congratulation You got ${percentage} percent marks and this is very good percentage. Keep it up `
    }
    else if(percentage>70)
    {
        document.getElementById("span2").innerHTML=`You got ${percentage} percent marks this is good percentage but you need to improve your percentage and need hard work`
    }
    else if(percentage>60)
    {
        document.getElementById("span2").innerHTML=`You got ${percentage} percent marks this is average percentage .You need to work really hard `
    }
    else if(percentage>50)
    {
        document.getElementById("span2").innerHTML=`You got ${percentage} percent marks this is not percentage .You need to work really hard `
    }
    else if(percentage>40)
    {
        document.getElementById("span2").innerHTML=`You got ${percentage} percent marks this is very poor percentage .You need to work really hard `
    }
    else if(percentage>0){
        document.getElementById("span2").innerHTML=`Sorry to say that you are fail .You Need to repeat your class `

    }
    else
    {
        document.getElementById("span2").innerHTML=`You have not Entered any marks yet .Please Enter Marks`
    }
}    