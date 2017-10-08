$(function(){
	

	/**
	 * 首页banner轮播图
	 */
	    var $oList = $(".fill");
        var $oRight = $("#right");
        var $oLeft = $("#left");
        var $len = $oList.length -1;
        var i = 0;
        var timer;

        // 第一张显示，其余隐藏
        $oList.eq(0).show().siblings($oList).hide();

        showTime($oList,$len);

        $oList.hover(function() {

        	clearInterval(timer);

        }, function() {

        	showTime($oList,$len);

        });

       	// 鼠标经过左按钮
       	$oLeft.on('click', function() {
       		clearInterval(timer);
       		if(i == 0){
       			i = $len + 1;
       		}
       		i--;
       		show($oList);
       		showTime($oList,$len);
       	});

       	// 鼠标经过右侧按钮
       	$oRight.on('click', function(event) {
       		clearInterval(timer);
       		if(i == $len){
       			i = - 1;
       		}
       		i++;
       		show($oList);
       		showTime($oList,$len);
       	});
       	function showTime(selector,length){
        	//定时器
        	timer = setInterval(function(){
        		// 调用show
        		show(selector);
        		i++;
        		// 当图片为最后一张时，设置图片为第一张
        		if(i == length + 1){
        			i = 0;
        		}


        	},3000);
        }

        function show(selector){
        	selector.eq(i).fadeIn(300).siblings(selector).fadeOut(300);
        }




       	/**
       	 * 首页展示小图轮播
       	 */
       	var num = 0;
       	// 第一个小图
       	var $oneItem = $('#r_item .r_1');
       	var $oneSpan = $('#oneSpan span');
       	showItem($oneItem,$oneSpan);

       	// 第二个小图
       	var $twoItem = $('#r_item2 .r_2');
       	var $twoSpan = $('#twoSpan span');
       	showItem($twoItem,$twoSpan);

       	// 第三个小图
       	var $threeItem = $('#r_item3 .r_3');
       	var $threeSpan = $('#threeSpan span');
       	showItem($threeItem,$threeSpan);

       	// 第四个小图
       	var $fourItem = $('#r_item4 .r_3');
       	var $fourSpan = $('#fourSpan span');
       	showItem($fourItem,$fourSpan);

       	// 第五小图
       	var $fiveItem = $('#r_item5 .r_3');
       	var $fiveSpan = $('#fiveSpan span');
       	showItem($fiveItem,$fiveSpan);

       	function showItem(selector,btn){
       		selector.eq(num).show().siblings(selector).hide();
       		btn.mousemove(function(){
       			$(this).addClass('cover').siblings().removeClass('cover');
       			num = $(this).index();
       			selector.eq(num).fadeIn(300).siblings(selector).fadeOut(300);
       		});
       	}
       	



       	/**
       	 * house_list页面图片两页展示效果
       	 */
       	// 过滤选择效果
       	$('#screen dl').each(function(index){
       		$(this).attr('id','filter'+ index);
       		var $filter = $('#filter'+ index + ' dd');
       			$filter.on('click',function(){
       				$(this).addClass('cover').siblings().removeClass('cover');
       			});
       	});
       	$('.choose .select').on('click',function(){
       		$(this).hide();
       	});
       	var $selectLen = $('.choose .select').length;
       	
       	$('.choose .del').on('click',function(){
       		$('.choose .select').hide();
       	});

       	// 给每个li添加一个唯一id
       	$('.house_list li').each(function(index){
       		$(this).attr('id','hItem'+ index);
       		var $hImg = $('#hItem'+ index + ' .h_img a');
       		var $hSpan = $('#hItem'+ index + ' .h_btn span');
       		showItem($hImg,$hSpan);
       	});

       	//底部推荐房源轮播
       	var reListNum = 0;
       	var reListTimer;
       	var $reListWidth = $('.h_re_list').width();
       	var $reList = $('.h_re_list ul');
       	var $reListLen = $('.h_re_list ul li').length;
       	// 向上取整,分页
       	var page = Math.ceil($reListLen/3) - 1;

       	$('.h_re_list ul li:nth-child(3n+0)').css({marginRight:'41.25px'});

       	reListShowTime();

       	$('.h_re_list ul li').hover(function(){
       		clearInterval(reListTimer);
       	},function(){
       		reListShowTime();
       	});
       	$('.btn_prev').on('click',function(){
       		clearInterval(reListTimer);
       		if(reListNum == 0){
       			reListNum  = page + 1;
       		}
       		reListNum --;
       		reListShow();
       		reListShowTime();
       		
       	});
       	$('.btn_next').on('click',function(){
       		clearInterval(reListTimer);
       		if(reListNum == page){
       			reListNum = -1;
       		}
       		reListNum ++;
       		reListShow();
       		reListShowTime();

       	});
       	function reListShowTime(){
       		reListTimer = setInterval(function(){
       			reListShow();
       			if(reListNum == page){
	       			reListNum = -1;
	       		}
       			reListNum++;
	       		
       		},3000);
       	}

       	function reListShow(){
       		$reList.stop().animate({
       			left:'-'+ $reListWidth * (reListNum) + 'px'
       		});
       		
       	}

	/*house_list第三列选择器兼容问题*/
	$('.house_list li:nth-child(3n+0)').css({marginRight:0});
});