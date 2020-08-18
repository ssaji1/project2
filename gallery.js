var images = [];
ImageCreater();

function ImageCreater(keyword) {
    images = [];
    for (var i = 1; i <= 30; i++) // Inserting images in the array
    {
        if (keyword == null) {
            images.push("hobbies/" + i + ".jpg");

        } else if (keyword == 'all') {
            images.push("hobbies/" + i + ".jpg");

        } else {
            images.push("hobbies/" + keyword + "-" + i + ".jpg");
        }

    }
    imageload(); //refreshing Image positions
}


function sizeChange(index, mode) {
    if (mode == 'medium') {
        document.body.innerHTML += `<div class="containersize">
                                        <img id="enlarged" onclick="sizeChange(${index}, 'large')" class="medium" src="${images[index]}">
                                    </div>`;
    } else if (mode == 'large') {
        document.getElementById("enlarged").className = "large";
        document.getElementById("enlarged").setAttribute("onclick", "sizeChange(" + index + ", 'full-screen')");
    } else if (mode == 'full-screen') {
        document.getElementById("enlarged").className = "fullscreen";
        document.getElementById("enlarged").setAttribute("onclick", "sizeChange(" + index + ", 'exit')");
    } else if (mode == 'exit') {
        var remove = document.getElementsByClassName("containersize");
        remove[0].parentNode.removeChild(remove[0]);
    }
}

function previous(index) {
    if (index > 0) {
        var temp = images[index];
        var index_next = index - 1

        images[index] = images[index_next];
        images[index_next] = temp;
        imageload();
    }
}

function last(index) {
    var temp = images[index];
    images.splice(index, 1);
    images.push(temp);
    imageload();

}

function next(index) {
    var temp = images[index];
    var index_next = index + 1
    images[index] = images[index_next];
    images[index_next] = temp;
    imageload(); 
}

function first(index) {
    var temp = images[index];
    images.splice(index, 1); 
    images.unshift(temp); 
    imageload();
}

function imageload() {
    console.log(images);
    document.getElementById("listing").innerHTML = null;
    var i;
    for (i = 0; i < images.length; i++) {
        var current_image = images[i];

        var image = `<div class="container">
                        <img indexno="${i}" src="${current_image}" alt="Image not found" class="image">
                            <div class="overlay">
                                <div class="image-button">
                                    <i class="first" onclick="first(${i})"></i>
                                    <i class="previous" onclick="previous(${i})"></i>
                                    <i class="zoom" onclick="sizeChange(${i},'medium')"></i>
                                    <i class="next" onclick="next(${i})"></i>
                                    <i class="last" onclick="last(${i})"></i>
                                </div>
                            </div>
                     </div>`;
        document.getElementById("listing").innerHTML += image;
    }
}