document.addEventListener("DOMContentLoaded",function() {
	//style
	let style = document.createElement("style");
	style.appendChild(document.createTextNode(""));
	document.head.appendChild(style);
	style.sheet.insertRule("#ku_btn{font-family: serif;opacity:0.8;position:fixed;bottom:20px;right:20px;color:#434343;font-size:40px;line-height:1;}", 0);
	style.sheet.insertRule("#ku_btn::before{content:'▼';}", 0);
	style.sheet.insertRule("#ku_btn.top::before{content:'▲';}", 0);
	style.sheet.insertRule("#ku_btn:hover{cursor:pointer;color:#777;transition:color 0.5s;}", 0);
	//button
	let btn = document.createElement("div");
	btn.id = "ku_btn";
	document.body.appendChild(btn);
	let _scroll = function() {
		if(typeof btn.dataset.scroll === "undefined" || btn.dataset.scroll === "0" ){
			let tst = /\btop\b/g.test(btn.className);
			if( window.scrollY>=window.innerHeight ){
				if(!tst){
					btn.className+=(btn.className!=""?" ":"")+"top";
					}
				}
			else if(tst) {
				btn.className=btn.className.replace(/\btop\b/g, "");
				}
			}
		};
	window.addEventListener('scroll',_scroll);
	btn.addEventListener("click",function(){
		let h1 = document.getElementsByTagName('h1');
		let h = h1.length>0?h1[0].offsetTop:window.innerHeight;
		let pos = window.scrollY>=h?0:h;
		let scrollDuration=500;
		btn.dataset.scroll=1;
		let scrollStep = (pos-window.scrollY)/(scrollDuration/15);
		let scrollInterval = setInterval(function(){
			if((scrollStep>0&&window.scrollY<pos)||(scrollStep<0&&window.scrollY>pos)){
				window.scrollBy(0,scrollStep);
				}
			else{
				window.scrollTo(0,pos);
				btn.dataset.scroll="0";
				_scroll();
				clearInterval(scrollInterval)
				};
			},15);
		});
	});





