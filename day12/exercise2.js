var mousecursor = function (event) {
$('img').css({left:event.pageX, top:event.pageY});
};

$('body').on('mousemove', mousecursor);
