led.setBrightness(255)
led.plotBrightness(2, 2, 100)
let x = 0
let y = 0
let otoceni = 0
input.onButtonPressed(Button.A, function turn_on_1() {
    
    otoceni = 0
})
input.onButtonPressed(Button.B, function turn_on_2() {
    
    otoceni = 1
})
function spin_1() {
    
    
    if (otoceni == 0) {
        basic.clearScreen()
        led.plotBrightness(2, 2, 100)
        led.plot(x, y)
        led.plot(x + 1, y + 1)
        basic.pause(1000)
        basic.clearScreen()
        led.plotBrightness(2, 2, 100)
        led.plot(x + 2, y + 1)
        led.plot(x + 2, y)
        basic.pause(1000)
        basic.clearScreen()
        led.plotBrightness(2, 2, 100)
        led.plot(x + 3, y + 1)
        led.plot(x + 4, y)
        basic.pause(1000)
        basic.clearScreen()
        led.plotBrightness(2, 2, 100)
        led.plot(x + 4, y + 2)
        led.plot(x + 3, y + 2)
        basic.pause(1000)
        basic.clearScreen()
        led.plotBrightness(2, 2, 100)
        led.plot(x + 4, y + 4)
        led.plot(x + 3, y + 3)
        basic.pause(1000)
        basic.clearScreen()
        led.plotBrightness(2, 2, 100)
        led.plot(x + 2, y + 4)
        led.plot(x + 2, y + 3)
        basic.pause(1000)
        basic.clearScreen()
        led.plotBrightness(2, 2, 100)
        led.plot(x, y + 4)
        led.plot(x + 1, y + 3)
        basic.pause(1000)
        basic.clearScreen()
        led.plotBrightness(2, 2, 100)
        led.plot(x, y + 2)
        led.plot(x + 1, y + 2)
        basic.pause(1000)
    }
    
    basic.forever(spin_1)
}

input.onButtonPressed(Button.A, spin_1)
function spin_2() {
    
    
    if (otoceni == 1) {
        basic.clearScreen()
        led.plotBrightness(2, 2, 100)
        led.plot(x, y)
        led.plot(x + 1, y + 1)
        basic.pause(1000)
        basic.clearScreen()
        led.plotBrightness(2, 2, 100)
        led.plot(x, y + 2)
        led.plot(x + 1, y + 2)
        basic.pause(1000)
        basic.clearScreen()
        led.plotBrightness(2, 2, 100)
        led.plot(x, y + 4)
        led.plot(x + 1, y + 3)
        basic.pause(1000)
        basic.clearScreen()
        led.plotBrightness(2, 2, 100)
        led.plot(x + 2, y + 4)
        led.plot(x + 2, y + 3)
        basic.pause(1000)
        basic.clearScreen()
        led.plotBrightness(2, 2, 100)
        led.plot(x + 4, y + 4)
        led.plot(x + 3, y + 3)
        basic.pause(1000)
        basic.clearScreen()
        led.plotBrightness(2, 2, 100)
        led.plot(x + 4, y + 2)
        led.plot(x + 3, y + 2)
        basic.pause(1000)
        basic.clearScreen()
        led.plotBrightness(2, 2, 100)
        led.plot(x + 3, y + 1)
        led.plot(x + 4, y)
        basic.pause(1000)
        basic.clearScreen()
        led.plotBrightness(2, 2, 100)
        led.plot(x + 2, y + 1)
        led.plot(x + 2, y)
        basic.pause(1000)
    }
    
    basic.forever(spin_2)
}

input.onButtonPressed(Button.B, spin_2)
