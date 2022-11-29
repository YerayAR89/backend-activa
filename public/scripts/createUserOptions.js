
async function createOptionsForSelectUser () {
    const students = await fetch("http://localhost:3000/studentuserewards");
    const studentsJSON = await students.json();
    console.log(studentsJSON);
    let optionsString = '<option>Enviar puntos a...</option>';
    let option = '';
    for (let student of studentsJSON){
        option=`<option value="${student.id}">${student.name} ${student.first_surname}</option>`;
        optionsString += option;
    }
    document.getElementById("id_student").innerHTML=optionsString;
}

window.addEventListener('load',createOptionsForSelectUser);