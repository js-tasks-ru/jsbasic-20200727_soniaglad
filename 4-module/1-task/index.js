/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let friendsList = document.createElement('ul');
  document.body.append(friendsList);

  for (let friend in friends) {
    let name = document.createElement('li');
    name.innerHTML = `${friends[friend].firstName} ${friends[friend].lastName}`;
    friendsList.appendChild(name);
  }

  return friendsList;
}
