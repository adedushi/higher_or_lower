!function(){"use strict";!function(){var e=class{constructor(e,t,r,i,c){this.id=e,this.name=t,this.image=r,this.price=i,this.URL=c}generatePlaceholderPrice(e){let t=e+e*(Math.random()*(2*Math.round(Math.random())-1))*.2;return t=e<10?Math.ceil(t+1):e<100?10*Math.ceil(t/10):e<1e3?50*Math.ceil(t/50):100*Math.ceil(t/100),Math.abs(e-t)>1.01?t:this.generatePlaceholderPrice(e)}assignPlaceholderPrice(){this.placeholderPrice=this.generatePlaceholderPrice(this.price)}guessHigher(){return this.price>this.placeholderPrice}guessLower(){return this.price<this.placeholderPrice}},t=[6514052,6514055,6553101,6491295,6537363,6450247,6482022,6501902,6537422,6537371,6558847,6507324,6531621,6471969,6191309,6421866,6513002,6513e3,6410013,6512370,6530134,6420141,6420142,6529899,6325628,6419631,6447499,6323156,6427952,6492267,6467055,6397576,6397590,6546221,6546219,6443500,6360748,6468484,6447149,6511565,6488940,6555625,6447922,4943603,6447914,6418524,6447911,4299700,6519870,6411917,6356535,6454256,6472669,6471418,6427076,6488911,6426700,6213287,6514475,6511782,6567807,6441423,6550180,6461328,6454736,6544304,6454733,6377587,6564054,6427739,6344419,6505155,6187502,6361926,6535019,5255027,6411140,6464936,6762924,6519391,6530352,6550445,6540329,6514441,6551564,6473099,6551163,6545966,6550535,6522416,6323759,6546137,6548200,6364719,5852906,6494388,6213101,6473808];const r=document.getElementById("title"),i=document.querySelector(".buttons"),c=document.querySelector("#start"),o=document.querySelector("#product-display"),s=document.querySelector("#placeholder-price"),n=document.querySelector("#higher"),l=document.querySelector("#lower"),d=document.querySelector("#current-score"),a=document.querySelector("#high-score"),u=document.querySelector("#feedback"),h=document.querySelector("#next"),p=document.querySelector("#product-link"),y=document.querySelector("#modal-open"),m=document.querySelector("#modal-close"),g=document.querySelector("#modal-container");let b=localStorage.getItem("highScore")||0;const L=[],S=["Correct!","Well done!","Nice one!"],f=["Close one!","Sorry!","Almost!"];class P{constructor(e){this.product=e,this.score=0}static generateURL(){let e=P.selectProduct();for(;L.indexOf(e)>-1;)e=P.selectProduct();return`https://api.bestbuy.com/v1/products(sku=${e})?apiKey=FTJXEwF95489m9I5HzWazZ0l&sort=name.asc&show=name,image,salePrice,url,sku&format=json`}static selectProduct(){return t[Math.floor(Math.random()*t.length)]}displayProduct(){c.style.display="none",u.innerHTML="",p.style.visibility="hidden";let e=document.createElement("h3");e.setAttribute("id","product-name"),e.innerHTML=this.product.name;let t=document.createElement("img");for(t.setAttribute("id","product-image"),t.src=this.product.image,s.innerHTML=`$${this.product.placeholderPrice}.00`;o.firstChild;)o.removeChild(o.firstChild);o.append(e),o.append(t)}disableButtons(){n.disabled=!0,l.disabled=!0,h.disabled=!0,h.innerHTML="Loading"}enableButtons(){n.disabled=!1,l.disabled=!1,"block"===h.style.display&&(h.disabled=!1,h.innerHTML="Next")}async fetchProduct(t){t.preventDefault(),this.disableButtons();let r=0;for(;r<2;){try{let t=await fetch(P.generateURL());if(t.ok){let r=await t.json(),i=r.products[0].sku,c=r.products[0].name,o=r.products[0].image,s=r.products[0].salePrice,n=r.products[0].url;return this.product=new e(i,c,o,s,n),this.product.assignPlaceholderPrice(),this.displayProduct(),this.enableButtons(),this.changeButtons()}}catch(e){}r+=1,r<2&&await new Promise((e=>setTimeout(e,100)))}this.enableButtons()}guessHigher(){this.product.price>this.product.placeholderPrice?this.correct():this.incorrect()}guessLower(){this.product.price<this.product.placeholderPrice?this.correct():this.incorrect()}correct(){this.score++,this.updateHighScore(),L.push(this.product.id),d.innerHTML=`Score: ${this.score}`,u.innerHTML=`${S[Math.floor(Math.random()*S.length)]} The actual retail price is $${this.product.price.toFixed(2)}`,p.href=`${this.product.URL}`,p.style.visibility=""}incorrect(){this.score=0,L.splice(0,L.length),d.innerHTML=`Score: ${this.score}`,u.innerHTML=`${f[Math.floor(Math.random()*f.length)]} The actual retail price is $${this.product.price.toFixed(2)}`,p.href=`${this.product.URL}`,p.style.visibility=""}updateHighScore(){this.score>parseInt(b)&&(localStorage.setItem("highScore",this.score),b=localStorage.getItem("highScore")),a.innerHTML=`High Score: ${b}`}changeButtons(){"none"===h.style.display?(h.style.display="block",n.style.display="none",l.style.display="none"):(h.style.display="none",n.style.display="block",l.style.display="block")}}let M=new P;document.addEventListener("DOMContentLoaded",M.updateHighScore.bind(M)),c.addEventListener("click",M.fetchProduct.bind(M)),c.addEventListener("click",(function(){document.querySelector(".game").style.borderColor="orange",document.querySelector(".product").style.borderColor="orange",document.querySelector(".main-content").style.visibility="visible",i.style.visibility="visible",n.style.display="block",l.style.display="block",c.style.display="hidden",g.style.display="none"})),document.addEventListener("DOMContentLoaded",(function(){g.style.display="flex"})),y.addEventListener("click",(function(){g.style.display="flex"})),m.addEventListener("click",(function(){g.style.display="none"})),r.addEventListener("click",(function(){window.location.href="/"})),n.addEventListener("click",M.guessHigher.bind(M)),n.addEventListener("click",M.changeButtons.bind(M)),l.addEventListener("click",M.guessLower.bind(M)),l.addEventListener("click",M.changeButtons.bind(M)),h.addEventListener("click",M.fetchProduct.bind(M))}()}();
//# sourceMappingURL=main.js.map