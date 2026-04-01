const { exec } = require('child_process');

console.log("⏳ تسنى شوية، كنجربو السرعة ديال الكونيكسيون...");

exec('speedtest', (error, stdout, stderr) => {
  if (error) {
    console.log("❌ لقينا مشكل! غالبا برنامج 'speedtest' ما منسطاليش عندك.");
    console.log("تفاصيل المشكل: ", error.message);
    return;
  }
  if (stderr) {
    console.log("⚠️ كاين هاد الملاحظة: ", stderr);
    return;
  }
  
  console.log("✅ ها هي النتيجة ديال التيست:");
  console.log(stdout);
});
