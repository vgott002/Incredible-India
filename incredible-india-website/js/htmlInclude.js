// htmlInclude.js
document.addEventListener("DOMContentLoaded", function () {
    includeHTML();
});

function includeHTML() {
    var elements, i, file, xhttp;
    /* Loop through a collection of all HTML elements with the class "includeHTML" */
    elements = document.querySelectorAll('[include-html]');
    for (i = 0; i < elements.length; i++) {
        file = elements[i].getAttribute('include-html');
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    /* Insert the HTML content of the file into the HTML element */
                    elements[i].innerHTML = this.responseText;
                    /* Remove the attribute, and call this function once more: */
                    elements[i].removeAttribute('include-html');
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}
