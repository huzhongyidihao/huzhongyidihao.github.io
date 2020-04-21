let myimage=document.querySelector('img')
myimage.onclick=function(){
    let mysrc=myimage.getAttribute('src');
    if(mysrc==='images/BMW-i8-Roadster-hero.jpg')
    {
        myimage.setAttribute('src','images/haian.jpg');
        console.log('已经切换1')
    }
    else
    {
        myimage.setAttribute('src','images/BMW-i8-Roadster-hero.jpg');
        console.log('已经切换2')

    }

}


let mybutton=document.querySelector('button')
let myheading=document.querySelector('h1')

mybutton.onclick=function(){setUserName()}

function setUserName(){
    let myName=prompt('请输入你的名字')
    if(!myName||myName===null){setUserName();}
    else
    {
        localStorage.setItem('name',myName)
        myheading.textContent='Mozilla 酷毙了,'+myName
    }


}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName=localStorage.getItem('name')
    myheading.textContent='Mozilla 酷毙了,'+storedName;

}








