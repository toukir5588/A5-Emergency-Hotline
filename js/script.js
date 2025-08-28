const hearts = document.querySelectorAll(".fa-heart");
for (const heart of hearts) {
  heart.addEventListener("click", function () {
    const availableHeart = parseInt(
      document.getElementById("live_heart").innerText
    );
    const addHeart = availableHeart + 1;
    const newHeart = (document.getElementById("live_heart").innerText =
      addHeart);
    console.log(newHeart);
  });
}
// ! end improve heart count section

// ? call btn click function
function getNumberValue(id, serviceName, serviceNumber) {
  const element = document.getElementById(id).innerText;
  const convertToNumber = parseInt(element);
  const availableCoin = convertToNumber;
  if (availableCoin < 20) {
    alert("❌ আপনার পর্যাপ্ত কয়েন নেই");
    return;
  } else {
    const removeCoin = availableCoin - 20;
    const newAvailableCoin = (document.getElementById(id).innerText =
      removeCoin);
    alert("📞 calling " + serviceName + "    " + serviceNumber);
    return newAvailableCoin;
  }
}

// ! start remove 20 coin section
document
  .getElementById("call_btn_card_1")
  .addEventListener("click", function () {
    const serviceName = document.getElementById("service_name_1").innerText;
    const serviceNumber = document.getElementById("service_number_1").innerText;
    getNumberValue("live_coin",serviceName,serviceNumber);
  });
document
  .getElementById("call_btn_card_2")
  .addEventListener("click", function () {
    const serviceName = document.getElementById("service_name_2").innerText;
    const serviceNumber = document.getElementById("service_number_2").innerText;
    getNumberValue("live_coin",serviceName,serviceNumber);
  });
