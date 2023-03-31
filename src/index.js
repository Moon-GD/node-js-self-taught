function animal() {
  const animalObj = {
    // eslint-disable-next-line no-use-before-define
    nameHandler: setName,
    name: '',
  };

  function setName(newName) {
    animalObj.name = newName;
  }

  return animalObj;
}

const animalA = animal();
animalA.nameHandler('A 동물');

const animalB = animal();
animalB.nameHandler('B 동물');

console.log(animalA.name, animalB.name);
