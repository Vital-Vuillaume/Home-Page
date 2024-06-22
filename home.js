//------Https------\\

/*if (window.location.protocol != "https:") {
  window.location.protocol="https:";
}*/

const hours = document.querySelector(".hours");
const minutes = document.querySelector(".minutes");

function updateClock() {
  let currentTime = new Date();

  hours.textContent = currentTime.getHours().toString().padStart(2, '0');
  minutes.textContent = currentTime.getMinutes().toString().padStart(2, '0');
}

updateClock();

setInterval(updateClock, 60000);


const prefer = document.querySelector(".prefer");
const btn = document.querySelector(".btn");

let preferNb = 0;

btn.addEventListener("click", () => {
  let preferSite = prompt("Entrez l'URL de votre site préféré :");
  let preferImage = prompt("Entrez l'URL de l'image pour votre site préféré (facultatif) :");

  function isValidURL(url) {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  }

  if (!isValidURL(preferImage)) {
    preferImage = "Images/site.png";
  }

  if (!isValidURL(preferSite)) {
    preferSite = false
  }

  if (preferNb <= 22 && preferSite) {
    const preferContent = `
      <div class="test3">
        <div class="test2">-</div>
        <a class="test" href="${preferSite}">
          <img class="imgPrefer" src="${preferImage}" alt="prefer">
        </a>
      </div>
    `;
    
    prefer.insertAdjacentHTML('afterbegin', preferContent);

    preferNb += 1;

    if (preferNb <= 3) {
      prefer.style.width = "max-content";
    } else {
      prefer.style.width = "335px";
    }
  }

  const closeBtns = document.querySelectorAll(".test2");
  
  closeBtns.forEach(btn => {
    btn.addEventListener('click', (event) => {

      const elementToRemove = event.target.parentElement;
      if (elementToRemove) {
        elementToRemove.remove();
        preferNb -= 1;

        if (preferNb <= 3) {
          prefer.style.width = "max-content";
        } else {
          prefer.style.width = "335px";
        }
      }
    });
  });
});