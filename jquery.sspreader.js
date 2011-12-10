(function($){
 $.fn.sspreader = function(file) {
 
 
 $.get(file, function(data){	
		var album = $(data).find('album:first');
		var path = $(album).attr('lgpath');
			$(album).find('img').each(function(){
				var src = $(this).attr('src');
				var caption = $(this).attr('caption');
				var title = $(this).attr('title');
					if (!caption){
					caption="";	
					};
					if (!title){
					title="";	
					};
 				$("#slideshow").append('<div class="slide"><img src="'+path+src+'" alt="'+caption+'"><div><h2>'+title+'</h2><p>'+caption+'</p></div></div>');
				});	
				var count = $(".slide").length;
				$(".slide div").append('<p class="position">1 / '+count+'</p>');
				$(".slidebuttons").show().click(function(e){
				  e.preventDefault;
				});
			$("#slideshow").carouFredSel({
				scroll: {
					fx: "crossfade",
					onAfter : function() { 
					$(this).css('filter', 'none');
			        $(this).trigger("currentPosition", function( pos ) {
				      var txt = (pos+1) + " / " + count;
				      $(".position").html( txt );
			          });
			        }
				},
				height: "variable",
				auto: false,
				pagination: "slidebuttons",
				prev: {
					button: "#prevslide",
					key: "left"
				},
				next: {
					button: "#nextslide",
					key: "right"
				}
			})
			
	});
 
 

    return this.each(function() {

    });
 };
})(jQuery);