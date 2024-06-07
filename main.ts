music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Ringtone), music.PlaybackMode.InBackground)
basic.showString("3")
basic.showString("2")
basic.showString("1")
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.Diamond)
basic.showIcon(IconNames.Square)
basic.forever(function () {
    reromicro.ReadLineSensors()
    if (reromicro.ReadUltrasonic() > 15) {
        if (reromicro.LineSensorDetectsLine(LineSensors.Center) && (reromicro.LineSensorDetectsLine(LineSensors.Left) && reromicro.LineSensorDetectsLine(LineSensors.Right))) {
            reromicro.Brake()
            basic.pause(100)
            basic.showString("FINISH!")
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Center)) {
            reromicro.MoveForward(35)
            basic.showLeds(`
                . . # . .
                . # # # .
                # . # . #
                . . # . .
                . . # . .
                `)
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Left)) {
            reromicro.RunMotor(Motors.Left, 0)
            reromicro.RunMotor(Motors.Right, 35)
            basic.showLeds(`
                . . # . .
                . # . . .
                # # # # #
                . # . . .
                . . # . .
                `)
        } else if (reromicro.LineSensorDetectsLine(LineSensors.Right)) {
            reromicro.RunMotor(Motors.Left, 35)
            reromicro.RunMotor(Motors.Right, 0)
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # # #
                . . . # .
                . . # . .
                `)
        } else {
            reromicro.Brake()
        }
    } else {
        reromicro.Brake()
    }
})
