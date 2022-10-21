led.enable(false)
let I1 = 0
let I2 = 0
let I3 = 0
let I4 = 0
let I5 = 0
basic.forever(function () {
    I1 = pins.digitalReadPin(DigitalPin.P1)
    I2 = pins.digitalReadPin(DigitalPin.P2)
    I3 = pins.digitalReadPin(DigitalPin.P3)
    I4 = pins.digitalReadPin(DigitalPin.P4)
    I5 = pins.digitalReadPin(DigitalPin.P5)
    if (I3 == 0 && (I2 == 1 && I4 == 1) && (I1 == 1 && I5 == 1)) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        -113
        )
    } else if (I2 == 0 && (I3 == 1 && I4 == 1) && (I1 == 1 && I5 == 1)) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -125,
        SuperBit.enMotors.M3,
        0
        )
    } else if (I5 == 0 && (I2 == 1 && I4 == 1) && (I3 == 1 && I1 == 1)) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        90,
        SuperBit.enMotors.M3,
        -133
        )
    } else if (I4 == 0 && (I2 == 1 && I3 == 1) && (I1 == 1 && I5 == 1)) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        90,
        SuperBit.enMotors.M3,
        -133
        )
    } else if (I4 == 1 && (I2 == 1 && I3 == 1) && (I1 == 1 && I5 == 1)) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -115,
        SuperBit.enMotors.M3,
        0
        )
    } else if (I5 == 0 && (I2 == 1 && I4 == 1)) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        90,
        SuperBit.enMotors.M3,
        -133
        )
    } else if (I5 == 0 && (I2 == 1 && I3 == 1)) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        90,
        SuperBit.enMotors.M3,
        -133
        )
    } else if (I5 == 0 && (I4 == 0 && I3 == 1) && (I2 == 1 && I1 == 1)) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        90,
        SuperBit.enMotors.M3,
        -133
        )
    } else if (I5 == 0 && (I4 == 0 && I3 == 0) && (I2 == 1 && I1 == 1)) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        90,
        SuperBit.enMotors.M3,
        -133
        )
    } else if (I4 == 1 && (I2 == 0 && I3 == 0)) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -145,
        SuperBit.enMotors.M3,
        0
        )
    } else if (I4 == 1 && (I2 == 1 && I1 == 0)) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -125,
        SuperBit.enMotors.M3,
        0
        )
    } else if (I5 == 0 && (I4 == 0 && I3 == 0) && (I2 == 0 && I1 == 0)) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        -145
        )
    } else if (I5 == 1 && (I4 == 1 && I3 == 1) && (I2 == 0 && I1 == 0)) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -125,
        SuperBit.enMotors.M3,
        0
        )
    } else if (I5 == 1 && (I4 == 0 && I3 == 0) && (I2 == 0 && I1 == 1)) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -125,
        SuperBit.enMotors.M3,
        0
        )
    } else if (I5 == 1 && (I4 == 1 && I3 == 1) && (I2 == 1 && I1 == 0)) {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        -125,
        SuperBit.enMotors.M3,
        0
        )
    } else {
        SuperBit.MotorRunDual(
        SuperBit.enMotors.M1,
        0,
        SuperBit.enMotors.M3,
        -113
        )
    }
})
