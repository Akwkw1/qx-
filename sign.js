// QuantumultX 自动抓取认证 + 每日签到
const $ = new Env('APP自动签到');
const host = "bkbf.xn--vhqr42drhf5k7b.com";

const KEY_AUTH = "save_auth_str";
const KEY_TOKEN = "save_token_str";

// 抓包保存鉴权
if ($request) {
    let headers = $request.headers;
    let auth = headers['authentication'];
    let token = headers['x-token'];

    if (auth && token) {
        $.setData(auth, KEY_AUTH);
        $.setData(token, KEY_TOKEN);
        $.notify("捕获成功", "已保存登录凭证", "下次自动签到可用");
    }
    $done({});
} 
// 定时签到
else {
    let auth = $.getData(KEY_AUTH);
    let token = $.getData(KEY_TOKEN);

    if (!auth || !token) {
        $.notify("签到失败", "无凭证", "请先开一次APP抓包");
        $done();
        return;
    }

    let signUrl = `http://${host}/app/task/sign`;
    let headers = {
        "x-version": "2024-09-24",
        "user-agent": "Dart/3.6 (dart:io)",
        "appid": "4150439554430627",
        "content-type": "application/json; charset=utf-8",
        "authentication": auth,
        "x-token": token
    };

    $.post({
        url: signUrl,
        headers: headers,
        body: "{}",
        success: (ret) => {
            $.notify("今日签到成功", "返回结果", ret);
            $done();
        },
        fail: () => {
            $.notify("签到失败", "请求出错", "接口异常");
            $done();
        }
    });
}
