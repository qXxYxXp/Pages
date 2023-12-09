function drawOmikuji() {
    // おみくじの結果
    var omikujiResults = {
        '大吉': {probability: 10, comment: 'やったね！'},
        '吉': {probability: 14, comment: '結構いい'},
        '中吉': {probability: 16, comment: 'いいよ〜'},
        '小吉': {probability: 22, comment: '良くも悪くも…といったところでしょうか'},
        '末吉': {probability: 18, comment: '悪くない'},
        '凶': {probability: 10, comment: '今日の運勢は凶です'},
        '大凶': {probability: 6, comment: '元気出せよ'},
        '諭吉': {probability: 3, comment: 'みんな大好き諭吉。もう製造はされていないみたい。'},
        'ガイ吉': {probability: 1, comment: ' ʅ( ՞ਊ՞)ʃ'}
    };

    // 確率の合計を計算
    var totalProbability = Object.values(omikujiResults).reduce((acc, result) => acc + result.probability, 0);

    // ランダムな値を生成
    var randomValue = Math.random() * totalProbability;

    // ランダムな値に基づいておみくじの結果を選択
    var result;
    var cumulativeProbability = 0;

    for (var key in omikujiResults) {
        cumulativeProbability += omikujiResults[key].probability;

        if (randomValue <= cumulativeProbability) {
            result = key;
            break;
        }
    }

    // 結果を表示
    var resultElement = document.getElementById('omikuji-result');
    var commentElement = document.getElementById('omikuji-comment');

    resultElement.innerText = result;
    commentElement.innerText = omikujiResults[result].comment;
}
