// Team Popup

document.querySelector('.change-team-div-2').addEventListener('click', function () {
  document.querySelector('.TeamPopup').style.display = 'flex';
})

document.querySelector('.close-btn').addEventListener('click', function () {
  document.querySelector('.TeamPopup').style.display = 'none';
});

document.querySelector('.Teams-Div-1').addEventListener('click', function () {
  document.querySelector('.change-team-logo').src = '/images/teams/GS-Team.png';
  document.querySelector('.change-team-logo').style.width = '10rem';

  const formalar = document.querySelectorAll('.formalar');

  if (formalar.length > 0) {
    for (let i = 0; i < formalar.length; i++) {
      formalar[i].src = '/images/suits/gs-suit.png';
    }
  }

  const suitName = document.querySelectorAll('.suit-name');
  if (suitName.length > 0) {
    for (let i = 0; i < suitName.length; i++) {
      suitName[i].style.background = 'linear-gradient(to right, #F4CE14 50%, #B43F3F 50%)';
    }
  }

  document.querySelector('.Team-Name-Heading').innerHTML = "GALATASARAY";

  document.querySelector('.TeamPopup').style.display = 'none';
})

document.querySelector('.Teams-Div-2').addEventListener('click', function () {
  document.querySelector('.change-team-logo').src = '/images/teams/FB-Team.png';
  document.querySelector('.change-team-logo').style.width = '16rem';

  const formalar = document.querySelectorAll('.formalar');

  if (formalar.length > 0) {
    for (let i = 0; i < formalar.length; i++) {
      formalar[i].src = '/images/suits/fb-suit.png';
    }
  }

  const suitName = document.querySelectorAll('.suit-name');
  if (suitName.length > 0) {
    for (let i = 0; i < suitName.length; i++) {
      suitName[i].style.background = 'linear-gradient(to right, #F4CE14 50%, #173B45 50%)';
    }
  }

  document.querySelector('.Team-Name-Heading').innerHTML = "FENERBAHÇE SK.";

  document.querySelector('.TeamPopup').style.display = 'none';
});

document.querySelector('.Teams-Div-3').addEventListener('click', function () {
  document.querySelector('.change-team-logo').src = '/images/teams/BJK-Team.png';
  document.querySelector('.change-team-logo').style.width = '10rem';

  const formalar = document.querySelectorAll('.formalar');
  if (formalar.length > 0) {
    for (let i = 0; i < formalar.length; i++) {
      formalar[i].src = '/images/suits/bjk-suit.png';
    }
  }

  const suitName = document.querySelectorAll('.suit-name');
  if (suitName.length > 0) {
    for (let i = 0; i < suitName.length; i++) {
      suitName[i].style.background = 'linear-gradient(to right, #1E201E 50%, #D8D2C2 50%)';
    }
  }

  document.querySelector('.Team-Name-Heading').innerHTML = "BEŞİKTAŞ JK.";

  document.querySelector('.TeamPopup').style.display = 'none';
})
document.querySelector('.Teams-Div-4').addEventListener('click', function () {
  document.querySelector('.change-team-logo').src = '/images/teams/TS-Team.png';
  document.querySelector('.change-team-logo').style.width = '12rem';

  const formalar = document.querySelectorAll('.formalar');

  if (formalar.length > 0) {
    for (let i = 0; i < formalar.length; i++) {
      formalar[i].src = '/images/suits/gs-suit.png';
    }
  }

  const suitName = document.querySelectorAll('.suit-name');
  if (suitName.length > 0) {
    for (let i = 0; i < suitName.length; i++) {
      suitName[i].style.background = 'linear-gradient(to right, #A04747 50%, #D8D2C2 50%)';
    }
  }

  document.querySelector('.Team-Name-Heading').innerHTML = "TRABZONSPOR";

  document.querySelector('.TeamPopup').style.display = 'none';
})


// Theme Popup

document.querySelector('.theme').addEventListener('click', function () {
  document.querySelector('.ThemePopup').style.display = 'flex';
});

document.querySelector('.close-btn-theme').addEventListener('click', function () {
  document.querySelector('.ThemePopup').style.display = 'none';
});

document.querySelector('.Theme-Div-1').addEventListener('click', function () {
  document.querySelector('.ThemePopup').style.display = 'none';
  document.body.style.background = 'linear-gradient(to bottom right, #4A4947, #181C14, #b17457)';
  document.querySelector('.logo').src = '/images/logo/trendyol-logo2.png'
  document.querySelector('.logo').style.width = '35rem';
  document.querySelector('.logo').style.height = '22rem';

  document.querySelector('.theme').style.left = '-15%';

});

document.querySelector('.Theme-Div-2').addEventListener('click', function () {
  document.querySelector('.ThemePopup').style.display = 'none';
  document.body.style.background = 'linear-gradient(to top right,#FF4E88, #001F3F, #00215e)';
  document.querySelector('.logo').src = '/images/logo/ucl-logo.png'
  document.querySelector('.logo').style.width = '20rem';
  document.querySelector('.logo').style.height = '20rem';

  document.querySelector('.theme').style.left = '0%';

});

document.querySelector('.Theme-Div-3').addEventListener('click', function () {
  document.querySelector('.ThemePopup').style.display = 'none';
  document.body.style.background = 'linear-gradient(to top right, #E85C0D, #343131, #A04747)';
  document.querySelector('.logo').src = '/images/logo/uel-logo.png'
  document.querySelector('.logo').style.width = '16rem';
  document.querySelector('.logo').style.height = '21rem';

  document.querySelector('.theme').style.left = '0%';

});

document.querySelector('.Theme-Div-4').addEventListener('click', function () {
  document.querySelector('.ThemePopup').style.display = 'none';
  document.body.style.background = 'linear-gradient(to top right, #1A5319, #333, #A5B68D)';
  document.querySelector('.logo').src = '/images/logo/uecl-logo.png'
  document.querySelector('.logo').style.width = '15rem';
  document.querySelector('.logo').style.height = '22rem';

  document.querySelector('.theme').style.left = '0%';
});

// Players Theme

const eSuit = document.querySelectorAll('.EditableSuit');

eSuit.forEach(items => {
  items.addEventListener('click', function (event) {
    document.querySelector('.PlayerPopup').style.display = 'block';
    const id = items.id;
    console.log(id);
  })
});

document.querySelector('.EditableSuit').addEventListener('click', function () {
  document.querySelector('.PlayerPopup').style.display = 'block';
});

document.querySelector('.close-btn-player').addEventListener('click', function () {
  document.querySelector('.PlayerPopup').style.display = 'none';
});
