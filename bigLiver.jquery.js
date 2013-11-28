(function($) {
 
    $.bigLiver = function(element, options) {
 
        var plugin = this;
 
        plugin.settings = {}
 
        var $element = $(element),
             element = element;
             
        var defaults = {
        }
        
        plugin.init = function() {
            plugin.settings = $.extend({}, defaults, options);
        }
        
        plugin.resize = function() {
            $(element).css('float','left');
            $(element).css('white-space', 'nowrap');
            var parent_width = $(element).parent().width();
            var percentage = parent_width/$(element).width();
             $(element).css('line-height', Math.floor(parseInt($(element).css('font-size')) * percentage) + 'px');
            $(element).css('font-size', Math.floor(parseInt($(element).css('font-size')) * percentage));
        }
        
        plugin.init();
        
        
 
    }
 
    $.fn.bigLiver = function(options) {
 
        return this.each(function() {
            if (undefined == $(this).data('bigLiver')) {
                var plugin = new $.bigLiver(this, options);
                $(this).data('bigLiver', plugin);
                $(this).after('<div style="clear:both;"></div>');
            }
            $(this).data('bigLiver').resize();
            $(window).bind('resize.bigLiver', $(this).data('bigLiver').resize );
        });
 
    }
 
})(jQuery);
