var img=document.getElementById("img");
console.log(img.src);
function getNext(){
if(img.src=="file:///F:/web%20and%20app%20development/assignment%208/assets/sangga-rima-roman-selia-LWfFfA5U5z8-unsplash.jpg")
{
    img.src="./assets/a.jpg";
    console.log(img.src)
}
else if(img.src=="file:///F:/web%20and%20app%20development/assignment%208/assets/a.jpg")
{
    img.src="./assets/b.jpg";
    console.log(img.src)

}
else if(img.src=="file:///F:/web%20and%20app%20development/assignment%208/assets/b.jpg")
{
    img.src="./assets/li-guan-SpOQBt4eV9o-unsplash.jpg";
    console.log(img.src)
}
else
{
    img.src="./assets/jonathan-marchal-upxanu55w80-unsplash.jpg";
}
}
function getPrevious()
{
    if(img.src=="file:///F:/web%20and%20app%20development/assignment%208/assets/a.jpg")
    {
        img.src="./assets/sangga-rima-roman-selia-LWfFfA5U5z8-unsplash.jpg"
    }
    else if(img.src=="file:///F:/web%20and%20app%20development/assignment%208/assets/b.jpg")
    {
        img.src="./assets/a.jpg";
        console.log(img.src)
    }
    else if(img.src=="file:///F:/web%20and%20app%20development/assignment%208/assets/li-guan-SpOQBt4eV9o-unsplash.jpg")
    {
        img.src="./assets/b.jpg";
        console.log(img.src)
    
    }
    else if(img.src=="file:///F:/web%20and%20app%20development/assignment%208/assets/jonathan-marchal-upxanu55w80-unsplash.jpg")
    {
        img.src="./assets/li-guan-SpOQBt4eV9o-unsplash.jpg";
        console.log(img.src)
    }
    else{
        img.src="./assets/jonathan-marchal-upxanu55w80-unsplash.jpg";
    }
    
    
}