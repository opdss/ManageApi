/**
 * Created by vanki on 16/5/1.
 */
$(function () {
    getTreeData();

    /**
     * 方法下拉选项值变换
     */
    $('.v_method_txt').click(function () {
        $('#j_method_selected_txt').html($(this).html());
    });
});

/**
 * 获取数形结构数据
 */
var getTreeData = function () {
    var data = [
        {
            text: "节点1",
            nodes: [
                {text: "节点1子节点1"}
            ]
        },
        {
            text: "节点2",
            nodes: [
                {text: "节点2子节点1"}
            ]
        }
    ];

    $('#j_body_left_tree').treeview({data: data});
}