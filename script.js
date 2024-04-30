var btn_uiux = document.getElementById("btn-uiux");
var btn_web = document.getElementById("btn-web");
var btn_mobile = document.getElementById("btn-mobile");
var uiux = document.getElementById("uiux");
var web = document.getElementById("web");
var mobile = document.getElementById("mobile");

btn_uiux.addEventListener('click', () => {
    uiux.style.display='flex';
    uiux.style.justifyContent='space-around'
    web.style.display='none';
    mobile.style.display='none';
});

btn_web.addEventListener('click', ()=> {
    uiux.style.display='none';
    web.style.display='flex';
    web.style.justifyContent='space-around'
    mobile.style.display='none';
});

btn_mobile.addEventListener('click', ()=> {
    uiux.style.display='none';
    web.style.display='none';
    mobile.style.display='flex';
    mobile.style.justifyContent='space-around'
});