let caps_lock = false;
let textarea_edit = document.querySelector(".text-check");
let shift = false;

let Caps_lock = document.querySelector(".caps");
Caps_lock.addEventListener("click", () => {
  if (caps_lock == true) {
    caps_lock = false;
    Caps_lock.classList.remove("show");
  } else if (caps_lock == false) {
    caps_lock = true;
    Caps_lock.classList.add("show");
  }
});

let shift_btns = document.querySelectorAll(".shift");
shift_btns.forEach(function (shift_btn) {
  shift_btn.addEventListener("click", () => {
    shift = true;
    shift_btn.classList.add("show");
  });
});

let char_keys = document.querySelectorAll(".other-chars");

char_keys.forEach(function (char_key) {
  let key = char_key.innerText;
  switch (key) {
    case "q":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "q");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "Q");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "Q");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "q");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });
      break;
    case "w":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "w");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "W");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "W");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "w");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });
      break;
    case "e":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "e");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "E");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "E");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "e");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });
      break;
    case "r":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "r");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "R");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "R");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "r");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });
      break;
    case "t":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "t");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "T");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "T");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "t");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });

      break;
    case "y":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "y");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "Y");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "Y");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "y");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });

      break;
    case "u":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "u");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "U");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "U");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "u");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });

      break;
    case "i":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "i");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "I");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "I");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "i");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });

      break;
    case "o":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "o");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "O");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "O");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "o");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });
      break;

    case "p":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "p");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "P");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "P");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "p");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });

      break;
    case "a":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "a");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "A");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "A");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "a");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });
      break;

    case "s":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "s");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "S");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "S");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "s");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });

      break;
    case "d":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "d");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "D");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "D");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "d");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });
      break;

    case "f":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "f");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "F");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "F");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "f");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });

      break;
    case "g":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "g");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "G");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "G");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "g");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });

      break;
    case "h":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "h");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "H");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "H");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "h");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });
      break;
    case "j":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "j");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "J");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "J");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "j");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });

      break;
    case "k":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "k");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "K");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "K");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "k");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });

      break;
    case "l":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "l");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "L");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "L");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "l");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });

      break;
    case "z":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "z");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "Z");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "Z");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "z");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });

      break;
    case "x":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "x");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "X");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "X");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "x");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });

      break;
    case "c":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "c");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "C");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "C");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "c");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });

      break;
    case "v":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "v");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "V");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "V");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "v");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });

      break;
    case "b":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "b");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "B");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "B");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "b");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });

      break;
    case "n":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "n");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "N");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "N");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "n");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });

      break;
    case "m":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (!caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "m");
        } else if (caps_lock && !shift) {
          textarea_edit.insertAdjacentText("beforeend", "M");
        } else if (!caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "M");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else if (caps_lock && shift) {
          textarea_edit.insertAdjacentText("beforeend", "m");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        }
      });
      break;

    case "`":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", "~");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else {
          textarea_edit.insertAdjacentText("beforeend", "`");
        }
      });
      break;

    case "1":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", "!");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else {
          textarea_edit.insertAdjacentText("beforeend", "1");
        }
      });
      break;
    case "2":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", "@");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else {
          textarea_edit.insertAdjacentText("beforeend", "2");
        }
      });
      break;
    case "3":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", "#");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else {
          textarea_edit.insertAdjacentText("beforeend", "3");
        }
      });
      break;
    case "4":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", "$");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else {
          textarea_edit.insertAdjacentText("beforeend", "4");
        }
      });
      break;
    case "5":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", "%");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else {
          textarea_edit.insertAdjacentText("beforeend", "5");
        }
      });
      break;
    case "6":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", "^");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else {
          textarea_edit.insertAdjacentText("beforeend", "6");
        }
      });
      break;
    case "7":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", "&");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else {
          textarea_edit.insertAdjacentText("beforeend", "7");
        }
      });
      break;
    case "8":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", "*");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else {
          textarea_edit.insertAdjacentText("beforeend", "8");
        }
      });
      break;
    case "9":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", "(");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else {
          textarea_edit.insertAdjacentText("beforeend", "9");
        }
      });
      break;
    case "0":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", ")");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else {
          textarea_edit.insertAdjacentText("beforeend", "0");
        }
      });
      break;
    case "-":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", "_");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else {
          textarea_edit.insertAdjacentText("beforeend", "-");
        }
      });
      break;
    case "=":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", "+");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else {
          textarea_edit.insertAdjacentText("beforeend", "=");
        }
      });
      break;
    case "[":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", "{");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else {
          textarea_edit.insertAdjacentText("beforeend", "[");
        }
      });
      break;
    case "]":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", "}");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else {
          textarea_edit.insertAdjacentText("beforeend", "]");
        }
      });
      break;
    case ";":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", ":");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else {
          textarea_edit.insertAdjacentText("beforeend", ";");
        }
      });
      break;
    case ",":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", "<");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else {
          textarea_edit.insertAdjacentText("beforeend", ",");
        }
      });
      break;
    case ".":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", ">");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else {
          textarea_edit.insertAdjacentText("beforeend", ".");
        }
      });
      break;
    case "/":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", "?");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else {
          textarea_edit.insertAdjacentText("beforeend", "/");
        }
      });
      break;
    case "Space bar":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        textarea_edit.insertAdjacentText("beforeend", " ");
      });
      break;
    case "Enter":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        textarea_edit.insertAdjacentText("beforeend", "\n");
      });

      break;
    case "Tab":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        textarea_edit.insertAdjacentText("beforeend", "\t");
      });

      break;
    case "'":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", '"');
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else textarea_edit.insertAdjacentText("beforeend", "'");
      });
      break;
    case "\\":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        if (shift) {
          textarea_edit.insertAdjacentText("beforeend", "|");
          shift = false;
          shift_btns.forEach(function (shift_btn) {
            shift_btn.classList.remove("show");
          });
        } else textarea_edit.insertAdjacentText("beforeend", "\\");
      });

      break;
    case "Backspace":
      char_key.addEventListener("click", () => {
        // console.log("Clicked");
        textarea_edit.value = textarea_edit.value.substring(
          0,
          textarea_edit.value.length - 1
        );
      });
      break;
  }
});
