

		var dl_link;
		var img_ori;
		var imgs = document.getElementById('imgs').getElementsByTagName('img');
		var slide=function(i){
		
		  return function(e){
			//imgs[i].style.display='none';
			
			
			shuiyin('output',imgs[i].src);  //開啟選擇的照片
			img_ori = i+1; 					//記住相片編號
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
				ctx.font = "80px  Microsoft YaHei";
				ctx.fillStyle = "rgba(252,255,255,1)";


				
				
				
				
				document.getElementById("shuiyinBtn").onclick = function(){
				
				var addtext = document.getElementById("shuiyinText").value;
				
				
				

				
				var text_w,text_h,text_l,text_fs
				text_l = addtext.length; //輸入長度
				text_fs = w/(text_l+2)  //字體大小修正
				text_h = h*0.95;		//離圖片底部的高度
				text_w = (w/2)- (text_l/2)*text_fs; //文字置中
				
				


				ctx.font = text_fs+"px  Microsoft YaHei";//即時修正字體大小
				ctx.fillText(addtext,text_w,text_h); //選擇位置
				
				dl_link = canvas.toDataURL();
				document.getElementById("DL").href=dl_link;
				
				}
			}
		}
		
		document.getElementById("errBtn").onclick = function(){
		shuiyin('output',"./img/"+ img_ori +".jpg");	
		}