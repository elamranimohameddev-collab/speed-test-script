document.getElementById('start-btn').addEventListener('click', function() {
    let btn = document.getElementById('start-btn');
    let loader = document.getElementById('loader');
    let resultBox = document.getElementById('result-box');
    let speedResult = document.getElementById('speed-result');

    // نخبيو البوطونة والنتيجة القديمة، ونبينو الدائرة اللي كتدور
    btn.style.display = 'none';
    resultBox.style.display = 'none';
    loader.style.display = 'block';

    let imageAddr = "https://upload.wikimedia.org/wikipedia/commons/f/ff/Pizigani_1367_Chart_10MB.jpg" + "?n=" + Math.random(); 
    let downloadSize = 10485760; // 10 MB
    let startTime, endTime;
    let download = new Image();

    download.onload = function() {
        endTime = (new Date()).getTime();
        showResults();
    }
    
    download.onerror = function() {
        loader.style.display = 'none';
        btn.style.display = 'inline-block';
        btn.innerText = "وقع مشكل، عاود جرب";
        btn.style.background = "#e74c3c"; // يولي حمر إيلا كاين إيرور
    }

    startTime = (new Date()).getTime();
    download.src = imageAddr;

    function showResults() {
        let duration = (endTime - startTime) / 1000;
        let bitsLoaded = downloadSize * 8;
        let speedBps = (bitsLoaded / duration).toFixed(2);
        let speedKbps = (speedBps / 1024).toFixed(2);
        let speedMbps = (speedKbps / 1024).toFixed(2);
        
        let finalSpeed = (speedMbps * 0.90).toFixed(2);
        
        // نخبيو الدائرة ونبينو النتيجة
        loader.style.display = 'none';
        resultBox.style.display = 'block';
        speedResult.innerHTML = finalSpeed + " <span class='speed-unit'>Mbps</span>";
        
        // نرجعو البوطونة باش يقدر يعاود التيست
        btn.style.display = 'inline-block';
        btn.innerText = "عاود التيست";
    }
});
