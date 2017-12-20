document.querySelectorAll('.buttons button').forEach( el => {
    el.addEventListener('click', switchTab);
});

function switchTab(ev) {
    document.querySelectorAll('.buttons nav, .tabs div').forEach( el => {
        el.classList.remove('active');
    });
    ev.target.classList.add('active');
    const tab = ev.target.dataset.tab;
    document.querySelectorAll('.tabs div').forEach( el => {
        if (el.dataset.tab === tab ) {
            el.classList.add('active');
        }
    })
}

$(function(){
   $('#contact-form input[type=submit]').click(sendForm); 
});

function sendForm(ev) {
    const form  = document.getElementsByTagName('form')[0];
    if (form.checkValidity()) {
        ev.preventDefault();
        $.ajax({
            url: "https://formspree.io/gannanychyporchuk@gmail.com", 
            method: "POST",
            data: {
                name: $('#name').val(),
                email: $('#email').val(),
                feedback: $('#feedback').val()
            },
            dataType: "json"
        })
    }
}

