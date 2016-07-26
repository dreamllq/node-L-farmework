module.exports = {
    "imageActionName": "uploadimage",
    "imageFieldName": "file",
    "imageMaxSize": 2048000,
    "imageAllowFiles": [
        ".png",
        ".jpg",
        ".jpeg",
        ".gif",
        ".bmp"
    ],
    "imageCompressEnable": true,
    "imageCompressBorder": 1600,
    "imageInsertAlign": "none",
    "imageUrlPrefix": "",
    "imagePathFormat": "/Public/upload/{yyyy}{mm}{dd}/{time}{rand:6}"
}