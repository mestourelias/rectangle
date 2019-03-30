var combienDeRectangles = 10,
    listRects = [];

window.addEventListener("load", function() 
{ 
    for(var i = 1; i <= combienDeRectangles; i++)
    {
        nouveauRectangle();
    }
});

function nouveauRectangle()
{
    var rect = randRect(),
        hitTest = hitTestAll(rect);

    if(((rect.x + rect.w) >= window.innerWidth) || ((rect.y + rect.h) >= window.innerHeight))
    {
        hitTest = true;
    }

    if(!hitTest) 
    {
        listRects.push(rect);
        factory("div", rect.w, rect.h, rect.x, rect.y);
    } 
    else 
    {
        nouveauRectangle();
    }
}

function factory(el, w, h, x, y)
{
    var objet = document.createElement(el);
    objet.style.position = "absolute";
    objet.style.width = w + "px";
    objet.style.height = h + "px";
    objet.style.left = x + "px";
    objet.style.top = y + "px";
    objet.style.backgroundColor = "rgb(" + randeRange(0, 255) + "," + randeRange(0, 255) + "," + randeRange(0, 255) + ")";

    document.body.appendChild(objet);
}

function randRect()
{
    return { x: randeRange(0, window.innerWidth), y: randeRange(0, window.innerHeight), w: randeRange(50, 300), h: randeRange(50, 300) };
}

function hitTestAll(rect)
{
    for(var i = 0; i < listRects.length; i++)
    {
        if( hitTest(rect, listRects[i]) )
        {
            return true;
        }
    }

    return false;
}

function hitTest(r1, r2) 
{ 
    return (((r1.x + r1.w >= r2.x) && (r1.x <= r2.x + r2.w)) && ((r1.y + r1.h >= r2.y) && (r1.y <= r2.y + r2.h))); 
}

function randeRange(min, max)
{
    return Math.floor(Math.random() * max) + min;
}

function randColor() 
{ 
    return "#" + Math.round(Math.random() * 0xFFFFFF).toString(16);
}