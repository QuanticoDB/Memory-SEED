;(function($, window, document, undefined) {
  window.method = null;

  $(document).ready(function() {
    var input = $('#input');
    var output1 = $('#output1');
    var output2 = $('#output2');
    var inputByte = $('#input-byte');
    var outputByte1 = $('#output1-byte');
    var outputByte2 = $('#output2-byte');
    var sequen = $('#sequence');

    var execute = function() {
      try {
        var val = input.val();
        var seq = sequen.val().trim();
        if(seq.length > 0) splitInput(val, seq.split(' '));
        
        inputByte.text( input.val().length );
        outputLength1();
        outputLength2();
      } catch(e) {
        output.val(e);
      }
    }
    
    function onlyNumbers(seq) {
        return seq.every(element => {
            return !isNaN(element);
        });
    }
    
    function splitInput(inp, seq) {
        var seqLen = seq.length;
        var seqPos = 0;
        var step = 0;
        var out1 = '';
        var out2 = '';
        var out = '';
        
        output1.val(out1);
        output2.val(out2);
        
        if(!onlyNumbers(seq)) {
            output1.val('ERROR: the sequence must contain only numbers !!!');
            return false;
        }
        
        while(inp.length > 0) {
            if (seqPos == seqLen) seqPos = 0;
            out = inp.substr(0, seq[seqPos]);
            inp = inp.substr(seq[seqPos]);
            if (step) {
                out2 += out;
                step = 0;
            } else {
                out1 += out;
                step = 1;
            }
            seqPos++;
        }
        
        output1.val(out1);
        output2.val(out2);
    }
    
    function outputLength1() {
      outputByte1.text( output1.val().length );
    }
    
    function outputLength2() {
      outputByte2.text( output2.val().length );
    }

    function autoUpdate() {
      execute();
    }

    input.bind('input propertychange', autoUpdate);
    sequen.bind('input propertychange', autoUpdate);
    output1.bind('input propertychange', outputLength1);
    output2.bind('input propertychange', outputLength2);

  });
})(jQuery, window, document);
