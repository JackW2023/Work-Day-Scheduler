// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


$(function () {
  const hoursArray = [9, 10, 11, 12, 13, 14, 15, 16, 17];
  const timeDiv = document.querySelector(".container-lg");
  

  for(let i = 0; i < hoursArray.length; i++) {
    const hoursDiv = document.createElement("div")
    hoursDiv.id = `hour-${hoursArray[i]}`;
    hoursDiv.classList.add("row","time-block", tracker(hoursArray[i]))
    hoursDiv.innerHTML = `<div class="col-2 col-md-1 hour text-center py-3">${timeLoop(hoursArray[i])}</div>
    <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
    <button class="btn saveBtn col-2 col-md-1" aria-label="save">
      <i class="fas fa-save" aria-hidden="true"></i>
    </button>`

    const storeValue = localStorage.getItem(`hour-${hoursArray[i]}`);
    if(storeValue) {
      hoursDiv.querySelector('textarea').value = storeValue;
    }


    timeDiv.append(hoursDiv); 
  }

  function timeLoop(hour) {
    switch(hour){
      case 9:
        return '9AM';
      case 10:
        return '10AM';
        case 11:
        return '11AM';
        case 12:
        return '12PM';
        case 13:
        return '1PM';
        case 14:
        return '2PM';
        case 15:
        return '3PM';
        case 16:
        return '4PM';
        case 17:
        return '5PM';
    }
  }


  const date = document.getElementById("currentDay")
  date.textContent = new Date().toLocaleDateString('en-US', {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"

  })


  function tracker(hour) {
    // const currentHour = new Date().getHours()
    const currentHour = 12 
    if (currentHour === hour) {
      return "present";
  
    } else if (currentHour > hour) {
      return "past"
    } else {
      return "future"
    }
  }

  const saveBtnArray = document.querySelectorAll(".saveBtn")

  for (let i=0; i<saveBtnArray.length; i++){
    saveBtnArray[i].addEventListener('click', function(e) {
      console.log(e.target);
      const parentDiv = e.target.closest('.time-block');
      const hourId = parentDiv.id.split('-')[1];
      const textValue = parentDiv.querySelector('textarea').value;
      localStorage.setItem(`hour-${hourId}`,textValue);
    })
  }
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  
});
