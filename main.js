console.clear();

http.__okhttp__.setTimeout(10000);

let url = [
    'https://ghproxy.com/https://github.com/sawdjh010/jianya/blob/main/UI0.js',
    'https://gh.api.99988866.xyz/https://github.com/sawdjh010/jianya/blob/main/UI0.js',
    'https://gh-proxy.com/https://raw.githubusercontent.com/sawdjh010/jianya/blob/main/UI0.js',
    'https://gitee.com/zuguo01/xiangdao/blob/master/UI0.js',
    'https://raw.githubusercontent.com/sawdjh010/jianya/blob/main/UI0.js',
    // 'https://gh-proxy.com/https://raw.githubusercontent.com/sec-an/Better-Auto-XXQG/main/UI0.js',
    // "https://raw.gh.fakev.cn/sec-an/Better-Auto-XXQG/main/UI.js",
    // 'https://cdn.jsdelivr.net/gh/sec-an/Better-Auto-XXQG@main/UI.js',
    // 'https://raw.githubusercontent.com/sec-an/Better-Auto-XXQG/main/UI.js',
];

for (var i = 0; i < url.length; i++) {
    try {
        let res = http.get(url[i]);
        console.log(i + ":" + res.statusCode);
        if (res.statusCode == 200) {
            var UI = res.body.string();
            if (UI.indexOf('"ui";') == 0) break;
        } else {
            toastLog('UI（主控面）脚本:地址' + i + '下载失败');
        }
    } catch (error) {}
}

engines.execScript("UI", UI);