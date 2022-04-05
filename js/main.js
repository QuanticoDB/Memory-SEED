;(function($, window, document, undefined) {
  window.method = null;

  $(document).ready(function() {
    var input = $('#input');
    var output = $('#output');
    var inputByte = $('#input-byte');
    var outputByte = $('#output-byte');
    var option = $('[data-option]');

    var execute = function() {
      try {
        var val = input.val();
        output.val(method(val, option.val()));
        inputByte.text( input.val().length );
        outputLength();
      } catch(e) {
        output.val(e);
      }
    }
    
    function outputLength() {
      outputByte.text( output.val().length );
    }

    function autoUpdate() {
      execute();
    }

    input.bind('input propertychange', autoUpdate);
    option.bind('input propertychange', autoUpdate);
    output.bind('input propertychange', outputLength);

  });
})(jQuery, window, document);
