function displayMessage(message) {
    document.getElementById('message').style['display'] = "block";
    document.getElementById('message').innerHTML = `<p><strong>Warning:</strong> ${message} <a href="#">Read more</a>.</p>` ; 
    document.getElementById('file').setAttribute('aria-describedby', 'message') 
}

function clearMessage() {
    document.getElementById('message').style['display'] = "none";
    document.getElementById('message').innerHTML = "";
    document.getElementById('file').removeAttribute('aria-describedby')
}

function checkFile(e) {
    const formData  = new FormData();
    formData.append('pdf', e);
    fetch(process.env.BACKEND_URL, {
        method: 'POST',
        body: formData
    }).then((response) => response.json())
        .then((data) => {
            console.log(data);
            let messages = '';
            if (data.EmptyTextTest == "Fail") {
                messages += 'This PDF file contains no text, it may be a scanned document and in this case not accessible to persons with disabilities. Please apply an OCR to this document and then make it accessible or provide an accessible alternative (ex: same content on a web page). ';
            } else if (data.TaggedTest == "Fail") {
                messages += 'This PDF file is not tagged. This is a major accessibility issue for persons with disabilities. Please render this file accessible or provide an accessible alternative (ex: same content on a web page). ';
            }
            if (data.ProtectedTest == "Fail") {
                messages += 'This PDF file is protected against the use by assistive technologies. This is a major accessibility issue for persons with disabilities. Please review the security settings of this file or provide an accessible alternative (ex: same content on a web page).';
            }
            if (messages !== '') {
                displayMessage(messages);
            } else {
                clearMessage();
            }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('file').addEventListener('change', function(evt) {
        let f = evt.target.files[0];
        if (f.type === 'application/pdf') {
            checkFile(f);
        } else {
            clearMessage();
        }
    }, false);
}, false);