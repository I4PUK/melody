$(document).ready(function () {
  var currentFloor = 2;
  var floorPath = $(".home-image path"); //отдельный этаж в svg
  var counterUp = $(".counter-up");
  var counterDown = $(".counter-down");
  
  //При наведении мышкой на этаж
  floorPath.on("mouseover", function(){
    floorPath.removeClass("current-floor"); // Удаляем активный класс этажей
    currentFloor = $(this).attr("data-floor"); //Получаем значение текущего этажа
    $(".counter").text(currentFloor); //Записываем значение этажа в счетчик
  });

  //При нажатии на стрелку вверх
  counterUp.on("click", function(){
    if (currentFloor < 18){
      currentFloor++;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false}) // Форматируем, чтобы было 01, а не 1
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor"); // Подсвечиваем текущий этаж
    }
  })

  //При нажатии на стрелку вниз
  counterUp.on("click", function(){
    if (currentFloor < 02){
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:false})
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor=${usCurrentFloor}]`).toggleClass("current-floor");
    }
  })
});