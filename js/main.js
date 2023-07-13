var elConvertorForm = document.querySelector (".js-form");

var elConvertorInput = elConvertorForm.querySelector (".js-input");

var elConvertorSelect = elConvertorForm.querySelector (".js-money-list");

var elConvertorResult = elConvertorForm.querySelector (".js-result");


elConvertorForm.addEventListener("submit", function (evt) {

  evt.preventDefault();

  var inputValue = elConvertorInput.value;

  var selectValue = elConvertorSelect.value;

  if(inputValue <= 0) {
    elConvertorResult.textContent = ("Noto'g'ri miqdor kiritilgan");
  } 
  else (elConvertorResult.textContent = inputValue * selectValue);

})