const apiUrl = 'http://localhost:3030/jsonstore/advanced/profiles';
const profilesContainer = document.getElementById('container');
const lockedClass = 'locked';

fetch(apiUrl)
 .then(response => response.json())
 .then(data => {
    Object.keys(data).forEach(id => {
      const profile = data[id];
      const profileCard = createProfileCard(profile);
      profilesContainer.appendChild(profileCard);
    });
  })
 .catch(error => console.error(error));

function createProfileCard(profile) {
  const profileCard = document.createElement('div');
  profileCard.className = 'profile';

  const userIcon = document.createElement('img');
  userIcon.src = './iconProfile2.png';
  userIcon.className = 'userIcon';
  profileCard.appendChild(userIcon);

  const lockRadio = document.createElement('input');
  lockRadio.type = 'radio';
  lockRadio.name = `user${profile.id}Locked`;
  lockRadio.value = 'lock';
  lockRadio.checked = true;
  profileCard.appendChild(lockRadio);

  const lockLabel = document.createElement('label');
  lockLabel.textContent = 'Lock';
  profileCard.appendChild(lockLabel);

  const unlockRadio = document.createElement('input');
  unlockRadio.type = 'radio';
  unlockRadio.name = `user${profile.id}Locked`;
  unlockRadio.value = 'unlock';
  profileCard.appendChild(unlockRadio);

  const unlockLabel = document.createElement('label');
  unlockLabel.textContent = 'Unlock';
  profileCard.appendChild(unlockLabel);

  const usernameInput = document.createElement('input');
  usernameInput.type = 'text';
  usernameInput.name = `user${profile.id}Username`;
  usernameInput.value = profile.username;
  usernameInput.disabled = true;
  profileCard.appendChild(usernameInput);

  const showMoreButton = document.createElement('button');
  showMoreButton.textContent = 'Show more';
  profileCard.appendChild(showMoreButton);

  const hiddenInfoDiv = document.createElement('div');
  hiddenInfoDiv.className = 'hiddenInfo';

  const emailInput = document.createElement('input');
  emailInput.type = 'email';
  emailInput.name = `user${profile.id}Email`;
  emailInput.value = profile.email;
  emailInput.disabled = true;
  hiddenInfoDiv.appendChild(emailInput);

  const ageInput = document.createElement('input');
  ageInput.type = 'number';
  ageInput.name = `user${profile.id}Age`;
  ageInput.value = profile.age;
  ageInput.disabled = true;
  hiddenInfoDiv.appendChild(ageInput);

  profileCard.appendChild(hiddenInfoDiv);

  showMoreButton.addEventListener('click', () => {
    if (!profileCard.classList.contains(lockedClass)) {
      hiddenInfoDiv.style.display = 'block';
      showMoreButton.textContent = 'Hide it';
    }
  });

  lockRadio.addEventListener('change', () => {
    profileCard.classList.add(lockedClass);
    hiddenInfoDiv.style.display = 'none';
    showMoreButton.textContent = 'Show more';
  });

  unlockRadio.addEventListener('change', () => {
    profileCard.classList.remove(lockedClass);
  });

  return profileCard;
}