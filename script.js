const fadeElements = document.querySelectorAll('.fade-up');

window.addEventListener('scroll', () => {
  fadeElements.forEach(element => {

    const position = element.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;

    if(position < screenPosition) {
      element.classList.add('active');
    }

  });
});


const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {

  button.addEventListener('click', () => {

    button.style.transform = 'scale(0.95)';

    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 150);

  });

});

// --------------------------------------------------------------------------------------------//

const params = new URLSearchParams(window.location.search);

const redirectLink = params.get("redirect");

console.log("Script Running");
console.log(redirectLink);

if(redirectLink){

    try{

        const url = new URL(redirectLink);

        const allowedDomains = [
            "mediafire.com",
            "www.mediafire.com"
        ];

        // Validate MediaFire link
        if(
            url.protocol === "https:" &&
            allowedDomains.includes(url.hostname)
        ){

            // Find redirect button container
            const container = document.getElementById("redirect-container");

            // Only create button if container exists
            if(container){

                const btn = document.createElement("button");

                btn.innerText = "Download Now";
                btn.classList.add('active');

                btn.onclick = () => {
                    window.location.href = redirectLink;
                };

                container.appendChild(btn);

            }

        }

    }catch(error){

        console.log("Invalid URL");

    }

}


