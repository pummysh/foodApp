async function getData(url){

    let res=await fetch(url);
    let data =res.json();

    return data;

}

// function getData(url){
//     fetch(url).then((res)=>{
        
//     let data= res.json();
//     console.log(data);
//     return data;

//     }).then((res)=>{
//         console.log(res);
//     })
// }

function append(data,container){
    // console.log(data.meals);
    container.innerHTML=null;
    let a=data.meals;
    console.log(a);

    a.forEach((m) => {
    //    console.log(m.idMeal);


    let div=document.createElement('div');
    div.id="di";
    let p=document.createElement('p');
    let area=document.createElement('p');
    let cat=document.createElement('p');
      

    p.innerText=m.strMeal;
    area.innerText=m.strArea;
    cat.innerText="Category :"+" "+m.strCategory;
    
    let img=document.createElement('img');
    img.src=m.strMealThumb;

    div.append(img,p,area,cat);

    container.append(div);

    });

}


export{append,getData}