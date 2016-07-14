/**
 * Created by lvlq on 16/1/7.
 */
module.exports = {
    //数据库设置
    db_type: "mysql",
    db_host: "v.server",
    db_port: "3306",
    db_username: "marketing",
    db_password: "KJwkDHWKE_WEFJH_WEF",
    db_database: "dln",

    //缓存设置
    memory_type: "redis",
    memory_host: "v.server",
    memory_port: "6379",
    memory_username: "",
    memory_password: "",

    //request session设置
    session_store: true,
    session_store_type: "redis",
    session_store_host: "10.211.55.3",
    session_store_port: "6379",
    session_store_ttl: 60 * 60,

    //微信设置
    wx_local: true,
    wx_app_id: "wx8072c0c623334d0b",
    wx_app_secret: "5891403666796c6225f88b672d7e25fb",
    wx_token: "",
    wx_encode_aes_key: "",
    wx_name: "farmework"
};