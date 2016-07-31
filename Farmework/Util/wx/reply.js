/**
 * Created by lvlq on 16/7/30.
 */
module.exports.text = function (text) {
    return {
        content: text,
        type: 'text'
    }
};

module.exports.music = function (options) {
    return {
        type: "music",
        content: {
            title: options.title,
            description: options.description,
            musicUrl: options.musicUrl,
            hqMusicUrl: options.hqMusicUrl,
            thumbMediaId: options.thumbMediaId
        }
    }
};

module.exports.news = function () {
    return [
        {
            title: '你来我家接我吧',
            description: '这是女神与高富帅之间的对话',
            picurl: 'http://nodeapi.cloudfoundry.com/qrcode.jpg',
            url: 'http://nodeapi.cloudfoundry.com/'
        }
    ];
};

module.exports.image = function (mediaId) {
    return {
        type: "image",
        content: {
            mediaId: mediaId
        }
    }
};

module.exports.voice = function (mediaId) {
    return {
        type: "voice",
        content: {
            mediaId: mediaId
        }
    }
};

module.exports.video = function (options) {
    return {
        type: "video",
        content: {
            title: options.title,
            description: options.description,
            mediaId: options.mediaId
        }
    }
};

//回复设备社交功能消息
module.exports.hardware = function () {
    return {
        type: 'hardware',
        HardWare: {
            MessageView: 'myrank',
            MessageAction: 'ranklist'
        }
    }
};