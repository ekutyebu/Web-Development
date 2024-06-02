let calculation ='';

function cal() {
  console.log(calculation);
  
  document.querySelector('.js-cal-result')
    .innerHTML = `
      ${calculation}
    `
}
