<!doctype html>
<html lang="zh-tw">
<head>
	<meta charset="UTF-8">
	<title>鸚鵡兄弟文字圖產生器 - RenZhou</title>
	<meta name="description" content="鸚鵡兄弟文字圖產生器，快來試試看吧!" />
	<link rel="Shortcut Icon" type="image/x-icon" href="./img/icon.ico" />

	<meta property="og:url" content="http://renzhou.tw/yinwubrother-textmaker/"/>
	<meta property="og:image" content="http://renzhou.tw/yinwubrother-textmaker/img/pre.png" />
	<meta property="og:image" content="http://renzhou.tw/yinwubrother-textmaker/img/pre2.png" />
	<!-- CSS -->
	<link rel="stylesheet" href="./css/new2.css" type="text/css">
 
	<!-- 彈窗套件 -->
	<link rel="stylesheet" href="./css/reveal.css">
	<script type="text/javascript" src="http://code.jquery.com/jquery-1.6.min.js""></script>
	<script type="text/javascript" src="./js/jquery.reveal.js"></script>

	<!-- for mobile -->
	<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
	
	
</head>
<body>
	
	<div class="main"> 
	
		<div class="top-part" id="topp"> 
			<br>
			<h1>鸚鵡兄弟文字圖產生器</h1>
			<hr>
			<div id="imgs">
			
				<?php
				//-----------------------------------------------------改成php輸出----------

				$dirarr = scandir('./img/pre',0);
				$i = count($dirarr);
				
				$i=$i-1;
				for($j=2;$j<=$i;$j++){
					//$indexj = str_replace(".jpg","",$dirarr[$j]);
					echo "<img src=\"./img/pre/". $dirarr[$j] ."\" alt=\"img".($j-2)."\">" ;
				
				}
				
				//--------------------------------------------------------------------------
				?>
			</div>
		</div>
		
		
		
		<div class="bot-part" id="bott"> 
		
			<canvas id="output" ></canvas>
		
			<div>
				<input id="shuiyinText" value="" type="text" />
				<label class="label">
					<input class="radio" id="checkbox" type="checkbox" name="demo-checkbox2">
					<span class="checkbox radioInput"></span>
				</label>
				<br><br>
				<button class="normal" id="shuiyinBtn" class="mui-btn mui-btn-primary" type="button" > 來人上字</button>
				<button class="normal" id="errBtn" class="mui-btn mui-btn-primary" type="button" > 上錯字啦</button>
				<button class="normal" onclick="javascript:window.location.reload()" type="button">再做一張</button>
				<br><br>
				<a href="" id="DL" download="鸚鵡兄弟.png" target="_blank"><button class="rred">下載圖片</button></a>
				<br><br><br><br>
				<p class="msg">小提醒：用FB開啟會無法下載<br><br>感謝巴友 巴啦啦小魔仙 提供原始圖<br> 有其他我沒有的也歡迎提供喔 </p>


				<!-- vvv TEST PART START vvv -->
				
				
				
				<p id="howlong"></p>
				
				
				
				
				<!-- ^^^ TEST PART END   ^^^ -->
				
				
			</div>		
		</div>

		
		
		<div class="footer">
			<hr>
			<p><a href="https://github.com/r3850355/yinwubrother-textmaker" target="_blank">GitHub</a>  *  <a href="../about/" target="_blank">聯絡我</a>  *  2017</p>
			<tt>*	圖片皆來自google  *</tt>
		</div>

		
		<div class="reveal-modal" id="myModal">
		<h1>Σ(°Д°; !!</h1>
		<h3>偵測到您是用FB瀏覽器</h3>
		<h3>FB內建瀏覽器會導致不能下載</h3>
		<p>請利用手機內建瀏覽器或其他瀏覽器</p>
		</div>

		
		
		
	</div>
	
	
<script type="text/javascript">
//   FB瀏覽器檢查~~~~~~~~~~~~~~
  $(document).ready(function() {
	var bro,isfb;
	bro = navigator.userAgent; //偵測瀏覽器總類
	isfb = bro.search("FB");
	if (isfb > 0){$('#myModal').reveal();}//開啟彈跳視窗
   });
  
</script>
	
	
	
<script src="./js/script.js"></script>		
	
<script>
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-103037499-1', 'auto');
  ga('send', 'pageview');
</script>	
	
	
</body>
		

</html>