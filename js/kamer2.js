function myFunction() {

    alert('12=144     6=36     18=?');
  }
  const myBtn = document.querySelector('.knop1');
  
  myBtn.addEventListener('click', myFunction);
  
  
  function myFunction2() {
   const raadsel1 = prompt('als je de raadsel hebt opgelost schrijf hier het antwoord.');

   if (raadsel1 == '324') {
      alert('Jouw antwoord is goed')
      window.location = `/html/kamer1.html`
   }else {
      alert('Jouw antwoord is fout')
   }
    
}


  
  const myBtn2 = document.querySelector('.knop2');
  
  myBtn2.addEventListener('click', myFunction2);
  
