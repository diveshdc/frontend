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

        // setTimeout(function() {
        //     jQuery('.mainloader').hide();
        // }, 1000);
        $(".se-pre-con").fadeOut("slow");

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

// show error message function
function printErrorMsg (msg) {
            $(".print-error-msg").find("ul").html('');
            $(".print-error-msg").css('display','block');
            $.each( msg, function(key, value ) {
                $(".print-error-msg").find("ul").append('<li>'+value+'</li>');
            });
        }

<!--SMOOTH SCROLL FUNCTION-->

    // $('a[href*=#]:not([href=#])').click(function()
    // {
    //     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
    //         || location.hostname == this.hostname)
    //     {
    //         var target = $(this.hash),
    //             headerHeight = $(".primary-header").height() + 5; // Get fixed header height
    //             target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    //
    //         if (target.length)
    //         {
    //             $('html,body').animate({
    //                 scrollTop: target.offset().top - 0
    //             }, 500);
    //             return false;
    //         }
    //     }
    // });

    function ckeckPostCode($this) {
        console.log($("input[name=post_code]").val());
             $.ajax({
                    headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
                    type: 'POST',
                    url: 'user/check-post-code', //Make sure your URL is correct
                    dataType: 'json', //Make sure your returning data type dffine as json
                    data: {
                        'post_code':$("input[name=post_code]").val(),
                    },
                    beforeSend: function(){
                        // Show loader container
                        $("#go_find").hide();
                        // $("#post_code_button").attr("disabled", true);
                        $("#check_postcode_loader").show();
                    },
                    success: function(response){
                        console.log(response,'responseresponseresponse');
                       if($.isEmptyObject(response.error) && response.status === true){
                            $('.post-code-error').hide();
                            document.getElementById('street').value= response.data.route;
                            document.getElementById('town').value= response.data.postal_town;
                        console.log(response.data.postal_town,'pooopooooo')
                            $("#check_postcode_loader").hide();
                           $("#go_find").show();
                            // window.location.href = "signup";
                        }else if(response.status === 'notFullCode'){
                            $("#check_postcode_loader").hide();
                            $("#go_find").show();
                            console.log(response.message);
                            printErrorMsg(response.message)
                        }
                       else if(!$.isEmptyObject(response.error)) {
                        console.log('oiuoiuo');
                            $("#check_postcode_loader").hide();
                            $("#go_find").show();
                             printErrorMsg(response.error)
                       }else{
                            printErrorMsg(response.error);
                            }
                    },
                    error:function(response){
                         printErrorMsg(response.error);
                    },
                    done: function (data) {
                        alert('dasdas============');
                        
                    }
                });
            }

// $('#go_find').click(function(){
//   var autocomplete;
//   var geocoder;
//   let input = document.getElementById('location');
//   var options = {
//     componentRestrictions: {'country':'uk'},
//     types: ['(cities)'] // (regions)
//   };
//   autocomplete = new google.maps.places.Autocomplete(input,options);
//     console.log(autocomplete,'dasdasdasdasdadasdasdasd');

//  // $('#go_find').click(function(){
//     var location = autocomplete.getPlace();
//     geocoder = new google.maps.Geocoder();
//     console.log(location['geometry'])
//     lat = location['geometry']['location'].lat();
//     lng = location['geometry']['location'].lng();
//     var latlng = new google.maps.LatLng(lat,lng);

//     // http://stackoverflow.com/a/5341468
//     geocoder.geocode({'latLng': latlng}, function(results) {
//         console.log(results);
//       for(i=0; i < results.length; i++){

//           for(var j=0;j < results[i].address_components.length; j++){
//               for(var k=0; k < results[i].address_components[j].types.length; k++){
//                     console.log(results[i].address_components[j].types[k],'------')
//                   if(results[i].address_components[j].types[k] == "postal_code"){
//                       zipcode = results[i].address_components[j].short_name;
//                       console.log(zipcode,'zipcode');
//                       $('#post_code').html(zipcode);      
//                   }
//                   if(results[i].address_components[j].types[k] == "country"){
//                       country = results[i].address_components[j].short_name;
//                       $('#country').html(country,'ppp');      
//                   }
//                   if(results[i].address_components[j].types[k] == "postal_town"){
//                       postal_town = results[i].address_components[j].short_name;
//                       $('#town').html(postal_town,'postal_town');      
//                   }
//               }
//           }
//       }
//     });
    
//   // });
// });

// function getProductByCatId(catId) {
//         $.ajax({
//                 headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
//                 type: 'post',//Make sure your returning data type dffine as json
//                 url: '/productsbyid/'+catId,//Make sure your URL is correct
//                 dataType: 'json',
//                 beforeSend: function(){
//                     // Show loader container
//                 $(".se-pre-con").show();
//                 },
//                 success: function(response){
//                    if(response.status === true){
//                         $(".se-pre-con").hide();
//                         $('#response_html').html(response.html);
//                     }else if(response.status === false){
//                         $(".se-pre-con").hide();
//                         }
//                 },
//                 error:function(response){
//                      printErrorMsg(response.error);
//                 },
//                 done: function (data) {
//                     alert('dasdas============');                        
//                 }
//             });
//     }

      var page = 1;
    // $(window).scroll(function() {
    //     if($(window).scrollTop() + $(window).height() >= $(document).height()) {
    //         page++;
    //     loadMoreData(page);
    //     }
    // });
    // function loadMoreData(page){
    //     let catId = "<?php echo $category['id']; ?>";
    //     let cat = getCatId(this);
    //     console.log(cat,'dasdasdasdasdadd');
    //   $.ajax(
    //         {
    //             headers: {'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')},
    //             // url: '?page=' + page,
    //             // type: "get",
    //             type: 'post',//Make sure your returning data type dffine as json
    //             url: '/productsbyid/'+catId+'?page='+page,
    //             beforeSend: function(){
    //                // $(".se-pre-con").show();
    //                 $('.ajax-load').show();
    //             }
    //         })
    //         .done(function(data)
    //         {
    //             if(data.html == " "){
    //                 $('.ajax-load').html("No more records found");
    //                 return;
    //             }
    //              // $(".se-pre-con").hide();
    //               $('.ajax-load').hide();
    //             $("#response_html").append(data.html);
    //         })
    //         .fail(function(jqXHR, ajaxOptions, thrownError)
    //         {
    //               alert('server not responding...');
    //         });
    // }