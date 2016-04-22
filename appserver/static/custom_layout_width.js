require(['jquery', 'splunkjs/mvc/simplexml/ready!'], function($) {
    var firstRow = $('.dashboard-row').first();
    var panelCells = $(firstRow).children('.dashboard-cell');
    $(panelCells[0]).css('width', '70%');
    $(panelCells[1]).css('width', '30%');
});
