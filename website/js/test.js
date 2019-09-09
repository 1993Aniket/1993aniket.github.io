$(document).ready(function(){
         
            $('#vivek').click(function() {
               $(this).removeClass("MenuTab");
                $(this).addClass("MenuTab-selected");
                $(this).css("background-color","#ECECEC");
				$('#ashish').removeClass("MenuTab-selected");
                $('#ashish').addClass("MenuTab");
				$('#kumar').removeClass("MenuTab-selected");
                $('#kumar').addClass("MenuTab");
				$('#pooja').removeClass("MenuTab-selected");
                $('#pooja').addClass("MenuTab");
				$('#lokesh').removeClass("MenuTab-selected");
                $('#lokesh').addClass("MenuTab");
				$('#deepak').removeClass("MenuTab-selected");
                $('#deepak').addClass("MenuTab");
               });
            
			 $('#ashish').click(function() {
               $(this).removeClass("MenuTab");
                $(this).addClass("MenuTab-selected");
				$('#vivek').css("background","none");
				$('#vivek').css("box-shadow","none");
				$('#vivek').removeClass("MenuTab-selected");
                $('#vivek').addClass("MenuTab");
				$('#kumar').removeClass("MenuTab-selected");
                $('#kumar').addClass("MenuTab");
				$('#pooja').removeClass("MenuTab-selected");
                $('#pooja').addClass("MenuTab");
				$('#lokesh').removeClass("MenuTab-selected");
                $('#lokesh').addClass("MenuTab");
				$('#deepak').removeClass("MenuTab-selected");
                $('#deepak').addClass("MenuTab");
               });
			   
			   $('#kumar').click(function() {
               $(this).removeClass("MenuTab");
                $(this).addClass("MenuTab-selected");
				$('#vivek').css("background","none");
				$('#vivek').css("box-shadow","none");
				$('#vivek').removeClass("MenuTab-selected");
                $('#vivek').addClass("MenuTab");
				$('#ashish').removeClass("MenuTab-selected");
                $('#ashish').addClass("MenuTab");
				$('#pooja').removeClass("MenuTab-selected");
                $('#pooja').addClass("MenuTab");
				$('#lokesh').removeClass("MenuTab-selected");
                $('#lokesh').addClass("MenuTab");
				$('#deepak').removeClass("MenuTab-selected");
                $('#deepak').addClass("MenuTab");
               });
			
				
				$('#pooja').click(function() {
               $(this).removeClass("MenuTab");
                $(this).addClass("MenuTab-selected");
				$('#vivek').css("background","none");
				$('#vivek').css("box-shadow","none");
				$('#vivek').removeClass("MenuTab-selected");
                $('#vivek').addClass("MenuTab");
				$('#ashish').removeClass("MenuTab-selected");
                $('#ashish').addClass("MenuTab");
				$('#kumar').removeClass("MenuTab-selected");
                $('#kumar').addClass("MenuTab");
				$('#lokesh').removeClass("MenuTab-selected");
                $('#lokesh').addClass("MenuTab");
				$('#deepak').removeClass("MenuTab-selected");
                $('#deepak').addClass("MenuTab");
               });
			   
			   $('#lokesh').click(function() {
               $(this).removeClass("MenuTab");
                $(this).addClass("MenuTab-selected");
				$('#vivek').css("background","none");
				$('#vivek').css("box-shadow","none");
				$('#vivek').removeClass("MenuTab-selected");
                $('#vivek').addClass("MenuTab");
				$('#ashish').removeClass("MenuTab-selected");
                $('#ashish').addClass("MenuTab");
				$('#kumar').removeClass("MenuTab-selected");
                $('#kumar').addClass("MenuTab");
				$('#pooja').removeClass("MenuTab-selected");
                $('#pooja').addClass("MenuTab");
				$('#deepak').removeClass("MenuTab-selected");
                $('#deepak').addClass("MenuTab");
               });
			   
			   $('#deepak').click(function() {
               $(this).removeClass("MenuTab");
                $(this).addClass("MenuTab-selected");
				$('#vivek').css("background","none");
				$('#vivek').css("box-shadow","none");
				$('#vivek').removeClass("MenuTab-selected");
                $('#vivek').addClass("MenuTab");
				$('#ashish').removeClass("MenuTab-selected");
                $('#ashish').addClass("MenuTab");
				$('#kumar').removeClass("MenuTab-selected");
                $('#kumar').addClass("MenuTab");
				$('#pooja').removeClass("MenuTab-selected");
                $('#pooja').addClass("MenuTab");
				$('#lokesh').removeClass("MenuTab-selected");
                $('#lokesh').addClass("MenuTab");
               });
			
         });