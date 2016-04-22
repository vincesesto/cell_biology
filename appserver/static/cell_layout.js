require(['jquery', 'splunkjs/mvc/simplexml/ready!'], function($) {
    var firstRow = $('.dashboard-row').first();
    var panelCells = $(firstRow).children('.dashboard-cell');
    $(panelCells[0]).css('width', '70%');
    $(panelCells[1]).css('width', '30%');
});

require([
    'jquery',
    'underscore',
    'splunkjs/mvc',
    'views/shared/results_table/renderers/BaseCellRenderer',
    'splunkjs/mvc/simplexml/ready!'
], function($, _, mvc, BaseCellRenderer) {
    var DataBarCellRenderer = BaseCellRenderer.extend({
        canRender: function(cell) {
            return (cell.field === 'percent');
        },
        render: function($td, cell) {
            $td.addClass('data-bar-cell').html(_.template('<div class="data-bar-wrapper"><div class="data-bar" style="width:<%- percent %>%"></div></div>', {
                percent: Math.min(Math.max(parseFloat(cell.value), 0), 100)
            }));
        }
    });
    mvc.Components.get('tableWithBar1').getVisualization(function(tableView) {
        tableView.addCellRenderer(new DataBarCellRenderer());
    });
});