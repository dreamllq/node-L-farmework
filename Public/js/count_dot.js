/**
 * Created by lvliqi on 2016/7/20.
 */
(function () {
    window.dot_count = function (type_name, uid) {
        var src = "/admin/common/count/dot?t=" + type_name + "&u=" + uid;
        var image = new Image();
        image.src = src;
    };
})();