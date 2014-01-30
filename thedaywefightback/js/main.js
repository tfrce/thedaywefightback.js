setTimeout(function() {
    $('#first-slide').fadeOut(50, function() {
        $('#second-slide').fadeIn(50);
        $('.footer').fadeIn(50);

    })
}, 1000);
$('.call-form').on('submit', function(ev) {
    console.log('asdas');
    window.open('call-tool.html', "Share on Facebook", "width=800,height=800");
    return false;
})
$('.email-form').on('submit', function(ev) {
    console.log('asdas');
    window.open('email-tool.html', "Share on Facebook", "width=800,height=800");
    return false;
})