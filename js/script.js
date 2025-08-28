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
    div.innerHTML = `<div id="history_child" class="flex justify-between items-center bg-[#e4e4e4c7] p-3 my-2 rounded-md">
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

// ! start call btn function
// * National Emergency
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

// * Police
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

  });

// * Fire Service
document
  .getElementById("call_btn_card_3")
  .addEventListener("click", function () {
    const data = {
      name: "ফায়ার সার্ভিস",
      phone: "999",
      date: new Date().toLocaleTimeString(),
    };
    history.push(data);

    const serviceName = document.getElementById("service_name_3").innerText;
    const serviceNumber = document.getElementById("service_number_3").innerText;
    getNumberValue("live_coin", serviceName, serviceNumber);

  });

  // * অ্যাম্বুলেন্স
document
  .getElementById("call_btn_card_4")
  .addEventListener("click", function () {
    const data = {
      name: "অ্যাম্বুলেন্স",
      phone: "1994-999999",
      date: new Date().toLocaleTimeString(),
    };
    history.push(data);

    const serviceName = document.getElementById("service_name_4").innerText;
    const serviceNumber = document.getElementById("service_number_4").innerText;
    getNumberValue("live_coin", serviceName, serviceNumber);

  });

    // * নারী ও শিশু সহায়তা
document
  .getElementById("call_btn_card_5")
  .addEventListener("click", function () {
    const data = {
      name: "নারী ও শিশু সহায়তা",
      phone: "109",
      date: new Date().toLocaleTimeString(),
    };
    history.push(data);

    const serviceName = document.getElementById("service_name_5").innerText;
    const serviceNumber = document.getElementById("service_number_5").innerText;
    getNumberValue("live_coin", serviceName, serviceNumber);

  });
  

      // * দুদক
document
  .getElementById("call_btn_card_6")
  .addEventListener("click", function () {
    const data = {
      name: "দুদক",
      phone: "106",
      date: new Date().toLocaleTimeString(),
    };
    history.push(data);

    const serviceName = document.getElementById("service_name_6").innerText;
    const serviceNumber = document.getElementById("service_number_6").innerText;
    getNumberValue("live_coin", serviceName, serviceNumber);

  });


   // * বিদ্যুৎ বিভ্রাট
document
  .getElementById("call_btn_card_7")
  .addEventListener("click", function () {
    const data = {
      name: "বিদ্যুৎ বিভ্রাট",
      phone: "16216",
      date: new Date().toLocaleTimeString(),
    };
    history.push(data);

    const serviceName = document.getElementById("service_name_7").innerText;
    const serviceNumber = document.getElementById("service_number_7").innerText;
    getNumberValue("live_coin", serviceName, serviceNumber);

  });

   // * ব্র্যাক
document
  .getElementById("call_btn_card_8")
  .addEventListener("click", function () {
    const data = {
      name: "ব্র্যাক",
      phone: "16445",
      date: new Date().toLocaleTimeString(),
    };
    history.push(data);

    const serviceName = document.getElementById("service_name_8").innerText;
    const serviceNumber = document.getElementById("service_number_8").innerText;
    getNumberValue("live_coin", serviceName, serviceNumber);

  });


   // * বাংলাদেশ রেলওয়ে
document
  .getElementById("call_btn_card_9")
  .addEventListener("click", function () {
    const data = {
      name: "বাংলাদেশ রেলওয়ে",
      phone: "163",
      date: new Date().toLocaleTimeString(),
    };
    history.push(data);

    const serviceName = document.getElementById("service_name_9").innerText;
    const serviceNumber = document.getElementById("service_number_9").innerText;
    getNumberValue("live_coin", serviceName, serviceNumber);

  });