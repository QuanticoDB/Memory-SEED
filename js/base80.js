;(function($, window, document, undefined) {
  window.method = null;

  $(document).ready(function() {
    var input = $('#input');
    var output = $('#output');
    var inputByte = $('#input-byte');
    var outputByte = $('#output-byte');
    var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*%&£$@#()[]=+-_.,;:?!|'.split('');

    var execute = function() {
      try {
        var val = input.val();
        var bin = asiiToBin(val);
        output.val( binTo80(bin) );
        inputByte.text( input.val().length );
        outputLength();
      } catch(e) {
        output.val(e);
      }
    }
    
    function asiiToBin(inp) {
        var out = '';
        for (i=0; i < inp.length; i++)
            out += inp[i].charCodeAt(0).toString(2);

        return out;
    }
    
    function binTo80(inp) {
        var out = '';
        while(inp.length > 0){
            var bin = inp.substr(0, 7);
            var dec = parseInt(bin, 2);
            inp = inp.substr(7);
            if (dec > 79) {
                dec -= 80;
                bin = inp.substr(0, 5);
                inp = inp.substr(5); 
                if(inp.length > 0) dec += parseInt(bin, 2);
            }
            out += code[dec]; 
        }
        return out;
    }
    
    function outputLength() {
      outputByte.text( output.val().length );
    }

    function autoUpdate() {
      execute();
    }

    input.bind('input propertychange', autoUpdate);
    output.bind('input propertychange', outputLength);
    
  });
})(jQuery, window, document);
