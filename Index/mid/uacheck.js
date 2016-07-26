/**
 * Created by lvlq on 16/3/28.
 */
module.exports = function (req, res, next) {
    var u = req.headers['user-agent'];
    req.browser = {
        is_mobile: !u.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i),
        is_webKit: u.indexOf('AppleWebKit') > -1,
        is_ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),
        is_iphone: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && u.indexOf('iPhone') > -1,
        is_ipad: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && u.indexOf('iPad') > -1,
        is_ipod: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) && u.indexOf('iPod') > -1,
        is_android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
        is_weixin: u.indexOf('MicroMessenger') > -1,
        is_txnews: u.indexOf('qqnews') > -1,
        is_sinawb: u.indexOf('weibo') > -1,
        is_mqq: u.indexOf('QQ') > -1
    };
    next();
};

