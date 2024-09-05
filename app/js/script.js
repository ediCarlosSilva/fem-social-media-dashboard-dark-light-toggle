const darkButton = document.getElementById("dark");
const ligthButton = document.getElementById("light");

const setColorMode = () => {
  console.log("Set colorMode");
  console.log(window.localStorage.getItem("colorMode"));

  if (window.localStorage.getItem("colorMode") == "dark") {
    setDarkMode();
    darkButton.click();
  } else if (window.localStorage.getItem("colorMode") == "dark") {
    setLightMode();
    ligthButton.click();
  }
};

const checkMode = () => {
  if (window.localStorage.getItem("colorMode") == null) {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
      ligthButton.click();
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      darkButton.click();
    }
  }
};

const checkModeChange = () => {
  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      console.log("checkModeChange");
      checkMode();
    });
};

const setDarkMode = () => {
  console.log("Set darkMode");
  document.querySelector("body").classList = "dark";
};

const setLightMode = () => {
  console.log("Set lightMode");
  document.querySelector("body").classList = "light";
};

setColorMode();
checkMode();
checkModeChange();

const radioButtons = document.querySelectorAll(".toggle__wrapper input");
for (let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener("click", (event) => {
    console.log("Radio Button clicked");
    if (darkButton.checked) {
      window.localStorage.setItem("colorMode", "dark");
      setDarkMode();
    } else {
      window.localStorage.setItem("colorMode", "light");
      setLightMode();
    }
  });
}
