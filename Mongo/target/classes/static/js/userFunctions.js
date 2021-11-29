
var checkLoggi = 0;

function userlogging(){

        let userEmail = $("#userEmail").val();
        let userPass = $("#userPass").val();
   
    $.ajax({    

        url: 'http://localhost:8080/api/user/'+userEmail+'/'+userPass,
        
        type: 'GET',
        dataType : 'JSON',
        contentType:'application/json',
        
        
        success : function(json, textStatus, xhr) {
         
                
                
                if(json.id == null){

                    if (checkLoggi == 0){
                        let alertPlaceholderLog = document.getElementById('liveAlertPlaceholderLog')
                        var wrapper4 = document.createElement('div')
                        wrapper4.innerHTML = `<div class="alert alert-danger" role="alert">
                        <h4 class="alert-heading">Incorrect Data!</h4>
                        <p>  Please be sure to enter all the requested information   </p>
                        <hr>
                        <p class="mb-0">Username and password do not match
                        </p>
                      </div>`
                
                        alertPlaceholderLog.append(wrapper4)
                
                        
                        checkLoggi+=1;
                        
                        }else{
                
                            let alertPlaceholderLog = document.getElementById('liveAlertPlaceholderLog')
                        var wrapper4 = document.createElement('div')
                        alertPlaceholderLog.innerHTML = "";
                        wrapper4.innerHTML = `<div class="alert alert-danger" role="alert">
                        <h4 class="alert-heading">Incorrect Data!</h4>
                        <p>  Please be sure to enter all the requested information   </p>
                        <hr>
                        <p class="mb-0">Username and password do not match
                        </p>
                      </div>`
                        
                        alertPlaceholderLog.append(wrapper4)
                
                            
                
                        }

                }else{

                    location.href="http://129.151.116.109:8080/succesInterface.html";
                

                }

            },
        
                complete : function(xhr, status) {
                //alert('Petición realizada '+xhr.status);


            }
    });
}
function verField(){

var alertPlaceholder = document.getElementById('liveAlertPlaceholder')



let pass1 = $("#password1").val();
let pass2 = $("#password2").val();
let ver1 = document.getElementById("password1");
let ver2 = document.getElementById("password2");

if (pass1 == pass2){

    
    
    verEmail();
    var wrapper = document.getElementById("liveAlertPlaceholder")
    wrapper.innerHTML="";
    ver1.className="form-control";
    ver2.className="form-control";

}else{

    
ver1.className="form-control is-invalid";
ver2.className="form-control is-invalid";
var wrapper = document.createElement('div')
wrapper.innerHTML="";
  wrapper.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"> Passwords do not match <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

  alertPlaceholder.append(wrapper)

}

}

var checkEmail = 0;
function verEmail(){

    userEmailVer = $("#correoCreation").val(),


    $.ajax({    

        url: 'http://129.151.116.109:8080/api/user/'+userEmailVer,
        
        type: 'GET',
        dataType : 'JSON',
        contentType:'application/json',
        
        
        success : function(json, textStatus, xhr) {
         
                
                
                if(json == false){

                    saveUser();
                 let modal = document.getElementById("exampleModalCenter");
                 modal.style.display="none";

                 $('.modal-backdrop').remove();

                 let alertPlaceholderLog = document.getElementById('liveAlertPlaceholderLog')
                 var wrapper4 = document.createElement('div')
                 wrapper4.innerHTML = `<div class="alert alert-success" role="alert">
                 <h4 class="alert-heading">Well done!</h4>
                 <p> Your account has been created successfully   </p>
                 <hr>
                 <p class="mb-0">Login now with your Email and Password
                 </p>
               </div>`
         
                 alertPlaceholderLog.append(wrapper4)

                 checkLoggi+=1;


                }else{

                    if (checkEmail == 0){

                    let emailVal = document.getElementById("correoCreation");
                    

                    emailVal.className="form-control is-invalid";
                    let alertPlaceholderEmail = document.getElementById('liveAlertPlaceholderEmail')
                    let wrapper2 = document.createElement('div')
                    wrapper2.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"> Invalid Email <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

                    alertPlaceholderEmail.append(wrapper2)
                    
                        checkEmail+=1;
                }
                    else{
                        let emailVal = document.getElementById("correoCreation");
                        
                        emailVal.className="form-control is-invalid";
                    let alertPlaceholderEmail = document.getElementById('liveAlertPlaceholderEmail')
                    alertPlaceholderEmail.innerHTML="";
                    let wrapper2 = document.createElement('div')
                    wrapper2.innerHTML = '<div class="alert alert-danger alert-dismissible" role="alert"> Invalid Email <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'

                    alertPlaceholderEmail.append(wrapper2)

                    }
                }

            },
        
                complete : function(xhr, status) {
                //alert('Petición realizada '+xhr.status);


            }
    });
}

var check = 0;
function valEmplyFlield(){

    let nameVal = $("#nameCreation").val();
    let correoVal = $("#correoCreation").val();
    let pass1 = $("#password1").val();
    let pass2 = $("#password2").val();
    

    if (nameVal == "" || correoVal == "" || pass1 == "" || pass2 == ""){
        let cont = "";
        if (nameVal == ""){
            cont += " Nombre ";
        }
        if (correoVal == ""){
            cont += " Correo ";
        }
        if (pass1 == "" || pass2 == ""){
            cont += " Contraseña ";
        }

        if (check == 0){
        let alertPlaceholderHead = document.getElementById('liveAlertPlaceholderHead')
        var wrapper3 = document.createElement('div')
        wrapper3.innerHTML = `<div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Incorrect Data!</h4>
        <p>  Please be sure to enter all the requested information   </p>
        <hr>
        <p class="mb-0">The following fields have not been filled out correctly.
        `+cont+ `
        </p>
      </div>`

        alertPlaceholderHead.append(wrapper3)
        
        check += 1;
        verField();
    }
    else{

        let alertPlaceholderHead = document.getElementById('liveAlertPlaceholderHead')
        var wrapper3 = document.createElement('div')
        alertPlaceholderHead.innerHTML = "";
        wrapper3.innerHTML = `<div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Incorrect Data!</h4>
        <p>  Please be sure to enter all the requested information   </p>
        <hr>
        <p class="mb-0">The following fields have not been filled out correctly.
        `+cont+ `
        </p>
      </div>`
        
        alertPlaceholderHead.append(wrapper3)
        verField();
    }

    }else{

        verField();

    }

}

function saveUser(){

    let var2 = {
        email:$("#correoCreation").val(),
        password:$("#password1").val(),
        name:$("#nameCreation").val()
        
    };
    $.ajax({
        type:'POST',
        contentType:"application/json; charset=utf-8",
        dataType: 'JSON',
        data: JSON.stringify(var2),
        url:"http://129.151.116.109:8080/api/user/new",
        success:function(respose) {
            
            //alert("Se guardó correctametne..");
            //window.location.reload();
            
        },
        error:function(jqXHR, textStatus, errorTrown){
            
            
            alert("No se guardó correctamente");
        }
    });
}

var checkLog = 0;
function valEmplyFlieldLog(){

    let correoVal = $("#userEmail").val();
    let pass1 = $("#userPass").val();
    
    if (correoVal == "" || pass1 == ""){
        let cont = "";
       
        if (correoVal == ""){
            cont += " Email ";
        }
        if (pass1 == ""){
            cont += " Password ";
        }
        if (checkLog == 0){
        let alertPlaceholderLog = document.getElementById('liveAlertPlaceholderLog')
        var wrapper4 = document.createElement('div')
        wrapper4.innerHTML = `<div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Incorrect Data!</h4>
        <p>  Please be sure to enter all the requested information   </p>
        <hr>
        <p class="mb-0">The following fields have not been filled out correctly.
        `+cont+ `
        </p>
      </div>`

        alertPlaceholderLog.append(wrapper4)

        
        checkLog+=1;
        
        }else{

            let alertPlaceholderLog = document.getElementById('liveAlertPlaceholderLog')
        var wrapper4 = document.createElement('div')
        alertPlaceholderLog.innerHTML = "";
        wrapper4.innerHTML = `<div class="alert alert-danger" role="alert">
        <h4 class="alert-heading">Incorrect Data!</h4>
        <p>  Please be sure to enter all the requested information   </p>
        <hr>
        <p class="mb-0">The following fields have not been filled out correctly.
        `+cont+ `
        </p>
      </div>`
        
        alertPlaceholderLog.append(wrapper4)

            

        }

    }else{

        userlogging();

    }

}