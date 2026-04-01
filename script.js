document.getElementById('start-btn').addEventListener('click', function() {
    let resultDiv = document.getElementById('result');
    // غنبدلو الميساج باش نعلمو المستخدِم بلي غيتعطل شوية
    resultDiv.innerHTML = "جاري القياس... تسنى شوية ⏳<br><span style='font-size:14px; color:#666;'>التيست كياخد شوية دالوقت باش يعطي نتيجة دقيقة</span>";
    resultDiv.style.color = "#ffc107";
    
    // استعملنا تصويرة كبيرة ديال 10 ميڭا باش التيست يطول والسرعة تستقر
    let imageAddr = "https://upload.wikimedia.org/wikipedia/commons/f/ff/Pizigani_1367_Chart_10MB.jpg" + "?n=" + Math.random(); 
    let downloadSize = 10485760; // 10 MB بالبايت (Bytes)
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
        let duration = (endTime - startTime) / 1000; // الوقت بالثواني
        let bitsLoaded = downloadSize * 8; // نحولو لـ Bits
        let speedBps = (bitsLoaded / duration).toFixed(2);
        let speedKbps = (speedBps / 1024).toFixed(2);
        let speedMbps = (speedKbps / 1024).toFixed(2);
        
        // غنقصو 10% ديال Overhead باش نقربو للنتيجة الحقيقية ديال سيرفورات القياس
        let finalSpeed = (speedMbps * 0.90).toFixed(2);
        
        resultDiv.innerHTML = "السرعة ديالك هي: <br><span style='font-size:35px; color:#28a745;'>" + finalSpeed + " Mbps</span>";
    }
});
