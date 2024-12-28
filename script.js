const htmlTextarea = document.getElementById('html');
const outputIframe = document.getElementById('output');
const saveButton = document.getElementById('save');
const clearButton = document.getElementById('clear');
const downloadButton = document.getElementById('download');
const uploadButton = document.getElementById('upload');
const runButton = document.getElementById('run');


saveButton.addEventListener('click', () => {
    const htmlContent = htmlTextarea.value;
    localStorage.setItem('htmlContent', htmlContent);
    alert('HTML saved!');
});

clearButton.addEventListener('click', () => {
    htmlTextarea.value = '';
    outputIframe.srcdoc = '';
    alert('Editor cleared!');
});

downloadButton.addEventListener('click', () => {
    const htmlContent = htmlTextarea.value;
    const blob = new Blob([htmlContent], { type: 'text/html' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'index.html';
    link.click();
    alert('HTML downloaded!');
});

uploadButton.addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.html';
    input.addEventListener('change', (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            htmlTextarea.value = reader.result;
        };
        reader.readAsText(file);
    });
    input.click();
});


runButton.addEventListener('click', () => {
    const htmlContent = htmlTextarea.value;
    outputIframe.srcdoc = htmlContent;
});
