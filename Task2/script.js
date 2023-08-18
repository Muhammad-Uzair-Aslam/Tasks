var arr=["ali","uzair","usman",3,13,false];

function addElementInArray()
{
    var para=document.getElementById("para");
    var element=document.getElementById("number").value;
     arr.unshift(element);
    document.getElementById("para").innerHTML="Element is added"
    console.log(arr)

}
function searchElementInArray()
{
    var search=document.getElementById("search").value;
    var result="not found the element";
    for (let index = 0; index < arr.length; index++) {
        const number = arr[index];
        if(number==search)
        {
            result=`element is found at index ${(index)}`;
        }

    }
    document.getElementById("para").innerHTML=result;

}