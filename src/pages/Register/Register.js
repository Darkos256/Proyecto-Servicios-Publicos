import React from 'react'
import '../Register/Register.css';


const inputs = document.querySelectorAll('input');

function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value === ""){
		parent.classList.remove("focus");
	}
}

// function ShowHidePassword(){
// 	var cambio = document.getElementById("password");
// 	if(cambio.type == "password"){
// 		cambio.type = "text";
// 		$('.icon').removeClass('fas fa-eye-slash').addClass('fas fa-eye');
// 	}else{
// 		cambio.type = "password";
// 		$('.icon').removeClass('fas fa-eye').addClass('fas fa-eye-slash');
// 	}
// } 

inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});


const Register = () => {
  return (
    <>
      {/* <img class="wave" src=""></img> */}
      <div class="container2">
        <div class="img">
          {/* <img src=""></img> */}
        </div>
        <div class="login-content">
          <form class="login_form" action="" method="POST" name="form" >
            <h1 class="title">Registro</h1>

              <div class="input-div one">
                  <div class="i">
                  </div>
                  <div class="div">
                      {/* <h5>Nombre*</h5> */}
                      <input type="text" name="nombre" id="nombre" class="input" placeholder="Nombre*"></input>
                  </div>
              </div>
              <div class="input-div one">
                  <div class="i">
                  </div>
                  <div class="div">
                    {/* <h5>Apellido*</h5> */}
                    <input type="text" name="apellido" id="apellido" class="input" placeholder="Apellido*"></input>
                  </div>
              </div>
              <div class="input-div one">
                  <div class="i">
                  </div>
                  <div class="div">
                    {/* <h5>Identificacion*</h5> */}
                    <input type="text" name="Identificacion" id="Identificacion" class="input" placeholder="Identificacion*"></input>
                  </div>
              </div>
              <div class="input-div one">
                  <div class="i">
                  </div>
                  <div class="div">
                    {/* <h5>Correo electronico*</h5> */}
                    <input type="email" name="email1" id="email" class="input"  placeholder="Correo Electronico*"></input>
                  </div>
              </div>
              {/* <div class="input-div one">
                  <div class="i">
                  </div>
                  <div class="div">
                    <h5>Confirmar correo electronico*</h5>
                    <input type="email" name="email2" id="confirmar-email" class="input" ></input>
                  </div>
              </div> */}
              <div class="input-div pass">
                <div class="i"> 
                </div>
                <div class="div">
                  {/* <h5>Contraseña*</h5> */}
                  <input type="password" name="password" id="password" class="input" placeholder="Contraseña*"></input>
                </div>
                <button id="show_password" class="btn-primary2" type="button" onclick="ShowHidePassword()"> <span class="fas fa-eye-slash icon"></span> </button>
              </div>
                  <a href="/login">Ya tengo cuenta!</a>
              <input type="checkbox" name="conditions"></input><p>He leido y acepto todos los terminos y condiciones.</p>
              <button class="btn-register" type="submit">Registrarse</button>
          </form>
         </div>
      </div>
    </>
  );
}
export default Register;