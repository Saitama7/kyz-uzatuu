(()=>{const e=new URLSearchParams(location.search),t=document.querySelector(".back-header"),n=t.querySelector("#name"),o=t.querySelector("#sex"),a=e.get("name"),c=e.get("sex"),s="kg"===e.get("lng"),l=document.getElementById("text-1"),d=document.getElementById("text-2"),m=document.getElementById("text-3"),i=document.getElementById("footer-text"),r=document.getElementById("front-address"),x=document.getElementById("invite"),y=document.getElementById("card"),g=document.getElementById("pic-click");if(a&&!s&&(a.length>10&&(t.style.fontSize="28px",t.style.lineHeight="48px"),n.textContent=a),c&&!s)switch(c.toLowerCase()){case"male":o.textContent="Дорогой";break;case"female":o.textContent="Дорогая";break;case"both":o.textContent="Дорогие","Гость"===n.textContent&&(n.textContent="Гости")}s&&(y.classList.add("caveat"),g.classList.add("caveat"),o.textContent="Кымбаттуу туугандар",n.textContent="жана достор",l.textContent="Биздин сүйүктүү Эльвира кызыбыздын “Кыз узатуу” тоюна чакырабыз. Той 2024-жылдын 30-августунда саат 16:00дө Resto Son-Kol ресторанында өтөт.",d.textContent="Сиздердин катышууңуздар биз үчүн чоң сыймык жана кубаныч болот. Сиздер менен бул маанилүү күндү, салт-санаага толгон, кубаныч жана бакытка бөлөнгөн учурду бөлүшүү биз үчүн абдан жагымдуу болот.",m.textContent="Дареги: 7-апрель көчөсү, 1д/1",r.textContent="7-апрель көчөсү, 1д/1",i.innerHTML="<span>Урматтоо менен, <br /> Мирзада</span>",x.textContent="Кыз yзатууга чакыруу",g.innerHTML='Сүрөттү басыңыз<span class="hint-icon"></span>'),$("#card").flip(),setTimeout(()=>{$("#main").css({display:"block"}),$("#loader").css({display:"none"})},2e3)})(),(()=>{const e=document.getElementById("myAudio");$("#card").click(()=>{e.volume=.2,e.play(),isPlaying=!0,$("#form").slideDown(5e3),$("#animations").css({display:"block"})})})();