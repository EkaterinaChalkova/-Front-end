function test3(x) {
  document.addEventListener('readystatechange', () => {
    if (document.readyState === 'interactive') {
      x();
      document.addEventListener('DOMContentLoaded', () => {
        x();
      });
    }
  });
}

const randomFunction = () => {
  console.log('Функция выполняется');
};

test3(randomFunction);

document.addEventListener('DOMContentLoaded', () => {
  alert('Страница загружена');
});
