var defaultVal=document.querySelector('[name="profil_tipi"]')
console.log(defaultVal.value)


const handleChange=(x)=>{
    x.value==="dolu"?dolu_adim_bir():boru_adim_bir()
}

const dolu_adim_bir=()=>{
document.querySelector(".new_area").innerHTML=``
document.querySelector(".new_area").innerHTML=`
<div>
<div class="sectionTwo_box">
<p> Çap gir (mm) </p> 
<div style="background-color: rgb(214, 213, 213);">
<input type="number" id="my_value"/>
</div>
</div>
<button style="background-color:orange;height:2rem;margin:auto;width:100%" id="select_dolu">Seç</button></div>
`
document.querySelector("#select_dolu").addEventListener("click",()=>{
const my_value=document.querySelector("#my_value")
calculatingDolu(my_value.value)
}
)
}

const boru_adim_bir=()=>{
    document.querySelector(".new_area").innerHTML=``
    document.querySelector(".new_area").innerHTML=`
<div class="sectionTwo_left">
<div class="sectionTwo_box">
<p> Et Kalınlığı gir (mm) </p> 
<div style="background-color: rgb(214, 213, 213);">
<input type="number" id="et"/>
</div>
</div>
<div class="sectionTwo_box">
<p> Çap gir (mm) </p> 
<div style="background-color: rgb(214, 213, 213);">
<input type="number" id="my_value"/>
</div>
</div>
<button style="background-color:orange;height:2rem;margin:auto;width:100%" id="select_dolu">Seç</button></div>
`

document.querySelector("#select_dolu").addEventListener("click",()=>{
    const my_value=document.querySelector("#my_value")
    const et=document.querySelector("#et")
    calculatingBoru(my_value.value,et.value)
    }
    )

}


defaultVal.value==="dolu"?dolu_adim_bir():boru_adim_bir()


//calculating

const dataDolu=[
    {name:"10/14",min:15,max:30},
    {name:"8/12",min:30,max:50},
    {name:"6/10",min:30,max:50},
    {name:"5/8",min:40,max:60},
    {name:"5/6",min:60,max:70},
    {name:"4/6",min:60,max:75},
    {name:"4/5",min:100,max:150},
    {name:"3/4",min:110,max:150},
    {name:"2/3",min:120,max:200},
    {name:"1,5/2",min:150,max:300},
    {name:"1/2",min:250,max:500},
    {name:"1/1,3",min:300,max:550},
    {name:"0,75/1,25",min:400,max:600},
]

const dataBoru=[
{et:2,
 row:[{name:"14",min:20,max:100},{name:"10/14",min:100,max:400},{name:"8/12",min:400,max:600}]
},
{et:3,
    row:[{name:"14",min:20,max:40},{name:"10/14",min:40,max:80},{name:"8/12",min:80,max:200},{name:"6/10",min:200,max:600}]
   },
{et:4,
    row:[{name:"14",min:20,max:40},{name:"10/14",min:40,max:80},{name:"8/12",min:80,max:150},{name:"6/10",min:150,max:300},{name:"5/8",min:300,max:500},{name:"4/6",min:500,max:600}]
   }
   ,
{et:5,
    row:[{name:"14",min:20,max:40},{name:"10/14",min:40,max:80},{name:"8/12",min:80,max:100},{name:"6/10",min:100,max:200},{name:"5/8",min:200,max:300},{name:"4/6",min:300,max:600}]
   }
]



const calculatingDolu=(x)=>{
    document.querySelector("#selected_values").innerHTML="Tavsiye edilen dişler:"
const filtered=dataDolu.filter(item=>x>=item.min && x<=item.max)
filtered.map(item=>
    document.querySelector("#selected_values").innerHTML+=`
   <b>  ${item.name} </b>
    `   
    )
}

const calculatingBoru=(x,et)=>{
    document.querySelector("#selected_values").innerHTML="Tavsiye edilen dişler:"
    const filtered=dataBoru.filter(item=>item.et===+et)
    const secondFilter=filtered[0].row.filter(item=>x>=item.min && x<=item.max)
    console.log(filtered[0].row)
    secondFilter.map(item=>
        document.querySelector("#selected_values").innerHTML+=`
       <b>  ${item.name} </b>
        `   
        )
}


document.getElementById("siparis").addEventListener("click",()=>{
    window.open('mailto:osari@oztes.com.tr?subject=siparis')
    
})