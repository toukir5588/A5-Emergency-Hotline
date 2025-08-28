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
const history = [];

function getNumberValue(id, serviceName, serviceNumber) {
  const element = document.getElementById(id).innerText;
  const convertToNumber = parseInt(element);
  const availableCoin = convertToNumber;
  if (availableCoin < 20) {
    alert("❌ আপনার পর্যাপ্ত কয়েন নেই");
    return;
  }
  const removeCoin = availableCoin - 20;
  const newAvailableCoin = (document.getElementById(id).innerText = removeCoin);
  alert("📞 calling " + serviceName + "    " + serviceNumber);

  const historyContainer = document.getElementById("history_container");
  historyContainer.innerText = "";
  for (const data of history) {
    const div = document.createElement("div");
    div.innerHTML = `<div id="history_child" class="flex justify-between items-center bg-[#e4e4e4c7] p-3 my-1.5 rounded-md">
              <div id="history_name">
                <h1>${data.name}</h1>
                <h2>${data.phone}</h2>
              </div>

              <div id="history_time">
                <h1>${data.date}</h1>
              </div>
            </div>
            `;
    historyContainer.appendChild(div);
  }
}

// ! start remove 20 coin section
document
  .getElementById("call_btn_card_1")
  .addEventListener("click", function () {
    const data = {
      name: "জাতীয় জরুরি সেবা",
      phone: "999",
      date: new Date().toLocaleTimeString(),
    };
    history.push(data);

    const serviceName = document.getElementById("service_name_1").innerText;
    const serviceNumber = document.getElementById("service_number_1").innerText;
    getNumberValue("live_coin", serviceName, serviceNumber);
  });

document
  .getElementById("call_btn_card_2")
  .addEventListener("click", function () {
    const data = {
      name: "পুলিশ",
      phone: "999",
      date: new Date().toLocaleTimeString(),
    };
    history.push(data);

    const serviceName = document.getElementById("service_name_2").innerText;
    const serviceNumber = document.getElementById("service_number_2").innerText;
    getNumberValue("live_coin", serviceName, serviceNumber);

    // console.log(history);
  });
