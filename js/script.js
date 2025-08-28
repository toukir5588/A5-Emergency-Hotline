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


// ! start remove 20 coin section 
document.getElementById("call_btn").addEventListener('click',function(){
    const availableCoin = parseInt(document.getElementById('live_coin').innerText);
    const removeCoin = availableCoin - 20;
    const serviceName = document.getElementById("service_name").innerText;
    const serviceNumber = document.getElementById("service_number").innerText;
    if(availableCoin <= 20){
        // alert(name)
        return;
    }else{
        alert (serviceName + "    " + serviceNumber)
        const newCoin = document.getElementById('live_coin').innerText = removeCoin;
        console.log(newCoin);
    }
})
