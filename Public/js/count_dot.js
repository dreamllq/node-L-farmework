/**
 * Created by lvliqi on 2016/7/20.
 */
(function () {
    window.dot_count = function (type_name, uid) {
        uid = uid || '';
        var src = "/index/common/count/dot?t=" + type_name + "&u=" + uid;
        new Image().src = src;
    };
})();