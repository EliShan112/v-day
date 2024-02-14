let btn = document.getElementById("btn");

btn.addEventListener('click', function(){
    let answer = prompt("Chalo, 'I love you honey' bolo");

    if (answer !== null) {
        // Normalize user input to uppercase and remove leading/trailing spaces
        answer = answer.trim().toUpperCase();

        if (answer === "I LOVE YOU HONEY") {
            alert("I LOVE YOU TOO DARLING ^.^");

            // Use a confirmation dialog to navigate away from the page
            let con1 = confirm("Agar isi page pe rehna hai to, 'cancel' daba do, aur home page pe jana hai to 'OK' daba do");
            if (con1) {
                window.location.href = 'index.html';
            }
        }
    }
});
