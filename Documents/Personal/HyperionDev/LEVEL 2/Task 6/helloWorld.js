function Submit(){

    let name = document.getElementById("Fname").value;
    let surname = document.getElementById("Lname").value;

    document.getElementById("display").innerHTML = name +" "+ surname;
}Submit();