/**
 * Common
 */
;(function ( $, $B ) {
    'use strict';

    //Category
    $( '.categories .category-name' ).on( 'click', function () {
        $( this ).parent().toggleClass( 'active' );
    });

})( jQuery, ixBand );