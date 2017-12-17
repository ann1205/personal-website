$(() => {
    $('.buttons nav').click(ev => {
        $('.buttons nav, .tabs div').removeClass('active');
        $(ev.target).addClass('active');
        const tab = ev.target.dataset.tab;
        $('.tabs div').each( (_, el) => {
            if (el.dataset.tab === tab ) {
                el.classList.add('active');
            }
        })
    })
});