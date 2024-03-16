document.getElementById("btn").addEventListener("click",()=>
{
    console.log("hi");
    let div=document.createElement("div");
    let form="";
    for(let i=1;i<=parseInt(document.getElementById("int").value);i++)
    form+=`<div class="col-lg-3 col-mg-4 col-sm-6 d-flex flex-column"><lable>Username:</lable>
    <input type="text"/>
    <lable>Password:</lable>
    <input type="password"/>
    <input value="submit" type="button"/></div>`;
    div.setAttribute("class","row");
    div.innerHTML=form;
    document.body.appendChild(div);
});