function addMovie() {
    var movieTitle = document.getElementById("inputTitle").value;
    var movieYear = document.getElementById("inputYear").value;
    var movieActors = document.getElementById("inputActors").value;

    if (movieTitle === "" || movieYear === "" || movieActors === "") {
        alert("Please fill in all fields.");
        return;
    }
    
    var li = document.createElement("li");
    li.innerHTML = '<input type="checkbox"> ' + movieTitle + ", " + movieYear + ", " + movieActors + '</input>';
    document.getElementById("movieList").appendChild(li);

    // Clear input fields
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputYear").value = "";
    document.getElementById("inputActors").value = "";
}

function deleteSelected() {
    var checkboxes = document.querySelectorAll('#movieList input[type="checkbox"]:checked');
    for (var i = checkboxes.length - 1; i >= 0; i--) {
        document.getElementById("movieList").removeChild(checkboxes[i].parentNode);
    }
}