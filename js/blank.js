const text = document.querySelector(".text");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "→";
  }, 0);

  setTimeout(() => {
    text.textContent = "HIVI";
  }, 2000);

  setTimeout(() => {
    text.textContent = "RAN";
  }, 4000);

  setTimeout(() => {
    text.textContent = "TULUS";
  }, 6000);

  setTimeout(() => {
    text.textContent = "Juicy Luicy";
  }, 8000);

  setTimeout(() => {
    text.textContent = "Lalahuta";
  }, 10000);

  setTimeout(() => {
    text.textContent = "Raisa";
  }, 12000);



}
textLoad();
setInterval(textLoad, 14000); 