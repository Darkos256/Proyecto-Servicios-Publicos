import React from 'react'
import '../Login/Login.css';


const inputs = document.querySelectorAll('.input');

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


const Login = () => {
  return (
  <>
    {/* <img class="wave" src=""></img> */}
      <div class="container2">
        <div class="img">
          {/* <img src=""></img> */}
        </div>
		<div class="login-content">
			<form class="login_form" action="/prueba" method="POST, GET"  name="form" >
				{/* <img src=""></img> */}
				<h1 class="title">Iniciar Sesión</h1>
           	<div class="input-div one">
              <div class="i">
                <i class="fas fa-user"></i>
              </div>
              <div class="div">
                {/* <h5>Correo</h5> */}
                <input type="email" name="email" id="email" class="input" placeholder="Correo"></input>
              </div>
           	</div>
				    <div id="email_error">Correo no valido</div>
           	<div class="input-div pass">
           		<div class="i"> 
           		  <i class="fas fa-lock"></i>
              </div>
              <div class="div">
                {/* <h5>Contraseña</h5> */}
                <input type="password" name="password" id="password" class="input" placeholder="Contraseña"></input>
              </div>
              <button id="show_password" class="btn-primary2" type="button" onclick="ShowHidePassword()"> <span class="fas fa-eye-slash icon"></span> </button>
            </div>
            <div id="pass_error">Contraseña no valida</div>
            <a href="#">Olvidaste la contraseña?</a>
            <a href="/register">Necesitas una cuenta?</a>
				  <button class="btn-login" type="submit">Iniciar Sesión</button>
        </form>
      </div>
    </div>
  </>
  );
}
export default Login;