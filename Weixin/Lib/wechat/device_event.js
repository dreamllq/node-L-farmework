/**
 * Created by lvliqi on 2016/7/26.
 */
module.exports = function (message, req, res, next) {
    // Reply with device event.
    // { ToUserName: 'gh_d3e07d51b513',
    // FromUserName: 'oPKu7jgOibOA-De4u8J2RuNKpZRw',
    // CreateTime: '1359125022',
    // MsgType: 'device_event',
    // Event: 'bind'
    // DeviceType: 'gh_d3e07d51b513'
    // DeviceID: 'dev1234abcd',
    // OpType : 0, //Available as Event is subscribe_status or unsubscribe_status.
    // Content: 'd2hvc3lvdXJkYWRkeQ==', //Available as Event is not subscribe_status and unsubscribe_status.
    // SessionID: '9394',
    // MsgId: '5837397520665436492',
    // OpenID: 'oPKu7jgOibOA-De4u8J2RuNKpZRw' }
}