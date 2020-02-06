'use strict'
$(document).ready(function(){

    //================
    //selector de tema
    //================
        var theme = $('#theme');
    
        $('#to-green').click(function(){
            theme.attr('href','css/green.css'); 
        });
    
        $('#to-red').click(function(){
            theme.attr('href','css/red.css'); 
        });
    
        $('#to-blue').click(function(){
            theme.attr('href','css/blue.css'); 
        });
    
    //=======================
    //scroll arriba de la web
    //=======================
    
        $('.subir').click(function(e){
            e.preventDefault();
    
            $('html, body').animate({
                scrollTop: 0
            }, 800);
    
            return false;
        });
    
    //==============
    //  login falso
    //==============
    
        $('#login form').submit(function(){
            var form_name = $('#form_name').val();
    
            localStorage.setItem('form_name', form_name);
        });
    
        var form_name = localStorage.getItem("form_name");
    
        if(form_name != null && form_name != 'undefined'){
            var about_p = $('#about p ');
    
            about_p.html('<br><strong>Bienvenido, ' + form_name + '</strong>');
            about_p.append('<a href="#" id="logout">Cerrar sesión</a>');
            $('#login').hide();
    
            $('#logout').click(function(){
                localStorage.clear();
                location.reload();
            });
        }
    //==============
    //    ACORDEON
    //==============
        var xs = $('#acordeon');
        console.log(xs);
        
        $('#acordeon').accordion();
        
    });