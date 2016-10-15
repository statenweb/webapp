jQuery( document ).ready( function( $ ) {

    var changeImgToBgDivWidget = function(){

        var $selector = $('.IDX-showcaseContainer');
        var selectorImgCount = $selector.length;

        var counter = 0;
        $selector.each( function(){
            counter ++;
            //turn img to div with background image related variables
            var $selectorImg  = $(this).find('img');
            var selectorSrc = $selectorImg.attr('src');
            var selectorClass = $selectorImg.attr('class');
            var selectorAlt = $selectorImg.attr('alt');
            var selectorStyle = $selectorImg.attr('style');
            var selectorLazy =  $selectorImg.attr('data-src');
            var $html = $('<div></div>');

            //to wrap all child divs in an A element related variables
            var urlToIDX = $(this).children('a').attr('href');
            var aElement = $('<a href="'+ urlToIDX +'" class="text-wrapper-link"></a>');

            $html.addClass(selectorClass)
                .addClass('property-image')
                .attr('alt', selectorAlt)
                .attr('style', selectorStyle);
            if(selectorLazy){
                selectorSrc = selectorLazy;
            }

            $html.css('background-image', 'url(' + selectorSrc + ')')
                .css('display', 'block')
                .css('opacity', '1');


            $selectorImg.replaceWith($html);

            $(this).children('div').wrapAll(aElement);

            if(counter === selectorImgCount ){

                $('.property-carousel-wrapper').css('visibility', 'visible');

            }
        });
    };

    //add select 2 to my form
    $('.select2-handle select').select2();

    $(window).load(function(){

        changeImgToBgDivWidget();

        //owl carousel is loaded with the IDX broker plugin
        $(".IDX-showcaseRow").owlCarousel({
            items: 3,
            itemsDesktop: [1199, 3],
            itemsDesktopSmall: [1096, 2],
            itemsTablet: [735, 1],
            navigation: true,
            navigationText: ["<i class=\"fa fa-caret-left\"></i><span>Prev</span>", "<i class=\"fa fa-caret-right\"></i><span>Next</span>"],
            pagination: false,
            lazyLoad: true,
            ddClassActive: true,
            itemsScaleUp: true
        });

    });


    $('.homepage-image-carousel').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });

    $('select[name="propertyType"]').on('change', function(){

        if( $(this).val() == 3){

            $lowPrice = $('select[name="low-price"]');
            $highPrice = $('select[name="high-price"]');

            $lowPrice.empty();
            $highPrice.empty();

            $lowPrice.append('<option value="0">Price Min</option>');
            $highPrice.append('<option value="1000">Price Max</option>');

            for( var i = 0; i <= 1000; i += 200 ){

                var html = '<option value="'+ i +'">';
                html += '$' + i;
                html += '</option>';

                $lowPrice.append(html);
                $highPrice.append(html);

            }

        } else{

            $lowPrice = $('select[name="low-price"]');
            $highPrice = $('select[name="high-price"]');

            $lowPrice.empty();
            $highPrice.empty();

            $lowPrice.append('<option value="0">Price Min</option>');
            $highPrice.append('<option value="2000000">Price Max</option>');

            for( i = 0; i <= 2000000; i += 100000 ){

                var html = '<option value="'+ i +'">';
                html += '$' + i;
                html += '</option>';

                $lowPrice.append(html);
                $highPrice.append(html);

            }

        }

    })


});
