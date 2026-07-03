function check(answer) {
  const resultText = document.getElementById("result");
  const winImage = document.getElementById("winImage");
  const nextBtn = document.getElementById("nextRoomBtn");

  if (answer === 2) {
    // اگر جواب درست بود
    resultText.textContent = "✅ پاسخ شما صحیح است! در باز شد.";
    resultText.style.color = "#2ecc71";

    winImage.style.display = "block";
    nextBtn.style.display = "block"; // نمایش دکمه اتاق دوم
  } else {
    // اگر جواب غلط بود
    resultText.textContent = "❌ پاسخ اشتباه است. دوباره تلاش کنید.";
    resultText.style.color = "#e74c3c";

    winImage.style.display = "none";
    nextBtn.style.display = "none"; // مخفی کردن دکمه اگر کاربر دوباره غلط زد
  }
}

// تابع برای رفتن به اتاق دوم
function goToRoom2() {
  // اینجا می‌توانید آدرس فایل اتاق دوم را بنویسید
  window.location.href = "room2.html";
}
