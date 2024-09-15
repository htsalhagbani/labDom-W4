    const continer = document.getElementById('continer');
    const color = document.getElementById('color');
    const length1 = document.getElementById('height');
    const width = document.getElementById('width');
    const border = document.getElementById('border');
    const btnColor = document.getElementById('btn-color');
    const btnheight = document.getElementById('btn-height');
    const btnWidth = document.getElementById('btn-width');
    const btnBorder = document.getElementById('btn-border');
    const btnReset = document.getElementById('reset');

    btnColor.addEventListener('click',()=>{
        continer.style.backgroundColor = color.value;

    })

    btnheight.addEventListener('click',()=>{
        continer.style.height = `${length1.value}vh`;

    })

    btnWidth.addEventListener('click',()=>{
        continer.style.width = `${width.value}vw`;

    })

    btnBorder.addEventListener('click',()=>{
        continer.style.borderRadius = `${border.value}%`;

    })

    btnReset.addEventListener('click',()=>{
        continer.style.backgroundColor = "#0000ff";
        continer.style.height =" 40vh";
        continer.style.width = "30vw";
        continer.style.borderRadius = "0px";
        color.value="#0000ff";
        length1.value="40vh";
        width.value="30vw";
        border.value="0px"


    })