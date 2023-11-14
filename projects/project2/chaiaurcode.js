const form = document.querySelector("form");
//post or get
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const result = document.querySelector("#results");
  if (height && weight) {
    const BMI = (weight / ((height * height) / 10000)).toFixed(2);
    let diagnosis = "Your BMI is Normal";
    if (BMI < 18.6) {
      diagnosis = "You are Under Weight!";
    } else if (BMI > 24.9) {
      diagnosis = "You are Over Weight!";
    }
    result.innerHTML = `BMI: ${BMI} , ${diagnosis}`;
  } else {
    result.innerHTML = "Please give valid height / width";
  }
});
