//左边楼层导航
$(window).scroll(function(){
			var oHeadTop=$(".head").height();
			var oScrollTop=$(window).scrollTop();
				
			if(oScrollTop>=oHeadTop){
				$("#floor-nav").fadeIn()
			}else{
				$("#floor-nav").fadeOut()
			}
			var screenH=$(window).height()
			
			$("flooor").each(function(){
				if(screenH+oScrollTop-$(this).offset().top>screenH/2){
					$('#floor-nav li').removeClass('active')
					$('#floor-nav li').eq($(this).index()).addClass('active')
				}
			})
		})
		
		//置顶
			$("#gotop").click(function(){
				$("body,html").animate({
					'scrollTop':0
				},500)
			})	