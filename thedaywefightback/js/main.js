setTimeout(function() {
    $('#first-slide').fadeOut(50, function() {
        $('#second-slide').fadeIn(50);
        $('.footer').fadeIn(50);

    })
}, 1000);
$('.call-form').on('submit', function(ev) {
    console.log('asdas');
    window.open('call-tool.html', "Share on Facebook", "width=650,height=500");
    return false;
})
