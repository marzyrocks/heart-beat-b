let digital_write_pin_P1 = 0
let digital_write_pin_P2 = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("HELLO!")
    music.playMelody("E C C F F C C E ", 98)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showString("LOVE!")
    music.playMelody("A C5 C5 G G C5 C5 A ", 98)
})
basic.forever(function () {
    digital_write_pin_P1 = 1
    basic.pause(200)
    digital_write_pin_P1 += 0
    basic.pause(100)
})
basic.forever(function () {
    digital_write_pin_P2 = 0
    basic.pause(200)
    digital_write_pin_P2 += 1
    basic.pause(100)
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
})
