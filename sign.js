// Quantumult X 自动每日签到
// hostname: bkbf.xn--vhqr42drhf5k7b.com
const $task = new $quantumultX();

// 固定请求头
const headers = {
  "x-version": "2024-09-24",
  "user-agent": "Dart/3.6 (dart:io)",
  "appid": "4150439554430627",
  "accept-encoding": "gzip",
  "content-type": "application/json; charset=utf-8",
  "authentication": "aREcvsIksAfuU6hUp/4LzpMYQ6emb2ikjo5VoVfDje50YisHWz+SURkSO+4ngwTENoSDHNA++RGjk8vpEZERBRAocatPxnJqC/gxYVPkhDDNu4iFQXEC+fri2K/OreDl",
  "x-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVVUlEIjoiNDIxNjJhY2QtMzVhMy00MWFhLTlmZmUtMjlhZWFkZWNiMWZiIiwiQnVmZmVyVGltZSI6ODY0MDAwMDAwMDAwMDAsImV4cCI6MTc3ODQyNTQ0OSwibmJmIjoxNzc3ODIwNjQ5fQ.24OOkwSaNNOyRBR_MJP4STaLsq1_tOQHGaskiqz1STU"
};

// 签到接口
const signUrl = "http://bkbf.xn--vhqr42drhf5k7b.com/app/task/sign";

(async function() {
  try {
    let res = await $task.fetch({
      url: signUrl,
      method: "POST",
      headers: headers,
      body: JSON.stringify({})
    });
    console.log("✅ 签到成功，返回：", res.body);
    $task.notify("自动签到", "执行完成", "已完成今日APP签到");
  } catch (e) {
    console.log("❌ 签到失败：", e);
    $task.notify("自动签到", "执行失败", "接口请求异常");
  }
  $task.done();
})();
