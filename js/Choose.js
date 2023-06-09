function handleCheckboxChange(checkbox) {
    if (checkbox.checked) {
        var child = document.querySelector('#' + checkbox.value).querySelectorAll('a-cylinder');
        child.forEach(function (child) {
            child.setAttribute('visible', true);
            child.setAttribute('static-body', '');
        });
    } else {
        var child = document.querySelector('#' + checkbox.value).querySelectorAll('a-cylinder');
        child.forEach(function (child) {
            child.setAttribute('visible', false);
            child.removeAttribute('static-body');
        });
    }
}