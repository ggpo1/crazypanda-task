const SLIDER_MAX_VALUE = 255;

let redValue = 130,
    greenValue = 127,
    blueValue = 255,
    colorMode = 0;

function setColor() {
    $('.text').css(colorMode === 0 ? 'color' : 'background', `rgb(${redValue},${greenValue}, ${blueValue})`);
}

function setSelected(selector, rmSelector) {
    $(selector).addClass('selected-button');
    $(rmSelector).removeClass('selected-button');
}

$(function () {

    $('#colorButton').click(() => { colorMode = 0; setColor(); setSelected('#colorButton', '#backgroundButton'); });
    $('#backgroundButton').click(() => { colorMode = 1; setColor(); setSelected('#backgroundButton', '#colorButton');});

    $('#colorButton').addClass('selected-button');

    $('#redSlider').slider({
        max: SLIDER_MAX_VALUE,
        value: redValue,
        slide: (event, ui) => {
            redValue = ui.value;
            setColor();
        }
    });
    $('#greenSlider').slider({
        max: SLIDER_MAX_VALUE,
        value: greenValue,
        slide: (event, ui) => {
            greenValue = ui.value;
            setColor();
        }
    });
    $('#blueSlider').slider({
        max: SLIDER_MAX_VALUE,
        value: blueValue,
        slide: (event, ui) => {
            blueValue = ui.value;
            setColor();
        }
    });
});

        // $("#redSlider").slider();