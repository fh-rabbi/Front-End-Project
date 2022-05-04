/*JavaScript document,write,getElementById,querySelector,for,var,let,const,add,style,addEventListener,classList,parentElementchildren,nextElementSibling,previousElementSibling,querySelectorAll,getElementsByTagName,createElement,createTextNode,appendChild,removeChild,insertBefore,function,innerHTML,Math,sqrt,pow,random,floor,ceilmax,date new Date(),object,array,date.get FullYear,Month,Hours,MinutesDay,constractor,pop,push,shift,unshiftsplice,slice,sort,break,continue,while,doif,else if,else,switch,case,default,Number,parseInt,parseFloat,toString()toFixed,toPrecision,length,charAt,toUppercase,concat,inside,Literals,name,Names,names,age,roll,concat,StudentsInfo,Students,student,info,var,let,const,return,console,log,fetch,axios,method,ajax,Xml http requestevent:onload(),onerror()property: response,responseText,responseType,responseUrl,status,statusTextfunction: open(),send(),setRequestHeader()methods:get,post,put,patch,deleteAPI: https://jsonplaceholder.typicode.com/posts,localStorage,setItem(),getItem,sessionStorage*/
var sidebarMenu =document.querySelector(".sidebar-nav");
function showSidebar(){
   sidebarMenu.style.left="0";
}

function hideSidebar(){
   sidebarMenu.style.left="-310px";
}

var menuButton =document.querySelector(".menu");
menuButton.addEventListener("click",function(){
   // alert("hi"); 
   showSidebar();
})




