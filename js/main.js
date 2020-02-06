'use strict'

$(document).ready(function(){
//==============
//    slider
//==============
    
    $(function(){
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: false,
            slideWidth: 1200,
            responsive: true
        });
      });

//==============
//    post
//==============
var posts = [
    {
        tittle: 'pruba de título 1',
        date: 'Publicado el dia ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
        content: 'Etiam sagittis sem purus, ut efficitur lorem placerat ac. Praesent posuere, elit et pharetra bibendum, ipsum diam laoreet sem, non volutpat tortor orci quis lacus. Sed sit amet bibendum purus. Phasellus aliquet nunc et dictum bibendum. Nunc et pulvinar ante, eget interdum nulla. Proin iaculis porttitor elit, et consequat est consequat quis. Nulla at diam dolor. Curabitur leo urna, mattis ac massa nec, sagittis interdum velit. Proin sit amet turpis gravida, rhoncus neque vel, fringilla sapien. Donec nibh ex, lacinia in lorem eget, tempus auctor nisl. Proin congue dolor mi, sit amet mattis turpis sodales a. Aliquam rutrum urna mattis, malesuada nunc eu, convallis nisl. Aenean vestibulum eros augue, non ultrices sapien aliquet id. Phasellus fermentum cursus eros, non pharetra risus placerat nec.'
    },
    {
        tittle: 'pruba de título 2',
        date: 'Publicado el dia ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
        content: 'Etiam sagittis sem purus, ut efficitur lorem placerat ac. Praesent posuere, elit et pharetra bibendum, ipsum diam laoreet sem, non volutpat tortor orci quis lacus. Sed sit amet bibendum purus. Phasellus aliquet nunc et dictum bibendum. Nunc et pulvinar ante, eget interdum nulla. Proin iaculis porttitor elit, et consequat est consequat quis. Nulla at diam dolor. Curabitur leo urna, mattis ac massa nec, sagittis interdum velit. Proin sit amet turpis gravida, rhoncus neque vel, fringilla sapien. Donec nibh ex, lacinia in lorem eget, tempus auctor nisl. Proin congue dolor mi, sit amet mattis turpis sodales a. Aliquam rutrum urna mattis, malesuada nunc eu, convallis nisl. Aenean vestibulum eros augue, non ultrices sapien aliquet id. Phasellus fermentum cursus eros, non pharetra risus placerat nec.'
    },
    {
        tittle: 'pruba de título 3',
        date: 'Publicado el dia ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
        content: 'Etiam sagittis sem purus, ut efficitur lorem placerat ac. Praesent posuere, elit et pharetra bibendum, ipsum diam laoreet sem, non volutpat tortor orci quis lacus. Sed sit amet bibendum purus. Phasellus aliquet nunc et dictum bibendum. Nunc et pulvinar ante, eget interdum nulla. Proin iaculis porttitor elit, et consequat est consequat quis. Nulla at diam dolor. Curabitur leo urna, mattis ac massa nec, sagittis interdum velit. Proin sit amet turpis gravida, rhoncus neque vel, fringilla sapien. Donec nibh ex, lacinia in lorem eget, tempus auctor nisl. Proin congue dolor mi, sit amet mattis turpis sodales a. Aliquam rutrum urna mattis, malesuada nunc eu, convallis nisl. Aenean vestibulum eros augue, non ultrices sapien aliquet id. Phasellus fermentum cursus eros, non pharetra risus placerat nec.'
    },
    {
        tittle: 'pruba de título 4',
        date: 'Publicado el dia ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
        content: 'Etiam sagittis sem purus, ut efficitur lorem placerat ac. Praesent posuere, elit et pharetra bibendum, ipsum diam laoreet sem, non volutpat tortor orci quis lacus. Sed sit amet bibendum purus. Phasellus aliquet nunc et dictum bibendum. Nunc et pulvinar ante, eget interdum nulla. Proin iaculis porttitor elit, et consequat est consequat quis. Nulla at diam dolor. Curabitur leo urna, mattis ac massa nec, sagittis interdum velit. Proin sit amet turpis gravida, rhoncus neque vel, fringilla sapien. Donec nibh ex, lacinia in lorem eget, tempus auctor nisl. Proin congue dolor mi, sit amet mattis turpis sodales a. Aliquam rutrum urna mattis, malesuada nunc eu, convallis nisl. Aenean vestibulum eros augue, non ultrices sapien aliquet id. Phasellus fermentum cursus eros, non pharetra risus placerat nec.'
    },
    {
        tittle: 'pruba de título 5',
        date: 'Publicado el dia ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
        content: 'Etiam sagittis sem purus, ut efficitur lorem placerat ac. Praesent posuere, elit et pharetra bibendum, ipsum diam laoreet sem, non volutpat tortor orci quis lacus. Sed sit amet bibendum purus. Phasellus aliquet nunc et dictum bibendum. Nunc et pulvinar ante, eget interdum nulla. Proin iaculis porttitor elit, et consequat est consequat quis. Nulla at diam dolor. Curabitur leo urna, mattis ac massa nec, sagittis interdum velit. Proin sit amet turpis gravida, rhoncus neque vel, fringilla sapien. Donec nibh ex, lacinia in lorem eget, tempus auctor nisl. Proin congue dolor mi, sit amet mattis turpis sodales a. Aliquam rutrum urna mattis, malesuada nunc eu, convallis nisl. Aenean vestibulum eros augue, non ultrices sapien aliquet id. Phasellus fermentum cursus eros, non pharetra risus placerat nec.'
    },
    {
        tittle: 'pruba de título 6',
        date: 'Publicado el dia ' + moment().format('DD') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
        content: 'Etiam sagittis sem purus, ut efficitur lorem placerat ac. Praesent posuere, elit et pharetra bibendum, ipsum diam laoreet sem, non volutpat tortor orci quis lacus. Sed sit amet bibendum purus. Phasellus aliquet nunc et dictum bibendum. Nunc et pulvinar ante, eget interdum nulla. Proin iaculis porttitor elit, et consequat est consequat quis. Nulla at diam dolor. Curabitur leo urna, mattis ac massa nec, sagittis interdum velit. Proin sit amet turpis gravida, rhoncus neque vel, fringilla sapien. Donec nibh ex, lacinia in lorem eget, tempus auctor nisl. Proin congue dolor mi, sit amet mattis turpis sodales a. Aliquam rutrum urna mattis, malesuada nunc eu, convallis nisl. Aenean vestibulum eros augue, non ultrices sapien aliquet id. Phasellus fermentum cursus eros, non pharetra risus placerat nec.'
    },
];

    posts.forEach((item, index)=>{
        var post = `
            <article class="post">
            <h2>${item.tittle}</h2>
                <span class="date">${item.date}</span>
                <p>
                    ${item.content}     
                </p>
                <a href="#" class="button-more">Leer más</a>
            </article>
        `
        $('#posts').append(post);
    }); 

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

//======================
//scroll arriba de la we
//======================

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
});