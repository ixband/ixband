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
            html = '';

        for ( var i = 0; i < length; ++i ) {
            var doc = docs[i],
                reg = new RegExp( keyword, 'i' );

            if ( reg.test(doc.title) || _.contains(doc.tags, keyword) ) {
                var item = [
                    '<li class="item">',
                        '<a href="' + doc.path + '">',
                            '<h3>' + doc.title + '</h3>',
                        '</a>',
                        '<div class="desc">' + doc.description + '</div>',
                    '</li>'
                ];

                html += item.join( '' );
            }
        }

        $result.html( html );
    }

    function drawNoResult ( keyword ) {

    }

})( jQuery, ixBand );