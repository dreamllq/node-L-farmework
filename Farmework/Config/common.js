/**
 * Created by lvlq on 16/1/7.
 */
module.exports = {
    //数据库设置
    db_type: "mysql",
    db_host: "577691d22b8e8.bj.cdb.myqcloud.com",
    db_port: "13163",
    db_username: "root",
    db_password: "lvliqi1234",
    db_database: "first",

    //缓存设置
    memory_type: "redis",
    memory_host: "127.0.0.1",
    memory_port: "6379",
    memory_username: "",
    memory_password: "",

    //request session设置
    session_store: true,
    session_store_type: "redis",
    session_store_host: "127.0.0.1",
    session_store_port: "6379",
    session_store_ttl: 60 * 60,

    //微信设置
    wx_local: true,
    wx_app_id: "wx8072c0c623334d0b",
    wx_app_secret: "5891403666796c6225f88b672d7e25fb",
    wx_token: "some token",
    wx_encode_aes_key: "",
    wx_name: "farmework",

    upload: {
        path: __dirname + "/../../Public/upload",
        url_base: "/Public/upload"
    },

    qiniu: {
        access_key: 'NPGtMY48QJz8vu19E_8fSvl4g20tdmgEZuE5-N9X',
        secret_key: 'H1ASMSC27erE19ebNaH53PNDYVHDmnsqeafiYSR-',
        up_host: 'http://up-z1.qiniu.com',
        bucket: 'file',
        cdn_host: "http://cdn.xfoody.com"
    }
};