`use strict`

window.addEventListener('load', function() {
    retrieveSumPrice();
})

let createChart  = (data) => {
    let lineCtx = document.getElementById("lineChart");
        // 線グラフの設定
        let lineConfig = {
          type: 'line',
          data: {
            // ※labelとデータの関係は得にありません
            labels: Object.keys(data),
            datasets: [{
              label: '合 計',
              data: Object.values(data),
              borderColor: '#f88',
            }],
          },
          options: {
            scales: {
              // Y軸の最大値・最小値、目盛りの範囲などを設定する
              y: {
                suggestedMin: 0,
                suggestedMax: 40000,
                ticks: {
                  stepSize: 5000
                }
              }
            },
          },
          responsive: true, // グラフをレスポンシブにする
          maintainAspectRatio: false, // アスペクト比を維持しない
        };
        let lineChart = new Chart(lineCtx, lineConfig);
}

let createChart2  = (data) => {
    let barCtx = document.getElementById("barChart");
        // 線グラフの設定
        let barConfig = {
          type: 'bar',
          data: {
            // ※labelとデータの関係は得にありません
            labels: Object.keys(data),
            datasets: [{
              label: '合 計',
              data: Object.values(data),
              borderColor: '#f88',
            }],
          },
          options: {
            scales: {
              // Y軸の最大値・最小値、目盛りの範囲などを設定する
              y: {
                suggestedMin: 0,
                suggestedMax: 40000,
                ticks: {
                  stepSize: 5000
                }
              }
            },
          },
          responsive: true, // グラフをレスポンシブにする
          maintainAspectRatio: false, // アスペクト比を維持しない
        };
        let barChart = new Chart(barCtx, barConfig);
}

let retrieveSumPrice = () => {
    $.ajax({
        url: "/sumPrice",
        type: "POST",
        contentType: "application/json",
        dataType: "json"
    }).done(function(data) {
        console.log(data);
        createChart(data);
        createChart2(data);
    }).fail(function() {
        console.log('fail');
    })
}
