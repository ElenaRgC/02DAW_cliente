20const persona = {
    dni: "01234567X",
    nombre: "Nombre",
    apellido: "Apellido",
    correo: "ejemplo@email.com",
    password: "admin123",
    /*asignaturas: ["Cliente", "Servidor", "Interfaces", "Empresas", "Despliegue"]*/
};

//admin123

function login() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("password").value;
    
    if (email === persona.correo && pass === persona.password) {
        return true;
    } else {
        alert("Usuario o contraseña incorrectos.");
        return false;
    }
}

const lista = document.getElementById("persona");

for (const dato in persona) {
    const listItem = document.createElement("li");
    listItem.textContent = `${dato}: ${persona[dato]}`;
    lista.appendChild(listItem);
}