let inp1=document.querySelector("#input1");
let inp2=document.querySelector("#input2");
let val;
let btn1=document.querySelector("#b1");
let btn2=document.querySelector("#b2");
let btn3=document.querySelector("#versa");
let para1=document.querySelector("#p1");
let para2=document.querySelector("#p2");
let t1=document.querySelector("#p1");
let t2=document.querySelector("#p2");
let sel1=document.querySelector("#sel1");
let sel2=document.querySelector("#sel2");
    btn1.addEventListener("click",function(){
        if(sel1.value==="cm"&&sel2.value==="in")
        {
            val=inp1.value*0.393701;
            inp2.value=val;
        }
        else if(sel1.value==="in"&&sel2.value==="cm")
        {
            val=inp1.value*2.54;
            inp2.value=val;
        }
        else if(sel1.value==="mili"&&sel2.value==="in")
        {
            val=inp1.value/25.4;
            inp2.value=val;
        }
        else if(sel1.value==="in"&&sel2.value==="mili")
            {
                val=inp1.value*25.4;
                inp2.value=val;
            }
        else if(sel1.value==="m"&&sel2.value==="ft")
        {
            val=inp1.value*3.28;
            inp2.value=val;
        }
        else if(sel1.value==="ft"&&sel2.value==="m")
        {
            val=inp1.value*0.3048;
            inp2.value=val;
        }
        else if(sel1.value==="mile"&&sel2.value==="km")
        {
            val=inp1.value*1.609;
            inp2.value=val;
        }
        else if(sel1.value==="km"&&sel2.value==="mile")
        {
            val=inp1.value*0.621;
            inp2.value=val;
        }
        else if(sel1.value==="in"&&sel2.value==="m")
        {
            val=inp1.value*0.0254;
            inp2.value=val;
        }
        else if(sel1.value==="in"&&sel2.value==="mile")
        {
            val=inp1.value/63360;
            inp2.value=val;
        }
        else if(sel1.value==="in"&&sel2.value==="km")
        {
            val=inp1.value*0.0000254;
            inp2.value=val;
        }
        
        else if(sel1.value==="mili"&&sel2.value==="cm")
        {
            val=inp1.value/10;
            inp2.value=val;
        }
        else if(sel1.value==="mili"&&sel2.value==="ft")
        {
            val=inp1.value*0.003281;
            inp2.value=val;
        }
        else if(sel1.value==="mili"&&sel2.value==="m")
        {
            val=inp1.value/1000;
            inp2.value=val;
        }
        else if(sel1.value==="mili"&&sel2.value==="mile")
        {
            val=inp1.value/1609344;
            inp2.value=val;
        }
        else if(sel1.value==="mili"&&sel2.value==="km")
        {
            val=inp1.value/1000000;
            inp2.value=val;
        }
        else if(sel1.value==="cm"&&sel2.value==="mili")
        {
            val=inp1.value*10;
            inp2.value=val;
        }
        else if(sel1.value==="cm"&&sel2.value==="ft")
        {
            val=inp1.value/30.48;
            inp2.value=val;
        }
        else if(sel1.value==="cm"&&sel2.value==="m")
        {
            val=inp1.value/100;
            inp2.value=val;
        }
        else if(sel1.value==="cm"&&sel2.value==="mile")
        {
            val=inp1.value*0.0000062137;
            inp2.value=val;
        }
        else if(sel1.value==="cm"&&sel2.value==="km")
        {
            val=inp1.value*100000;
            inp2.value=val;
        }
        else if(sel1.value==="ft"&&sel2.value==="in")
        {
            val=inp1.value*12;
            inp2.value=val;
        }
        else if(sel1.value==="ft"&&sel2.value==="cm")
        {
            val=inp1.value*30.48;
            inp2.value=val;
        }
        else if(sel1.value==="ft"&&sel2.value==="mili")
        {
            val=inp1.value*304.8;
            inp2.value=val;
        }
        else if(sel1.value==="ft"&&sel2.value==="km")
        {
            val=inp1.value/3280.84;
            inp2.value=val;
        }
        else if(sel1.value==="m"&&sel2.value==="in")
        {
            val=inp1.value*39.37;
            inp2.value=val;
        }
        else if(sel1.value==="m"&&sel2.value==="mm")
        {
            val=inp1.value*1000;
            inp2.value=val;
        }
        else if(sel1.value==="m"&&sel2.value==="cm")
        {
            val=inp1.value*100;
            inp2.value=val;
        }
        else if(sel1.value==="m"&&sel2.value==="ft")
        {
            val=inp1.value*3.28084;
            inp2.value=val;
        }
        else if(sel1.value==="m"&&sel2.value==="mile")
        {
            val=inp1.value*0.000621371;
            inp2.value=val;
        }
        else if(sel1.value==="m"&&sel2.value==="km")
        {
            val=inp1.value/1000;
            inp2.value=val;
        }
        else if(sel1.value==="mile"&&sel2.value==="in")
        {
            val=inp1.value*63,360;
            inp2.value=val;
        }
        else if(sel1.value==="mile"&&sel2.value==="mili")
        {
            val=inp1.value*1609344;
            inp2.value=val;
        }
        else if(sel1.value==="mile"&&sel2.value==="cm")
        {
            val=inp1.value*160934.4;
            inp2.value=val;
        }
        else if(sel1.value==="mile"&&sel2.value==="ft")
        {
            val=inp1.value*5280;
            inp2.value=val;
        }
        else if(sel1.value==="mile"&&sel2.value==="m")
        {
            val=inp1.value*1609.34;
            inp2.value=val;
        }
        else if(sel1.value==="mile"&&sel2.value==="Km")
        {
            val=inp1.value*1.609;
            inp2.value=val;
        }
        else if(sel1.value==="km"&&sel2.value==="in")
        {
            val=inp1.value*39370.079;
            inp2.value=val;
        }
        else if(sel1.value==="km"&&sel2.value==="mili")
        {
            val=inp1.value*1000000;
            inp2.value=val;
        }
        else if(sel1.value==="km"&&sel2.value==="cm")
        {
            val=inp1.value*100000;
            inp2.value=val;
        }
        else if(sel1.value==="km"&&sel2.value==="m")
        {
            val=inp1.value*1000;
            inp2.value=val;
        }
        else if(sel1.value==="km"&&sel2.value==="m")
        {
            val=inp1.value*0.621371;
            inp2.value=val;
        }
        else if(sel1.value==="km"&&sel2.value==="ft")
        {
            val=inp1.value*3280.84;
            inp2.value=val;
        }
        else if(sel1.value===""&&sel2.value===""){
            alert("Enter Data First");
        }
        else if(inp1.value===""&&inp2.value===""){
            alert("Enter Data First");
        }
    })

    
btn2.addEventListener("click", function(){
    inp1.value="";
    inp2.value="";
})

// let n=0;

// btn1.addEventListener("click", function(){
//     val=inp1.value*25.4;
//     inp2.value=val;
// })
// btn2.addEventListener("click", function(){
//     inp1.value="";
//     inp2.value="";
// })
// btn3.addEventListener("click", function(){
//     if(n==0)
//     {
//         let temp = para1.textContent;
//     para1.textContent = para2.textContent;
//     para2.textContent = temp;  
//     inp1.value="";
//     inp2.value="";
//     btn1.addEventListener("click", function(){
//         val=inp1.value/25.4;
//         inp2.value=val;
//     })  
//     n=1;
//     }
//     else{
//         let temp = para1.textContent;
//     para1.textContent = para2.textContent;
//     para2.textContent = temp;  
//     inp1.value="";
//     inp2.value="";
//         btn1.addEventListener("click", function(){
//             val=inp1.value*25.4;
//             inp2.value=val;
//         })
//         n=0;
//     }
    
    
// })