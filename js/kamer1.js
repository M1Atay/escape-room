function myFunction() {
   const raadsel2 = prompt('als je de raadsel hebt gevonden schrijf hier het antwoord van de raadsel ');
    if (raadsel2 == 'hart' || raadsel2 == 'HART') {
        alert('Jouw antwoord is goed')
        window.location = `/html/kamer3.html`
     }else {
        alert('Jouw antwoord is fout')
     }

} 


const myBtn = document.querySelector('.kamer1b');
myBtn.addEventListener('click', myFunction);

function myFunction2() {
    alert('Er ligt een man dood tussen 3 muren de eerste muur is de kleur rood tweede is blauw en de laatste is wit wat klopt er niet ');


} 


const myBtn2 = document.querySelector('.article2');
myBtn2.addEventListener('click', myFunction2);



