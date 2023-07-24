const Display = document.getElementById('Display')

// Set Display Value for per Click
function Button(Value){
    Display.value = Display.value + Value;
}

// When Press the Clear Button Display Values Will be empty Per click
function Clear(){
    Display.value = ''
}

// When Press the Del Button Delete the last Digit from Display Per Click
function Delete(){
    const Splited = Display.value.split('')
    Splited.pop()
    const NewValue = Splited.join('')
    Display.value = NewValue
}

// When Click to =(equal) button The mathematical calculation will Show in Display
function Result(){
    const DisplayValue = Display.value;
    const Result = eval(DisplayValue)
    Display.value = Result
}