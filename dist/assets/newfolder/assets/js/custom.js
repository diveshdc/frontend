AOS.init();

(function($) {
    'use strict';

    //Avoid pinch zoom on iOS 
    document.addEventListener('touchmove', function(event) {
        if (event.scale !== 1) {
            event.preventDefault();
        }
    }, false);

    jQuery(window).on("load", function(e) {
        //mobileElements(); 

        setTimeout(function() {
            jQuery('.mainloader').hide();
        }, 1000);

    });

    $(function() {
        'use strict';

        var lastpos,
            $header = $('header');

        $(window).scroll(function() {
            var winpos = $(window).scrollTop();

            if (winpos < lastpos) {
                $header.addClass('moveon');
                $header.removeClass('moveout');
            } else {
                $header.addClass('moveout');
                $header.removeClass('moveon');
            }

            if (winpos < $header.height()) {
                if ($header.hasClass('moveon'))
                    $header.addClass('moveon');
            }
            lastpos = $(document).scrollTop();

        });
    });
    





})(jQuery)


jQuery(document).ready(function() {
    var btn = jQuery('#top_arrow');

    jQuery(window).scroll(function() {
        if (jQuery(window).scrollTop() > 500) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function(e) {
        e.preventDefault();
        jQuery('html, body').animate({ scrollTop: 0 }, '300');
    });

    // jQuery(".video-tagg").get(0).play();
 
// help support box

    jQuery('#help-ssupport-block').click(function(){
        setTimeout(function(){
            jQuery('.chat-support-wrap').toggleClass('show');
         }, 500);
    });
    jQuery('.chat-support-wrap .chat-close-btn').click(function(){
        setTimeout(function(){
            jQuery('.chat-support-wrap').removeClass('show');
         }, 500);
    });



    
});

function bodyPadTop() 
{
  var HOuter = jQuery('.navbar').outerHeight();
  var fHOuter = jQuery('footer').outerHeight(); 
  jQuery('body').css('padding-top', HOuter); 
  jQuery('body.full-height').css('padding-bottom', fHOuter); 
}
 
jQuery(document).ready(function(){
  bodyPadTop(); 

//   if ($('.selectpicker').length > 0) { 
//   $(function(){
//     $('.selectpicker').selectpicker();
// });
// }
});
// help support box

// dropdoen
jQuery(document).on('click.bs.dropdown.data-api', '.dropdown.keep-inside-clicks-open', function(e) {
    e.stopPropagation();
});

// textarea first letter capitalize 

jQuery('.firstCap').on('keypress', function(event) {
    var $this = jQuery(this),
        thisVal = $this.val(),
        FLC = thisVal.slice(0, 1).toUpperCase();
    con = thisVal.slice(1, thisVal.length);
    jQuery(this).val(FLC + con);
});



// custom select box
jQuery(".custom_select_field").each(function() {
    var classes = jQuery(this).attr("class"),
        id = jQuery(this).attr("id"),
        name = jQuery(this).attr("name");
    var template = '<div class="' + classes + '">';
    template += '<span class="custom-select-trigger">' + jQuery(this).attr("placeholder") + '</span>';
    template += '<div class="custom-options">';
    jQuery(this).find("option").each(function() {
        template += '<span class="custom-option ' + jQuery(this).attr("class") + '" data-value="' + jQuery(this).attr("value") + '">' + jQuery(this).html() + '</span>';
    });
    template += '</div></div>';

    jQuery(this).wrap('<div class="custom-select-wrapper"></div>');
    jQuery(this).hide();
    jQuery(this).after(template);
});
jQuery(".custom-option:first-of-type").hover(function() {
    jQuery(this).parents(".custom-options").addClass("option-hover");
}, function() {
    jQuery(this).parents(".custom-options").removeClass("option-hover");
});
jQuery(".custom-select-trigger").on("click", function() {
    jQuery('html').one('click', function() {
        jQuery(".custom_select_field").removeClass("opened");
    });
    jQuery(this).parents(".custom_select_field").toggleClass("opened");
    event.stopPropagation();
});
jQuery(".custom-options").find(".custom-option:first-of-type").addClass("selection");

jQuery('.custom_select_field').find(".custom-select-trigger").text(jQuery(this).find('.custom-option:first-of-type').text());

jQuery('div.tab-pane').each(function() {
    jQuery(this).find(".custom-select-trigger").text(jQuery(this).find('.custom-option:first-of-type').text());
});
jQuery('.custom_select_field ').each(function() {
    jQuery(this).find(".custom-select-trigger").text(jQuery(this).find('.custom-option:first-of-type').text());
});
jQuery(".custom-option").on("click", function() {
    jQuery(this).parents(".custom-select-wrapper").find("select").val(jQuery(this).data("value"));
    jQuery(this).parents(".custom-options").find(".custom-option").removeClass("selection");
    jQuery(this).addClass("selection");
    jQuery(this).parents(".custom_select_field").removeClass("opened");
    jQuery(this).parents(".custom_select_field").find(".custom-select-trigger").text(jQuery(this).text());
});



// select placehoder jquery

jQuery(".selec_place").change(function() {
    if (jQuery(this).val() == "0") jQuery(this).addClass("empty");
    else jQuery(this).removeClass("empty")
});
jQuery(".selec_place").change();




function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();
        reader.onload = function(e) {
            jQuery('#imagePreview').css('background-image', 'url(' + e.target.result + ')');
            jQuery('#imagePreview').hide();
            jQuery('#imagePreview').fadeIn(650);
        }
        reader.readAsDataURL(input.files[0]);
    }
}
jQuery("#imageUpload").change(function() {
    readURL(this);
});



