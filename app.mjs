function startApp() {
  let inputElement = document.querySelector("#phone_no");
  inputElement.addEventListener("input", validateNumber);
  let displayElem = document.querySelector("#image");
  const btnElement = document.querySelector("#btn");
  const form = document.querySelector(".form");

  function validateNumber() {
    let inputValue = inputElement.value;
    let string_length = inputValue.length;
    let firstFourNum = inputValue.slice(0, 4);
    let zeroFirst = inputValue.slice(0, 1);
    var numbers = /^[+0-9]+$/;

    if (inputValue.match(numbers)) {
      if (zeroFirst == 0 && string_length == 11) {
        var prefix = Number(inputValue.slice(1, 4));
      } else if (zeroFirst !== 0 && string_length == 10) {
        prefix = Number(inputValue.slice(1, 3));
      } else if (firstFourNum == "+234" && string_length == 14) {
        prefix = Number(inputValue.slice(4, 7));
      }

      let mtn = [703, 706, 803, 806, 810, 813, 814, 816, 903, 906, 913];
      let airtel = [701, 704, 708, 802, 808, 812, 901, 902, 904, 907];
      let glo = [705, 805, 807, 811, 815, 905];
      let _9mobile = [809, 818, 817, 909, 908];

      if (mtn.includes(prefix)) {
        const img = document.createElement("img");
        img.src = "mtn.png";
        img.height = 40;
        img.width = 40;
        img.style.alignSelf = "center";
        displayElem.replaceChildren(img);
      } else if (airtel.includes(prefix)) {
        const img = document.createElement("img");
        img.src = "airtel.jpg";
        img.height = 40;
        img.width = 40;
        img.style.alignSelf = "center";
        displayElem.replaceChildren(img);
      } else if (glo.includes(prefix)) {
        const img = document.createElement("img");
        img.src = "glo.png";
        img.height = 40;
        img.width = 40;
        img.style.alignSelf = "center";
        displayElem.replaceChildren(img);
      } else if (_9mobile.includes(prefix)) {
        const img = document.createElement("img");
        img.src = "9mobile.png";
        img.height = 40;
        img.width = 40;
        img.style.alignSelf = "center";
        displayElem.replaceChildren(img);
      } else {
        displayElem.innerHTML = "Invalid/Unknown Number";
      }
    } else {
      displayElem.innerHTML = "Input number only";
    }
  }

  btnElement.addEventListener("click", () => {
    form.reset();
    displayElem.innerHTML = "";
  });
}

// ======= DO NOT EDIT ============== //
export default startApp;
// ======= EEND DO NOT EDIT ========= //
