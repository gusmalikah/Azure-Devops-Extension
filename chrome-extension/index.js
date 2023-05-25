document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("inputForm");
  const resultDiv = document.getElementById("result");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const velocity = parseFloat(document.getElementById("velocity").value);
    const developers = parseInt(document.getElementById("developers").value);
    const sprintDays = parseInt(document.getElementById("sprintDays").value);
    const daysOff = parseInt(document.getElementById("daysOff").value);

    const totalDays = developers * sprintDays;
    const workDays = totalDays - daysOff;
    const totalVelocity = velocity * (workDays / totalDays);

    if (totalVelocity <= 0) {
      resultDiv.textContent = "Total Sprint Velocity is <= 0";
    } else {
      resultDiv.textContent =
        "Total Sprint Velocity: " + totalVelocity.toFixed(2);
    }
  });
});
