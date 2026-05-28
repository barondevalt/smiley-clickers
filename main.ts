input.onButtonPressed(Button.A, function () {
    cookies += 1
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . # . # .
        . # . # .
        . # . # .
        # . . . #
        . # # # .
        `)
})
input.onButtonPressed(Button.AB, function () {
	
})
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (cookies))
})
let cookies = 0
music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Nyan), music.PlaybackMode.InBackground)
basic.showLeds(`
    # # # # #
    # . . . .
    # # # # #
    . . . # #
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # . # . #
    # . # . #
    # . # . #
    # . # . #
    `)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    # # # # #
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # . . . .
    # # # # #
    # . . . .
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # . . . .
    # . . . .
    # . . . .
    # # # # #
    `)
basic.showLeds(`
    # . . . .
    # . . . .
    # . . . .
    # . . . .
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    . . # . .
    . . # . .
    . . # . .
    # # # # #
    `)
basic.showLeds(`
    # # # # #
    # . . . .
    # . . . .
    # . . . .
    # # # # #
    `)
basic.showLeds(`
    # . . . #
    # . . # .
    # # # . .
    # . . # .
    # . . . #
    `)
basic.showLeds(`
    # # # # #
    # . . . .
    # # # # #
    # . . . .
    # # # # #
    `)
basic.showLeds(`
    # # # # .
    # . . . #
    # # # # .
    # . . # .
    # . . . #
    `)
basic.showLeds(`
    . . . . #
    . . . # .
    . . # . .
    . # . . .
    # . . . .
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    . . # . .
    . # . # .
    # . . . #
    `)
basic.showLeds(`
    # . . . #
    . # . # .
    # # # # #
    . # . # .
    # . . . #
    `)
basic.showLeds(`
    # . # . #
    . # # # .
    # # # # #
    . # # # .
    # . # . #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    . # # # .
    # . # . #
    `)
basic.showLeds(`
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    # # # # #
    `)
basic.showLeds(`
    # . # . #
    . # # # .
    # # # # #
    . # # # .
    # . # . #
    `)
basic.showLeds(`
    # . # . #
    . # # # .
    # # # # #
    . # # # .
    # . # . #
    `)
basic.showLeds(`
    # . # . #
    . # . # .
    # # # # #
    # # . # #
    # # # # #
    `)
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    # # . # #
    # # # # #
    `)
basic.showLeds(`
    # . # . #
    . # . # .
    # . # . #
    # # . # #
    . # # # .
    `)
basic.showLeds(`
    # # # # #
    . # . # .
    # # # # #
    # # . # #
    . # # # .
    `)
basic.showLeds(`
    # # # # #
    . # . # .
    # # . # #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # . # .
    . # . # .
    # # . # #
    # . . . #
    . # # # .
    `)
basic.showLeds(`
    . # . # .
    . # . # .
    . # . # .
    # . . . #
    . # # # .
    `)
basic.forever(function () {
	
})
basic.forever(function () {
    if (cookies > 19 && input.buttonIsPressed(Button.AB)) {
        for (let index = 0; index < 1e+73; index++) {
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
            basic.pause(100)
            cookies += 1
        }
    }
})
basic.forever(function () {
    if (cookies > 1e+73 && input.buttonIsPressed(Button.AB)) {
        basic.pause(50)
        cookies += 2
    }
})
basic.forever(function () {
	
})
