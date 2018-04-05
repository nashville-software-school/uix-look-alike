"use strict";

let $ = require('jquery');

console.log('main.js has arrived');

$( ".cookie" ).hover(
    function() {
      $( this ).addClass( 'd-none' );
      $( 'img' ).next().removeClass( 'd-none');
    }, function() {
      $( this ).removeClass( 'd-none' );
      $( 'img' ).next().addClass( 'd-none' );
    }
  );