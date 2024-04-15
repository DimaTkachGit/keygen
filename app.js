(() => {
    const welcome = document.getElementById('welcomeUi');
    const result = document.getElementById('resultUi');
    const codeNumber = document.getElementById('codeNumber');
    const keyDataBlock = document.getElementById('keyData');

    const renderKeyColums = (e) => {
        const keyGeneralInfo = [e.code, e.key, e.which];
        const html = keyGeneralInfo.map((val) => {
            return `
            <div class="col-md-4">
                <div class="alert alert-primary" role="alert">
                    <b>${val}</b>
                </div>
            </div> 
        `
        }).join('');
        keyDataBlock.innerHTML = html;
    }

    window.addEventListener('keydown', (e) => {
        welcome.remove();
        result.style.display = 'block';
        codeNumber.innerText = e.keyCode;
        renderKeyColums(e);
    })
})();

