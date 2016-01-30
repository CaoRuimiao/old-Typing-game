window.onload=function(){
	var sence=document.getElementById('sence');
	var big=document.createElement('div');
	big.setAttribute('id','big');
	sence.appendChild(big);
	sence.onmousedown=function(e){
		e.preventDefault();
	};
	var COUNT=52;
	// var COUNT=2;
	for (var i = 0; i < COUNT; i++) {
		var small=document.createElement('div');
		var r;
		r=Math.floor(Math.random()*57)+65;
		while(r>90&&r<97){
			r=Math.floor(Math.random()*57)+65;
		}
		small.innerHTML=String.fromCharCode(r);
		small.setAttribute('class','small');
		big.appendChild(small);	
	}
	// ------------------删除式--------------
	// document.onkeydown=function(e){
	// 	// kaiguan=true;
	// 	var top=big.firstElementChild;
	// 	if (e.shiftKey) {
	// 		if (e.keyCode!==top.innerHTML.charCodeAt(0)) {return;}	
	// 	}else{
	// 		if(e.keyCode+32!==top.innerHTML.charCodeAt(0)) {return;}
	// 	}
	// 	big.removeChild(top);
	// 	if (big.children.length==0) {
	// 		alert(time.innerHTML);
	// 		location.reload();
	// 	}				
	// };

// ---------------计时器------------------
	var time=document.getElementById('time');
	var tishi=document.getElementById('tishi');
	var messages=document.getElementById('messages');
	var replay=document.getElementById('replay');
	var i=0,control=true,timerId;
	var hh=0,mm=0,ss=0,str;
	time.onclick=function(){
		if(control){
			// ----------------------覆盖式--------------------------
			var next=big.firstElementChild;
			document.onkeydown=function(e){
				if (e.shiftKey) {
					if (e.keyCode!=next.innerHTML.charCodeAt(0)) {return;}
				}else{
					if (e.keyCode+32!=next.innerHTML.charCodeAt(0)) {return;}
				}
				next.style.background='black';
				next=next.nextElementSibling;
				if (next==null) {
					tishi.style.display='block';
					var showmm=time.innerHTML.slice(0,2);   //分
					var showss=time.innerHTML.slice(3,5);   //秒
					if(Number(showmm)){
						messages.innerHTML='您共用时'+Number(showmm)+'分'+Number(showss)+'秒';
					}else{
						messages.innerHTML='您共用时'+Number(showss)+'秒';
					}	
					clearInterval(timerId);
					document.onkeydown=null;
					replay.onclick=function(){
						location.reload();
					};
				}
			};
			// ---------------计时(分、秒)--------------------------
			timerId=setInterval(function(){
				str='';
				if(ss++==60){
					mm++;
					ss=0;
				}
				str+=mm<10?'0'+mm:mm;
				str+=':';
				str+=ss<10?'0'+ss:ss;
				time.innerHTML=str;
			},1000);
			control=false;
		}	
	};

	// ---------------时、分、秒--------------------------
			// timerId=setInterval(function(){
			// 	str='';
			// 	if(ss++==60){
			// 		if(mm++==60){
			// 			hh++;
			// 			mm==0;
			// 		}
			// 		ss=0;
			// 	}
			// 	str+=hh<10?'0'+hh:hh;
			// 	str+=':';
			// 	str+=mm<10?'0'+mm:mm;
			// 	str+=':';
			// 	str+=ss<10?'0'+ss:ss;
			// 	time.innerHTML=str;
			// },1000);
















};