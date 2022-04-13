led.set_brightness(255)
led.plot_brightness(2, 2, 100)
x = 0
y = 0
otoceni = 0

def turn_on_1():
    global otoceni
    otoceni = 0
input.on_button_pressed(Button.A, turn_on_1)

def turn_on_2():
    global otoceni
    otoceni = 1
input.on_button_pressed(Button.B, turn_on_2)


def spin_1():
    global x, y
    global otoceni
    if otoceni == 0:

        basic.clear_screen()
        led.plot_brightness(2, 2, 100)
        led.plot(x, y)
        led.plot(x+1, y+1)
        basic.pause(1000)

        basic.clear_screen()
        led.plot_brightness(2, 2, 100)
        led.plot(x+2, y+1)
        led.plot(x+2, y)
        basic.pause(1000)

        basic.clear_screen()
        led.plot_brightness(2, 2, 100)
        led.plot(x+3, y+1)
        led.plot(x+4, y)
        basic.pause(1000)

        basic.clear_screen()
        led.plot_brightness(2, 2, 100)
        led.plot(x+4, y+2)
        led.plot(x+3, y+2)
        basic.pause(1000)

        basic.clear_screen()
        led.plot_brightness(2, 2, 100)
        led.plot(x+4, y+4)
        led.plot(x+3, y+3)
        basic.pause(1000)

        basic.clear_screen()
        led.plot_brightness(2, 2, 100)
        led.plot(x+2, y+4)
        led.plot(x+2, y+3)
        basic.pause(1000)

        basic.clear_screen()
        led.plot_brightness(2, 2, 100)
        led.plot(x, y+4)
        led.plot(x+1, y+3)
        basic.pause(1000)

        basic.clear_screen()
        led.plot_brightness(2, 2, 100)
        led.plot(x, y+2)
        led.plot(x+1, y+2)
        basic.pause(1000)

    basic.forever(spin_1)
input.on_button_pressed(Button.A, spin_1)

def spin_2():
    global x, y
    global otoceni
    if otoceni == 1:

        basic.clear_screen()
        led.plot_brightness(2, 2, 100)
        led.plot(x, y)
        led.plot(x+1, y+1)
        basic.pause(1000)

        basic.clear_screen()
        led.plot_brightness(2, 2, 100)
        led.plot(x, y+2)
        led.plot(x+1, y+2)
        basic.pause(1000)

        basic.clear_screen()
        led.plot_brightness(2, 2, 100)
        led.plot(x, y+4)
        led.plot(x+1, y+3)
        basic.pause(1000)

        basic.clear_screen()
        led.plot_brightness(2, 2, 100)
        led.plot(x+2, y+4)
        led.plot(x+2, y+3)
        basic.pause(1000)

        basic.clear_screen()
        led.plot_brightness(2, 2, 100)
        led.plot(x+4, y+4)
        led.plot(x+3, y+3)
        basic.pause(1000)

        basic.clear_screen()
        led.plot_brightness(2, 2, 100)
        led.plot(x+4, y+2)
        led.plot(x+3, y+2)
        basic.pause(1000)


        basic.clear_screen()
        led.plot_brightness(2, 2, 100)
        led.plot(x+3, y+1)
        led.plot(x+4, y)
        basic.pause(1000)

        basic.clear_screen()
        led.plot_brightness(2, 2, 100)
        led.plot(x+2, y+1)
        led.plot(x+2, y)
        basic.pause(1000)

    basic.forever(spin_2)
input.on_button_pressed(Button.B, spin_2)