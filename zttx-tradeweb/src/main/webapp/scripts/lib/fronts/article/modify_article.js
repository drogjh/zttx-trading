seajs.use(["$","widget","dialog","ajaxFileUpload","umeditor","umeditor_config","umdeitor_style","ztree"],function($,a,b,c){function d(a,b,c){$("#selected_cate").val(c.cateName).trigger("blur"),$("#cateId").val(c.refrenceId)}function e(){$("#tree_menu_con").show(),$("body").bind("mousedown",g)}function f(){$("#tree_menu_con").fadeOut("fast"),$("body").unbind("mousedown",g)}function g(a){"selected_cate"==a.target.id||"tree_menu_con"==a.target.id||$(a.target).parents("#tree_menu_con").length>0||f()}UM.getEditor("articleText",{initialFrameWidth:676,initialFrameHeight:500});baseFormValidator({selector:"#modify_help_form",isAjax:!0,beforeSubmitFn:function(){$.post("/fronts/articleInfo/save",$("#modify_help_form").serialize(),function(a){126e3==a.code?window.location.href="/fronts/articleInfo/list":remind("error","编辑失败")},"json")}});var h,i={view:{dblClickExpand:!1,showLine:!0,selectedMulti:!1},data:{simpleData:{enable:!0,idKey:"refrenceId",pIdKey:"parentId",rootPId:""},key:{name:"cateName"}},callback:{onClick:d}};$("#selected_cate").click(function(){e()}),$.post("/fronts/articleCate/tree",null,function(a){if(126e3==a.code&&($.fn.zTree.init($("#tree"),i,a.rows),h=$.fn.zTree.getZTreeObj("tree"),""!==$("#cateId").val())){var b=$("#cateId").val(),c=h.getNodeByParam("refrenceId",b).cateName;$("#selected_cate").val(c).trigger("blur")}},"json")});