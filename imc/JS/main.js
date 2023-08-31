
function calcular(){
    peso=parseFloat(document.getElementById("peso").value);
    altura=parseFloat(document.getElementById("altura").value);
    genero=document.getElementById("genero").value;
    grado=["Delgadez Muy Severa","Delgadez Severa","Delgadez","Normalidad","Sobrepeso","Obesidad Moderada","Obesidad Severa","Obesidad Mórbida"];
    imagen=document.getElementById('img');
    res = peso / (altura*altura);
    resultado = res.toFixed(2);
    document.getElementById("imcT").innerHTML = resultado;

    
    switch (genero) {
        case "f":
            if (res<18.5) {
                imagen.setAttribute("src", "img/mujerD.png");
            } else{
                if(res>=18.5 && res<25){
                    imagen.setAttribute("src", "img/mujerN.png");
                } else{
                    if(res>=25 && res<30){
                        imagen.setAttribute("src", "img/mujerS.png");
                    } else{
                        if(res>=30 && res<40){
                            imagen.setAttribute("src", "img/mujerO.png");
                        } else{
                            if(res>=40){
                                imagen.setAttribute("src", "img/mujerOM.png");
                            } 
                        }
                    }
                }
            }
            break;
        default:
            if (res<18.5) {
                imagen.setAttribute("src", "img/hombreD.png");
            } else{
                if(res>=18.5 && res<25){
                    imagen.setAttribute("src", "img/hombreN.png");
                } else{
                    if(res>=25 && res<30){
                        imagen.setAttribute("src", "img/hombreS.png");
                    } else{
                        if(res>=30 && res<40){
                            imagen.setAttribute("src", "img/hombreO.png");
                        } else{
                            if(res>=40){
                                imagen.setAttribute("src", "img/hombreOM.png");
                            } 
                        }
                    }
                }
            }
            break;
    }
    
    if (res<=15) {
        document.getElementById("grado").innerHTML = grado[0];
        document.getElementById("imcT").style="color: rgb(78, 153, 252);"
        document.getElementById("grado").style="color: rgb(78, 153, 252);"
    }else{
        if(res>15 && res<16){
            document.getElementById("grado").innerHTML = grado[1];
            document.getElementById("imcT").style="color: rgb(78, 153, 252);"
            document.getElementById("grado").style="color: rgb(78, 153, 252);"
        }else{
            if(res>=16 && res<18.5){
                document.getElementById("grado").innerHTML = grado[2];
                document.getElementById("imcT").style="color: rgb(78, 153, 252);"
                document.getElementById("grado").style="color: rgb(78, 153, 252);"
            }else{
                if(res>=18.5 && res<25){
                    document.getElementById("grado").innerHTML = grado[3];
                    document.getElementById("imcT").style="color: rgba(115, 255, 0, 0.808);"
                    document.getElementById("grado").style="color: rgba(115, 255, 0, 0.808);"
                }else{
                    if(res>=25 && res<30){
                        document.getElementById("grado").innerHTML = grado[4];
                        document.getElementById("imcT").style="color: orange;"
                        document.getElementById("grado").style="color: orange;"
                    }else{
                        if(res>=30 && res<40){
                            document.getElementById("grado").innerHTML = grado[5];
                            document.getElementById("imcT").style="color: orangered;"
                            document.getElementById("grado").style="color: orangered;"
                        }else{
                            if(res>=40){
                                document.getElementById("grado").innerHTML = grado[6];
                                document.getElementById("imcT").style="color: red;"
                                document.getElementById("grado").style="color: red;"
                            }
                        }
                    }
                }
            }
        }
    }
}
