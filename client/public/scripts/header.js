const header = document.querySelector('header');

const headerContainer = document.createElement('div');
headerContainer.className = 'header-container';

const headerLeft = document.createElement('div');
headerLeft.className = 'header-left';

const headerLogo = document.createElement('img');
headerLogo.src = '/logo.png';

const headerTitle = document.createElement('h1');
headerTitle.textContent = 'UnEarthed';

const headerRight = document.createElement('div');
headerRight.className = 'header-right';

const homeButton = document.createElement('button');
homeButton.className = 'home-button';

headerButton.addEventListener('click', function handleClick(event) {
    window.location = '/'
  });

headerContainer.appendChild(headerLeft);
headerContainer.appendChild(headerRight);

header.appendChild(headerContainer);


