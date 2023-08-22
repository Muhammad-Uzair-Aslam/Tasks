var passwords=["test","test!1214","newPass2422@","testPassword23","examPle#242"];
var newPassword=[];
var result=passwords.map((element)=>{
    var isCapital=false
    var isSmall=false
    var isSpecial=false
    for (let index = 0; index < element.length; index++) {
        const char = element[index];
        if(char>='a'&&char<='z')
        {
            isSmall=true;
        }
        if(char>='A'&&char<='Z')
        {
            isCapital=true;
        }
        if(char.charCodeAt()>=33  && char.charCodeAt() <= 47 || char.charCodeAt() >= 58 && char.charCodeAt() <= 64 || char.charCodeAt() >= 91 && char.charCodeAt() < 96)
    {
        isSpecial=true;
    }
    }
    if (element.length>8 &&isCapital&&isSmall&&isSpecial)
    {
        return true
    }
    return false
    }
)
console.log(result)