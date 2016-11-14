$(function() {
	var sign = 0;
	//列表和切歌
	var musics = [{
		name: "薛之谦 (Joker) - 演员 ",
		author: "薛之谦",
		src: "./music/薛之谦 (Joker) - 演员.mp3",
		duration: "04:21",
		content:" [00:00.31] 演员 - 薛之谦[00:08.61] 词曲：薛之谦[00:21.12] 简单点说话的方式简单点[00:30.20] 递进的情绪请省略[00:33.64] 你又不是个演员[00:36.38] 别设计那些情节[00:41.93] 没意见我只想看看你怎么圆[00:51.54] 你难过的太表面 像没天赋的演员[00:57.15] 观众一眼能看见[01:02.22] 该配合你演出的我演视而不见[01:07.68] 在逼一个最爱你的人即兴表演[01:12.90] 什么时候我们开始收起了底线[01:18.02] 顺应时代的改变看那些拙劣的表演[01:23.42] 可你曾经那么爱我干嘛演出细节[01:28.63] 我该变成什么样子才能延缓厌倦[01:33.87] 原来当爱放下防备后的这些那些[01:39.37] 才是考验[01:44.60] 没意见你想怎样我都随便[01:54.53] 你演技也有限[01:57.58] 又不用说感言[02:00.15] 分开就平淡些[02:05.16] 该配合你演出的我演视而不见[02:10.53] 别逼一个最爱你的人即兴表演[02:15.81] 什么时候我们开始没有了底线[02:21.00] 顺着别人的谎言被动就不显得可怜[02:26.42] 可你曾经那么爱我干嘛演出细节[02:31.52] 我该变成什么样子才能配合出演[02:36.72] 原来当爱放下防备后的这些那些[02:41.86] 都有个期限[02:47.56] 其实台下的观众就我一个[02:53.04] 其实我也看出你有点不舍[02:58.34] 场景也习惯我们来回拉扯[03:02.93] 还计较着什么[03:08.71] 其实说分不开的也不见得[03:14.03] 其实感情最怕的就是拖着[03:19.21] 越演到重场戏越哭不出了[03:24.07] 是否还值得[03:29.07] 该配合你演出的我尽力在表演[03:34.39] 像情感节目里的嘉宾任人挑选[03:39.68] 如果还能看出我有爱你的那面[03:44.82] 请剪掉那些情节让我看上去体面[03:50.04] 可你曾经那么爱我干嘛演出细节[03:55.31] 不在意的样子是我最后的表演[04:01.05] 是因为爱你我才选择表演这种成全"

	}, {
		name: " 想遇见一个人",
		author: "曾咏熙",
		src: "./music/曾咏熙 - 想遇见一个人 [mqms2](1).mp3",
		duration: "3:46",
		content:"[00:00.76]曾咏熙[00:05.84]想遇见一个人[00:21.84]又一个情人节 独自沉默[00:28.54]我不要 像同情的联络[00:36.99]自由得很寂寞[00:40.74]逞强得很脆弱[00:46.14]想遇见 一个真心的人[00:50.05]想听见 一句爱能当真[00:54.10]想忘了 最亲的也最残忍[00:57.88]难愈合 的裂痕[01:01.68]想遇见 一个浪漫的人[01:05.58]想看见 感动不停发生[01:09.43]想知道 我不再是座空城[01:13.48]能让我 被呵护 被放任[01:33.33]心 有时候觉得 像静止的[01:40.13]怎么做 就是无法快乐[01:48.54]谁对谁很温柔[01:52.29]我莫名会泪流[01:55.84]想遇见 一个真心的人[01:59.70]想听见 一句爱能当真[02:03.65]想忘了 最亲的也最残忍[02:07.46]难愈合 的裂痕[02:11.36]想遇见 一个浪漫的人[02:15.21]想看见 感动不停发生[02:19.06]想知道 我不再是座空城[02:23.01]能让我 被呵护 被放任[02:54.02]想遇见 一个真心的人[02:57.82]想听见 一句爱能当真[03:01.62]想忘了 最亲的也最残忍[03:05.72]难愈合 的裂痕[03:09.52]想遇见 一个浪漫的人[03:13.32]想看见 感动不停发生[03:16.97]想知道 我不再是座空城[03:21.12]能让我 被呵护 被放任"
	}, {
		name: "偏偏喜欢你 ",
		author: "陈晓东 ",
		src: "./music/尖耳朵的阿凡达妹妹陈晓东 - 偏偏喜欢你 (Live) [mqms2].mp3",
		duration: "4:29",
		content:"[00:00.76]陈晓东、尖耳朵的阿凡达妹妹 - 偏偏喜欢你(Live)[00:06.06]作词：郑国江[00:07.17]作曲：陈百强[00:08.33]编曲：陈家荣[00:26.60]愁绪挥不去苦闷散不去[00:33.03]为何我心一片空虚[00:39.81]感情已失去一切都失去[00:46.48]满腔恨愁不可消除[00:56.58]为何你的嘴里[00:59.66]总是那一句[01:03.10]为何我的心不会死[01:09.45]明白到爱失去一切都不对[01:16.55]我又为何偏偏喜欢你[01:23.28]爱已是负累相爱似受罪[01:30.14]心底如今满苦泪[01:36.43]旧日情如醉此际怕再追[01:43.94]偏偏痴心想见你[01:49.98]为何我心分秒想着过去[01:56.45]为何你一点都不记起[02:02.70]情义已失去恩爱都失去[02:09.62]我却为何偏偏喜欢你[02:29.75]为何我心分秒想着过去[02:36.33]为何你一点都不记起[02:42.61]情义已失去恩爱都失去[02:49.52]我却为何偏偏喜欢你[02:56.62]爱已是负累[02:59.80]相爱似受罪[03:03.48]心底如今满苦泪[03:09.63]旧日情如醉[03:13.03]此际怕再追[03:17.28]偏偏痴心想见你[03:29.72]为何我心[03:32.14]分秒想着过去[03:36.34]为何你一点[03:39.12]都不记起[03:42.66]情义已失去恩爱都失去[03:49.72]我却为何偏偏喜欢你[03:56.17]情义已失去[03:59.77]恩爱都失去"
	}, {
		name: " 有多少爱可以重来 ",
		author: "李嘉格侧田 ",
		src: "./music/李嘉格侧田 - 有多少爱可以重来 (Live) [mqms2].mp3",
		duration: "4:40",
		content:"[00:00.76]李嘉格侧田[00:05.76]有多少爱可以重来 (Live)[00:24.69]常常责怪自己[00:26.93]当初不应该[00:33.28]常常后悔没有[00:35.82]把你留下来[00:40.26]为什么明明相爱[00:45.14]到最后还是要分开[00:49.30]是否我们总是[00:51.48]徘徊在心门之外[00:58.95]谁知道又和你[01:01.64]相遇在人海[01:07.64]命运如此安排[01:10.23]总教人无奈[01:14.96]这些年过得不好不坏[01:19.12]只是好像少了[01:20.85]一个人存在[01:23.59]而我渐渐明白[01:26.03]你仍然是我不变的关怀[01:31.97]有多少爱可以重来[01:36.24]有多少人愿意等待[01:40.50]当懂得珍惜以后归来[01:43.45]却不知那份爱[01:45.63]会不会还在[01:48.83]有多少爱可以重来[01:53.30]有多少人值得等待[01:57.57]当爱情已经桑田沧海[02:00.31]是否还有勇气去爱[02:41.91]谁知道又和你[02:44.25]相遇在人海[02:50.50]命运如此安排[02:53.09]总教人无奈[02:57.91]这些年过得不好不坏[03:02.03]只是好像少了[03:03.70]一个人存在[03:06.40]而我渐渐明白[03:08.53]你仍然是我不变的关怀[03:14.98]有多少爱可以重来[03:18.79]有多少人愿意等待[03:23.26]当懂得珍惜以后归来[03:26.26]却不知那份爱[03:28.24]会不会还在[03:31.64]有多少爱可以重来[03:36.21]有多少人值得等待[03:40.33]当爱情已经桑田沧海[03:43.27]是否还有勇气去爱[03:49.22]有多少爱可以重来[03:53.08]有多少人愿意等待[03:57.55]当懂得珍惜以后归来[04:00.39]却不知那份爱[04:02.93]会不会还在[04:06.13]有多少爱可以重来[04:10.40]有多少人值得等待[04:14.51]当爱情已经桑田沧海[04:17.61]是否还有勇气去爱[04:23.45]当爱情已经桑田沧海[04:26.19]是否还有勇气去爱"
	}]

	var ul = $("#ul");
	//渲染 创建列表
	function render() {
		ul.empty();
		$.each(musics, function(i, v) {
			var c = (i == sign) ? "active" : "";
			$('<li><span>' + musics[i].name + '</span><span></span><span>' + musics[i].author + '</span><span></span><div><i class="i">&#xe665;</i></div><div class="delete"><i>&#xe6cb;</i></div></li>').appendTo(ul)
		})
	}
	render();
	//标记喜欢
	$(".i").eq(0).html("&#xe640");
	ul.on("touchend", "li", function() {
			$("li").removeAttr("id");
			$(".i").html("&#xe665;");
			sign = $(this).index();
			$("li").eq(sign).attr("id", "active");
			$(".i").eq(sign).html("&#xe640");
			audio.src = musics[sign].src;
			audio.play();
		})
		//控制播放 暂停
	var play = $(".play");
	var audio = $("#audio").get(0);
	play.on("touchend", function() {
		if (audio.paused) {
			audio.play();
		} else {
			audio.pause();
		}
	})
	$(".plays").on("touchend", function() {
		if (audio.paused) {
			audio.play();
		} else {
			audio.pause();
		}
	})
	audio.onplay = function() {
		$(".bg").attr("id", "bgg");
		$(".plays").attr("id", "plays");

	}
	audio.onpause = function() {
			$(".bg").removeAttr("id");
			$(".plays").removeAttr("id");

		}
		//添加歌曲
	$(".tj-body").on("touchend", ".song", function() {
			var index = $(this).index();
			var d = $(this).attr("data-v");
		    if($(".song .biaoji").eq(index).css("background")=="rgb(49, 194, 124) none repeat scroll 0% 0% / auto padding-box border-box"){
		    	$(".song .biaoji").eq(index).css("background", "transparent");
		    }else{
		    	$(".song .biaoji").eq(index).css("background", "#31c27c");
				musics.push(JSON.parse(d));
				render();
		    }
				
			
			
		})
		//全部添加
	$(".all").on("touchend", function() {
		if ($(".biaoji").css("background") == "rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box") {
			$(".biaoji").css("background", "#31c27c");
		} else {
			$(".biaoji").css("background", "transparent");
		}
	})
	$(".addto").on("touchend", function() {
		$(".song").each(function(i) {
			var d = $(".song").eq(i).attr("data-v");
			musics.push(JSON.parse(d));
		})
		render();
	})
   //全部删除
   $(".laji").on("touchend",function(){
   	$(".song-list li").html("");
   })
	var current = $(".current-time");
	var duration = $(".duration");
	var progress = $(".progress");
	var progress1 = $("#progress1");
	var pi = $(".pi");
	var pi1 = $("#pi1");
	//		var mute=$("#mute");
	$(".pro-bg").on("touchend", function(e) {
		var offsetX = e.originalEvent.changedTouches[0].clientX - progress.offset().left;
		audio.currentTime = offsetX / $(this).width() * audio.duration;
	})
	$("#pro").on("touchend", function(e) {
		var offsetX = e.originalEvent.changedTouches[0].clientX - progress1.offset().left;
		audio.currentTime = offsetX / $(this).width() * audio.duration;
	})

	function format(v) {
		v = Math.floor(v);
		var s = v % 60;
		s = (s < 10) ? ("0" + s) : s;
		var m = Math.floor(v / 60);
		return m + ":" + s;
	}

	$(audio).on("timeupdate", function() {
		current.html(format(audio.currentTime));
		var left = progress.width() * audio.currentTime / audio.duration
		pi.css("width", left);
		play2();

	})
	$(audio).on("timeupdate", function() {
			current.html(format(audio.currentTime));
			var left = progress1.width() * audio.currentTime / audio.duration
			pi1.css("width", left);

		})
		//调节音量
	var voice = $(".voice");
	var vi = $(".vi");
	vi.on("touchend", false);
	vi.on("touchstart", function(e) {
		var r = $(this).width() / 2;
		var offsetX = e.originalEvent.changedTouches[0].clientX - vi.offset().left;
		var start = r - offsetX;
		$(document).on("touchmove", function(e) {
			var m = e.originalEvent.changedTouches[0].clientX;
			var left = m - voice.position().left + start;
			if ((left / voice.width() > 0) && (left / voice.width() < 1)) {
				audio.volume = left / voice.width();
			}

		})
		return false;
	})
	$(document).on("touchend", function() {
		$(document).off("touchmove");
	})
	voice.on("touchend", function(e) {
		var offsetX = e.originalEvent.changedTouches[0].clientX - vi.offset().left;
		audio.volume = offsetX / $(this).width();
		//				mute.removeAttr("data-v");
	})

	pi.on("touchend", false);
	pi1.on("touchend", false);
	pi.on("touchstart", function(e) {
		$(document).on("touchmove", function(e) {
			var m = e.originalEvent.changedTouches[0].clientX;
			var left = m - progress.position().left;
			var c = left / progress.width() * audio.duration;
			if (c >= audio.duration) {
				return;
			}
			audio.currentTime = c;
		})
		return false;
	})
	pi1.on("touchstart", function(e) {
			$(document).on("touchmove", function(e) {
				var m = e.originalEvent.changedTouches[0].clientX;
				var left = m - progress1.position().left;
				var c = left / progress1.width() * audio.duration;
				if (c >= audio.duration) {
					return;
				}
				audio.currentTime = c;
			})
			return false;
		})
		//静音
		//		mute.on("click",function(){
		//			if($(this).attr("data-v")){
		//				audio.volume=$(this).attr("data-v");
		//				$(this).removeAttr("data-v");
		//			}else{
		//				$(this).attr("data-v",audio.volume);
		//				audio.volume=0;
		//			}
		//		})
		//事件驱动的模式设置音量按钮的位置
	audio.onvolumechange = function() {
		vi.css("left", voice.width() * audio.volume - vi.width() / 2)
	}

	//删歌
	ul.on("touchend", ".delete", function() {
		var li = $(this).closest("li");
		var index = li.index();
		musics.splice(index, 1);
		if (index == sign) {
			if (musics[sign]) {
				audio.src = musics[sign].src;
			} else {
				audio.src = "";
			}
		} else if (index > sign) {

		} else if (index < sign) {
			sign -= 1;
		}
		render();
		return false;
	})

	function next() {
		sign++;
		if (sign == musics.length) {
			sign = 0;
		}
		audio.src = musics[sign].src;
		render();
		audio.play();
	}

	function prev() {
		sign--;
		if (sign < 0) {
			sign = musics.length - 1;
		}

		audio.src = musics[sign].src;
		render();
		audio.play();
	}
	$(".pre").on("touchend", prev);
	$(".next").on("touchend", next);
	audio.onload = function() {
		audio.play();
	}
	audio.onended=function(){
		next();
	}
	audio.oncanplay = function() {
			duration.html(format(audio.duration));
			$(".nav-center").html(musics[sign].name);
			$(".zuozhe").html(musics[sign].author);
			$(".s-name").html(musics[sign].name);
			$(".geminzi").html(musics[sign].name);
			$("li").removeAttr("id");
			$("li").eq(sign).attr("id", "active");

		}
		//切换页面
	$(".s-name").on("touchend", function(e) {
			$(".geciye").removeAttr("id");
		    $(".geciye").attr("id", "gecidong");
	
	})
	$(".nav-left").on("touchend", function() {
		$(".geciye").removeAttr("id");
		$(".geciye").attr("id", "gecidong1");
	});
	
	
	$(".set").on("touchend", function(e) {
			$(".geciye").removeAttr("id");
		    $(".geciye").attr("id", "gecidong");
	
	})
	$(".nav-left").on("touchend", function() {
		$(".geciye").removeAttr("id");
		$(".geciye").attr("id", "gecidong1");
	});
	//列表页
	$(".list").on("touchend", function() {
		$(".liebiaoye").removeAttr("id");
		$(".liebiaoye").show();
		$(".liebiao").removeAttr("id");
		$(".liebiao").attr("id", "liebiao")
	})
	$(".guanbi").on("touchend", function() {
			$(".liebiao").removeAttr("id");
			$(".liebiao").attr("id", "liebiao1");
			$(".liebiaoye").attr("id", "qu");
		})
		//标记喜欢
	$(".like i").on("touchend", function() {
			if ($(this).attr("id") == "hong") {
				$(this).removeAttr("id");
				$(this).html("&#xe665;");
			} else {
				$(this).attr("id", "hong");

				$(this).html("&#xe640;");
			}
		})
		//添加页
	$(".tianjia").on("touchend", function() {
		$(".tianjiaye").removeAttr("id");
		$(".tianjiaye").attr("id", "tj-lai");
	})
	$(".tiange").on("touchend", function() {
		$(".tianjiaye").removeAttr("id");
		$(".tianjiaye").attr("id", "tj-lai");
	})
	$(".close").on("touchend", function() {
		$(".tianjiaye").removeAttr("id");
		$(".tianjiaye").attr("id", "tj-qu");
	})
	//详情页
	$(".nav-right").on("touchend",function(){
		$(".yinliangye").show();
		$(".yly").removeAttr("id");
		$(".yly").attr("id","yinliang");
	})
	$(".quxiao").on("touchend",function(){
		$(".yinliangye").delay(500).queue(function(){
			$(this).hide().dequeue();
		})
		$(".yly").removeAttr("id");
		$(".yly").attr("id","yinliang1");
	})
				//歌词处理
		function lyric_ctrl()
		{
			var lyricObj=musics[sign].content;
			var temp=lyricObj.split("[");
			var html1="";
			for(var i=0;i<temp.length;i++)
			{   
				var arr=temp[i].split("]");
				var text=(arr[1]);
				var time=arr[0].split(",");
				var temp2=time[0].split(".");
				var ms=temp2[1];//毫秒
				var temp3=temp2[0].split(":");			
				var s=temp3[1];//秒
				var m=temp3[0];//分
				var s_sum=parseInt(m*60)+parseInt(s);
				if(text)
				{
					html1+="<p id='lyric"+s_sum+"'>"+text+"</p>";
				}	
			}
			
			$(".lyric2").html(html1)
		}
		
	
	function play2(obj){
		var lyrict1="lyric"+(Math.floor(audio.currentTime)+2);
		var p1=$(".lyric2 p")
		for(var i=0;i<p1.length;i++){
			if(lyrict1==p1.eq(i).attr("id")){
				p1.css("color","#a7a1a1")
				p1.eq(i).css("color","#fff");
				$(".lyric2").animate({"top":-i*0.6+0.6+"rem"},1000)
			}
		}
	}
	$(audio).on("loadstart",function(){
		$(".lyric2").empty();
		$(".lyric2").css("top","0.4rem")
		lyric_ctrl();
		
	})
})