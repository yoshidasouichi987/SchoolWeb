const buttons = document.querySelectorAll('.day-button');
console.log(buttons);
    const screens = document.querySelectorAll('.screen');

    buttons.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');

     
        screens.forEach(screen => screen.classList.remove('active-screen'));

        
        screens[index].classList.add('active-screen');
      });
    });
