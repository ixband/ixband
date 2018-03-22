/**
 * Common
 */
;(function ( $, $B ) {
    'use strict';

    //Category
    $( '.categories .category-name' ).on( 'click', function () {
        $( this ).parent().toggleClass( 'active' );
    });
    
    $( '.btn-category' ).on( 'click', function () {
        $( '#category-area' ).addClass( 'open' );
        $( 'body' ).addClass( 'open' );
    });
    
    $( '.btn-category-close' ).on( 'click', function () {
        $( '#category-area' ).removeClass( 'open' );
        $( 'body' ).removeClass( 'open' );
    });
    
    $( '.btn-search' ).on( 'click', function () {
        $( '.menu .search' ).toggleClass( 'open' );
    });

})( jQuery, ixBand );
