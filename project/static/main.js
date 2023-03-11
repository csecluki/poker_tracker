$(function() {
    $('input[name="rebuys_already"]').on('input', function() {
        console.log('CHANGE');
        localStorage.setItem('rebuys', $(this).val());
    })

    $('#id_rebuys').val(localStorage.getItem('rebuys'))
    console.log('localStorage:', localStorage.getItem('rebuys'))

    $('#rebuys_already').val(localStorage.getItem('rebuys'))
    console.log('localStorage:', localStorage.getItem('rebuys'))

    $("#start_session_button").click(function() {
        console.log('Session started');
        localStorage.setItem('rebuys', 0);
    })
})
