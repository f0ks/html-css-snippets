$(function() {

    var isDragging = false;
    var containerWidth = null;
    var offset = null;
    
    
    $('.dragbar').mousedown(function(e) {
        isDragging = true;
     
    });

    $('.container').mousemove(function(e) {
        
        
        containerWidth = $(this).width();
        
        if (isDragging) {
            offset = $(this).offset();
            $('.sidebar').width((containerWidth-(e.pageX - offset.left))); 
            
        }
 
    });
    
    $('body').mouseup(function(e){
       isDragging = false;
    });
});