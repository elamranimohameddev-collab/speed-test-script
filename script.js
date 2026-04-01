document.getElementById('start-btn').addEventListener('click', function() {
    let resultDiv = document.getElementById('result');
    resultDiv.innerHTML = "جاري القياس... تسنى شوية ⏳";
    resultDiv.style.color = "#ffc107"; // لون صفر باش يبان راه خدام
    
    // تصويرة باش نتيستيو بيها السرعة
    let imageAddr = "https://upload.wikimedia.org/wikipedia/commons/3/3a/Cat03.jpg" + "?n=" + Math.random(); 
    let downloadSize = 1350000; // الحجم ديالها التقريبي بالـ Bytes
    let startTime, endTime;
    let download = new Image();

    download.onload = function() {
        endTime = (new Date()).getTime();
        showResults();
    }
    
    download.onerror = function() {
        resultDiv.innerHTML = "وقع شي مشكل فالقياس، عاود جرب.";
        resultDiv.style.color = "red";
    }

    startTime = (new Date()).getTime();
    download.src = imageAddr;

    function showResults() {
        let duration = (endTime - startTime) / 1000; // شحال ديال الثواني
        let bitsLoaded = downloadSize * 8;
        let speedBps = (bitsLoaded / duration).toFixed(2);
        let speedKbps = (speedBps / 1024).toFixed(2);
        let speedMbps = (speedKbps / 1024).toFixed(2);
        
        resultDiv.innerHTML = "السرعة ديالك هي: <br><span style='font-size:35px; color:#28a745;'>" + speedMbps + " Mbps</span>";
    }
});
 
