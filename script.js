const students=[]
const tableBody=document.querySelector("#studentsTable tbody");
const averageDiv=document.getElementById("average");

document.getElementById("studentForm").addEventListener("submit",function(e){
    e.preventDefault();
    const name=document.getElementById("name").value.trim();
    const lastName=document.getElementById("lastName").value.trim();
    const Fecha = document.getElementById("Fecha").value.trim();
    const grade=parseFloat(document.getElementById("grade").value);

    if(!name || !lastName || !Fecha || isNaN(grade) || grade<1 || grade>7){
        alert("Error al ingresar Datos")
         return
    }
    const student={name,lastName,Fecha,grade}

    students.push(student);
    
    //console.log(students)
    addStudentToTable(student)
    calculateAverage();
    this.reset()


});
        function addStudentToTable(student){
            const row=document.createElement("tr");
            row.innerHTML=`
                <td>${student.name}</td>
                <td>${student.lastName}</td>
                <td>${student.Fecha}</td>
                <td>${student.grade}</td>`;
            tableBody.appendChild(row);
        }

        function calculateAverage(){
            if (students.length === 0) {
                averageDiv.textContent = "Average Grade: N/A";
                return;
            }

            const total=students.reduce((sum,student)=>sum+student.grade,0);
            const prom=total/students.length;
            averageDiv.textContent="Promedio General del Curso: "+prom.toFixed(2);
        }