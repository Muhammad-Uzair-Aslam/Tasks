var user=[];
function onSubmit()
{
    var username=document.getElementById("name").value;
    var useremail=document.getElementById("email").value;
    var usernumber=document.getElementById("phone").value;
    var users={
        Name:username,
        Email:useremail,
        PhoneNumber:usernumber
    }
    user.push(users);
    console.log(user);
    var result="";
    for (let index = 0; index < user.length; index++) {
        const element = user[index];
        console.log(element);
        result=result + `<div> <h1>Name:${element.Name}</h1><p>Email:${element.Email}</p><span>Phone:${element.PhoneNumber}</span></div>`

    }
    document.getElementById("result").innerHTML=result;
}