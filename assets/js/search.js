/**
 * Documentation Search
 */
;(function ( $, $B ) {
    'use strict';

    var keyword = $B.utils.urlParam( 'keyword' );

    if ( keyword ) {
        keyword = decodeURIComponent( keyword );
        $( '.search input[type=search]' ).val( keyword );

        $.ajax({
            //cache: false,
            url: UI.BASE_URL + '/search.json'
        }).done(function ( data ) {
            drawList( keyword, data.docs );
        }).fail(function () {
            drawNoResult ( keyword );
        });
    }

    function drawList ( keyword, docs ) {
        var $result = $( '.result > ul' ),
            length = docs.length,
            reg = new RegExp( keyword, 'i' ),
            html = '';

        for ( var i = 0; i < length; ++i ) {
            var doc = docs[i];

            if ( reg.test(doc.title) || _.contains(doc.tags, keyword) || match(reg, doc.description) ) {
                var item = [
                    '<li class="item">',
                        '<a href="' + doc.path + '">',
                            '<h3>' + doc.title + '</h3>',
                        '</a>',
                        '<div class="desc">',
                            decodeURIComponent( doc.description.join('<br>') ),
                        '</div>',
                    '</li>'
                ];

                html += item.join( '' );
            }
        }

        $result.html( html );
    }

    function drawNoResult ( keyword ) {
        $( '.result' ).html( '<span class="keyword">"' + keyword  + '"</span> 의 대한 검색 결과가 없습니다.' );
    }

    function match ( reg, ary ) {
        var result = false,
            length = ary.length;

        for ( var i = 0; i < length; ++i ) {
            if ( reg.test(ary[i]) ) {
                result = true;
                break;
            }
        }

        return result;
    }

})( jQuery, ixBand );