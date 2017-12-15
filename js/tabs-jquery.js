$(() => {
    $('.buttons button').click(ev => {
        $('.buttons button, .tabs div').removeClass('active');
        $(ev.target).addClass('active');
        const tab = ev.target.dataset.tab;
        $('.tabs div').each( (_, el) => {
            if (el.dataset.tab === tab ) {
                el.classList.add('active');
            }
        })
    })
});