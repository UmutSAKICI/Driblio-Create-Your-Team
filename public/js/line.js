document.getElementById('teamLine').addEventListener("change", function () {
  var lines = document.querySelectorAll('.suits');
  lines.forEach(function (div) {
    div.classList.remove("visibility");
  });

  var selectedLine = document.getElementById(this.value);
  selectedLine.classList.add('visibility');
});

document.querySelector('.team-name').addEventListener('input', function (event) {
  document.querySelector('.Team-Name-Heading').innerHTML = event.target.value;

  const length = document.querySelector('.Team-Name-Heading').innerHTML.length;
  if (length < 1) {
    document.querySelector('.Team-Name-Heading').innerHTML = "Kulüp Adı Giriniz";
  }
});