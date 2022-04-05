;(function($, window, document, undefined) {
  window.method = null;

  $(document).ready(function() {
    var input = $('#input');
    var output = $('#output');
    var inputByte = $('#input-byte');
    var outputByte = $('#output-byte');

    var execute = function() {
      try {
        var val = input.val();
        
        if (!val.match(/^[0-9a-fA-F]+$/)) {
            output.val('ERROR: input is not a hex string !!!');
            return false;
        }
        if (val.length != 32) {
            output.val('ERROR: input length is not 32 byte !!!');
            return false;
        }
        
        sha256(val).then(function(digest) {
            var lastbin = hex2bin(digest.substr(0,1)).substr(4,4); 
            var seed = "";
            var bin = "";
            var pos = 0;
            
            for (var i=0; i<val.length; i+=2) {
                bin += hex2bin(val.substr(i,2));
            }   bin += lastbin;
        
            for (var i=0; i<bin.length; i+=11) {
                var dec = parseInt(bin.substr(i,11), 2);
                seed += WordList[dec] + ' '; pos++;
                $('#word' + pos).html(WordList[dec] + '<span class="tooltiptext" id="word' + pos + '-tooltip">COPY Word ' + pos + '</span>');
            }
            
            output.val( seed.trim() );
            inputByte.text( input.val().length );
            outputByte.text( output.val().length );
        });
      } catch(e) {
        output.val(e);
      }
    }

    function autoUpdate() {
      execute();
    }

    input.bind('input propertychange', autoUpdate);
  });
})(jQuery, window, document);
