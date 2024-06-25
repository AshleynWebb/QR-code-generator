function generateQRCode() {
    var qrcodeContainer = document.getElementById("qrcode");
    qrcodeContainer.innerHTML = "";
    var text = document.getElementById("text").value;
    var qrcode = new QRCode(qrcodeContainer, {
        text: text,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}