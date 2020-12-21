function loadGIF(elem){//quick and dirty way to load a gif on click, by encoding the GIF name into the id
    console.log(elem.id);
    if (!elem.src.includes(elem.id))//dont reload one double click
        elem.src=elem.id;
}