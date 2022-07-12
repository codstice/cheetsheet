// get method request
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
    if (target.readyState === XMLHttpRequest.DONE) {
        if (status === 200 || status === 201)) {
            console.log(xhr.responseText);
        } else {
            console.error(xhr.responseText);
        }
    }
};
xhr.open('GET', url);
// xhr.open('GET', encodeURIComponent(url+"/한글")+"?name=foo");
xhr.send();


// post method request using JSON
var xhr = new XMLHttpRequest();
var data = {};
xhr.onreadystatechange = function () {
    if (target.readyState === XMLHttpRequest.DONE) {
        if (status === 200 || status === 201)) {
            console.log(xhr.responseText);
        } else {
            console.error(xhr.responseText);
        }
    }
};
xhr.open('POST', url);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.send(JSON.stringify(data));


// post method request using FormData
var xhr = new XMLHttpRequest();
var data = new FormData();
data.append('name', 'foo')
xhr.onreadystatechange = function () {
    if (target.readyState === XMLHttpRequest.DONE) {
        if (status === 200 || status === 201)) {
            console.log(xhr.responseText);
        } else {
            console.error(xhr.responseText);
        }
    }
};
xhr.open('POST', url);
xhr.send(data);


// post using form element
function submit() {
    var form = document.createElement("form");
    form.setAttribute("charset", "UTF-8");
    form.setAttribute("method", "Post");
    form.setAttribute("action", url);

    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("type", "hidden");
    hiddenField.setAttribute("name", "name");
    hiddenField.setAttribute("value", "value");
    form.appendChild(hiddenField);

    document.body.appendChild(form);
    form.submit();
}
