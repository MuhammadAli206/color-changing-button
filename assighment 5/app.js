let change = 0;

function changeColors(){

    let colors = ["red","pink","blue","orange","green","purple"]

    document.body.style.background = colors[change++]

    if(change > colors.length){
        change = 0
    }

}