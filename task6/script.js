// // let marks={rohan:20,ali:30,uzair:10}
// // console.log(marks)
// // // for(let i=0;i<Object.keys(marks).length;i++)
// // // {
// // //     console.log("the marks of "+ Object.keys(marks)[i]+" are ="+marks[Object.keys(marks)[i]])
// // // }


// // for(let i in marks)
// // {
// //    console.log("the marks of "+ i+" are "+marks[i])
// // }

// // // let cn=4;
// // // let input=prompt("please Enter correct Number");
// // // while(input!=cn)
// // // {
// // //     console.log("try again")
// // // }
// // function mean(a,b,c,d,e)
// // {
// //     let mean=(a+b+c+d+e)/5
// //     console.log(mean)
// // }
// // let v=5;
// // let w=6;
// // let x=5;
// // let y=6;
// // let z=3;
// // mean(v,w,x,y,z)


// const func = ()=>{
//     let arr = ['Apple','Mango','Grapes','Banana']
//     for(let x=0; x<arr.length;x++){

//         console.log('Arr :>> ', arr[x]);
        
        
//         }
// }
let arr = [];
function func(){
 
    let value = document.getElementById('fruits').value;
    console.log('value :>> ', value);
    arr.push(value)
    console.log('arr :>> ', arr);
    document.getElementById('heading').innerHTML="Fruits List"
    document.getElementById('list').innerHTML = "";

   for(let x = 0; x<arr.length;x++){

       document.getElementById('list').innerHTML += `<li class=''>${arr[x]}</li>`;
    }
    
}
