

		var dl_link;
		var img_ori;
		var imgs = document.getElementById('imgs').getElementsByTagName('img');
		var slide=function(i){
		
		  return function(e){
			//imgs[i].style.display='none';			
			//var imgurl = imgs[i].src;	
			
			//------------------------------------------更改選照片方法
			//imgurl = imgurl.replace(/pre\//g,"");
			//imgurl = imgurl.replace(/jpg/g,"png");
			//
			var imgurl = "./img/"+i+".png";
			shuiyin('output',imgurl);  //開啟選擇的照片
			//---------------------------------------------------------
			
			
			
			img_ori = i; 					//記住相片編號
			document.getElementById('bott').style.display = "block"; //開啟第二頁
			document.getElementById('topp').style.display = "none";  //隱藏第一頁
			window.document.body.scrollTop = 0;
			window.document.documentElement.scrollTop = 0;
		  }
		};
		
		for(i=0;i<imgs.length;i++){
		  imgs[i].onclick=slide(i);
		}
	

		function shuiyin(canvasid,imgurl,addtext){
			var img = new Image();
			img.src = imgurl;	
			img.onload = function(){				
				var canvas = document.getElementById(canvasid);
				var ctx = canvas.getContext("2d");
				
				
					
				canvas.width = img.width;  //調整畫布大小
				canvas.height = img.height;
				
				var w = canvas.width;
				var h = canvas.height;
				

				ctx.drawImage(img,0,0,w,h);
				//ctx.font = "80px  Microsoft YaHei";
				ctx.fillStyle = "rgba(252,255,255,1)";


				
				
				
				
				document.getElementById("shuiyinBtn").onclick = function(){
				
				var addtext = document.getElementById("shuiyinText").value;
				
				
				

				
				var text_w,text_h,text_l,text_fs
				text_l = addtext.length; //輸入長度
				text_fs = w/(text_l+2);  //字體大小修正
				text_h = h*0.95;		//離圖片底部的高度
				//text_w = (w/2)- (text_l/2)*text_fs; //文字置中
				text_w = (w-text_l*text_fs)/2;//更正確的算法
				addtext = Half2Full(addtext);//半形轉全形
				

				
				

				
				


				ctx.font = text_fs+"px  Microsoft YaHei";//即時修正字體大小
				ctx.fillText(addtext,text_w,text_h); //選擇位置 && 上字
				
				dl_link = canvas.toDataURL();
				document.getElementById("DL").href=dl_link;
				
				}
			}
		}
		
		document.getElementById("errBtn").onclick = function(){
		shuiyin('output',"./img/"+ img_ori +".png");	
		}
		
	

	
		function Half2Full(zStr1) {
			var i = 0;
			var aTmp = new Array();
			var zStr2 = "";
			for(i = 0; i < zStr1.length; i++) {
				if(zStr1.charCodeAt(i) >=0 && zStr1.charCodeAt(i) <= 31) {
					aTmp[i] = 0;   //ascii 小於等於32的字元，都先清為 null
				} else if(zStr1.charCodeAt(i) >=33 && zStr1.charCodeAt(i) <= 126)  {
					aTmp[i] = zStr1.charCodeAt(i) + 65248;   //ascii介於33~126之間的字元，加上65248準備轉為全型unicode
				} else {
					aTmp[i] = zStr1.charCodeAt(i);
				}
				zStr2 += String.fromCharCode(aTmp[i]);    //轉為全型unicode
			}
			return zStr2;  //裝轉換結果回填到原來源字串位置
		}