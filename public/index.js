init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();  //grabbing last workout from data set
    if (workout) {
      location.search = "?id=" + workout._id; //creating new url with ?id= <last workout id>
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

