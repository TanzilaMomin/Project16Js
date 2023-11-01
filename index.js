const arr = ["Football","Cricket","Hockey","Kho-Kho","VolleyBall"];

const navDiv = document.getElementById("nav");

arr.forEach((item)=>{
    const btn=document.createElement("button");
    btn.innerText=item;
    navDiv.appendChild(btn);
})

const Football = ["Ball","Helmet","Gloves","Shoes","Thigh","Knee pads"];
  const olFootball = document.createElement("ol");
     Football.forEach((item)=>{
        const li=document.createElement("li");
        li.innerText=item;
        li.setAttribute("type","a");
        olFootball.appendChild(li);
     })
     const mainDiv=document.getElementById("main");
     mainDiv.appendChild(olFootball);

     const Cricket = ["Bat","Helmet","Thigh pads","Batting golves"];
     const olCricket = document.createElement("ol");
     Cricket.forEach((item)=>{
        const li=document.createElement("li");
        li.innerText=item;
        li.setAttribute("type","A");
        olCricket.appendChild(li);
     })
     mainDiv.appendChild(olCricket);

     const Hockey = ["Helmet","Shoulder","Elbow pads","Jock"];
     const olHockey = document.createElement("ol");
     Hockey.forEach((item)=>{
      const li=document.createElement("li");
      li.innerText=item;
      li.setAttribute("type","i");
      olHockey.appendChild(li);
     })
     mainDiv.appendChild(olHockey);

     const KhoKho = ["Sports T-shirts","POst","Strings","Lime powder"];
     const olKhoKho = document.createElement("ol");
     KhoKho.forEach((item)=>{
      const li=document.createElement("li");
      li.innerText=item;
      li.setAttribute("type","I");
      olKhoKho.appendChild(li);
     })
     mainDiv.appendChild(olKhoKho);

     const Volleyball = ["Knee","Shoes","Braces","Ball"];
     const olVolleyball = document.createElement("ol");
     Volleyball.forEach((item)=>{
      const li=document.createElement("li");
      li.innerText=item;
      li.setAttribute("type","1");
      olVolleyball.appendChild(li);
     })
     mainDiv.appendChild(olVolleyball);