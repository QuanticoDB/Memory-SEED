function copyData(id) {
    var data = $('#' + id).val();
    navigator.clipboard.writeText(data);
    $('#' + id + '-tooltip').text('COPIED');
}

function copyWord(id) {
    var data = $('#' + id).text().split('COPY');
    navigator.clipboard.writeText(data[0]);
    $('#' + id + '-tooltip').text('COPIED');
}

function tooltipMessage(id) {
    if(id == 'input') var msg = 'COPY Input';
    else if(id == 'output') var msg = 'COPY Output';
    else if(id == 'output1') var msg = 'COPY Output 1';
    else if(id == 'output2') var msg = 'COPY Output 2';
    else if(id == 'word1') var msg = 'COPY Word 1';
    else if(id == 'word2') var msg = 'COPY Word 2';
    else if(id == 'word3') var msg = 'COPY Word 3';
    else if(id == 'word4') var msg = 'COPY Word 4';
    else if(id == 'word5') var msg = 'COPY Word 5';
    else if(id == 'word6') var msg = 'COPY Word 6';
    else if(id == 'word7') var msg = 'COPY Word 7';
    else if(id == 'word8') var msg = 'COPY Word 8';
    else if(id == 'word9') var msg = 'COPY Word 9';
    else if(id == 'word10') var msg = 'COPY Word 10';
    else if(id == 'word11') var msg = 'COPY Word 11';
    else if(id == 'word12') var msg = 'COPY Word 12';
    else if(id == 'word13') var msg = 'COPY Word 13';
    else if(id == 'word14') var msg = 'COPY Word 14';
    else if(id == 'word15') var msg = 'COPY Word 15';
    else if(id == 'word16') var msg = 'COPY Word 16';
    else if(id == 'word17') var msg = 'COPY Word 17';
    else if(id == 'word18') var msg = 'COPY Word 18';
    else if(id == 'word19') var msg = 'COPY Word 19';
    else if(id == 'word20') var msg = 'COPY Word 20';
    else if(id == 'word21') var msg = 'COPY Word 21';
    else if(id == 'word22') var msg = 'COPY Word 22';
    else if(id == 'word23') var msg = 'COPY Word 23';
    else if(id == 'word24') var msg = 'COPY Word 24';
    $('#' + id + '-tooltip').text(msg);
}