let ForçaAgora = 0
let forcaInicial = input.magneticForce(Dimension.Strength)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    ForçaAgora = input.magneticForce(Dimension.Strength)
    serial.writeValue("T", ForçaAgora)
    if (ForçaAgora > forcaInicial + 50) {
        basic.showIcon(IconNames.SmallDiamond)
        basic.showIcon(IconNames.Diamond)
    } else {
        basic.clearScreen()
    }
})
