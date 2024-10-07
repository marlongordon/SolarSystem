function calcular() {
  let numInput = document.querySelector("#minkg");
  let num = Number(numInput.value);
  let planeta = document.querySelector("#planetas").value;
  let img = document.querySelector("img#imagem");
  let mensagem = document.querySelector("#mensagem"); // Div de mensagem

  if (numInput.value.length == 0 || isNaN(num) || num == 0) {
    mensagem.innerHTML = "Por favor, insira uma massa válida."; // Exibe a mensagem
  } else {
    let peso;
    switch (planeta) {
      case "Mercúrio":
        img.src = "images/mercury.png";
        peso = Math.round(num * 3.7);
        mensagem.innerHTML = `O peso do objeto em <strong>${planeta}</strong> é ${peso.toFixed(
          2
        )} N.`;
        break;
      case "Vênus":
        img.src = "images/venus.png";
        peso = Math.round(num * 8.87);
        mensagem.innerHTML = `O peso do objeto em <strong>${planeta}</strong> é ${peso.toFixed(
          2
        )} N.`;
        break;
      case "Terra":
        img.src = "images/earth.png";
        peso = Math.round(num * 9.81);
        mensagem.innerHTML = `O peso do objeto na <strong>${planeta}</strong> é ${peso.toFixed(
          2
        )} N.`;
        break;
      case "Lua":
        img.src = "images/moon.png";
        peso = Math.round(num * 1.62);
        mensagem.innerHTML = `O peso do objeto na <strong>${planeta}</strong> é ${peso.toFixed(
          2
        )} N.`;
        break;
      case "Marte":
        img.src = "images/mars.png";
        peso = Math.round(num * 3.71);
        mensagem.innerHTML = `O peso do objeto em <strong>${planeta}</strong> é ${peso.toFixed(
          2
        )} N.`;
        break;
      case "Júpiter":
        img.src = "images/jupiter.png";
        peso = Math.round(num * 24.79);
        mensagem.innerHTML = `O peso do objeto em <strong>${planeta}</strong> é ${peso.toFixed(
          2
        )} N.`;
        break;
      case "Saturno":
        img.src = "images/saturn.png";
        peso = Math.round(num * 10.44);
        mensagem.innerHTML = `O peso do objeto em <strong>${planeta}</strong> é ${peso.toFixed(
          2
        )} N.`;
        break;
      case "Urano":
        img.src = "images/uranus.png";
        peso = Math.round(num * 8.69);
        mensagem.innerHTML = `O peso do objeto em <strong>${planeta}</strong> é ${peso.toFixed(
          2
        )} N.`;
        break;
      case "Netuno":
        img.src = "images/neptune.png";
        peso = Math.round(num * 11.15);
        mensagem.innerHTML = `O peso do objeto em <strong>${planeta}</strong> é ${peso.toFixed(
          2
        )} N.`;
        break;
      case "Plutão":
        img.src = "images/pluto.png";
        peso = Math.round(num * 0.62);
        mensagem.innerHTML = `O peso do objeto em <strong>${planeta}</strong> é ${peso.toFixed(
          2
        )} N.`;
        break;
      default:
        mensagem.innerHTML = "Por favor, selecione um planeta.";
        return;
    }
  }
}
