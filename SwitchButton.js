class SwitchButton {
    constructor(lamp, status) {
        this.lamp = lamp
        this.status = status
    }

    SwitchButton() {
        if (this.switchOn()) {
            return this.switchOff()
        } else if (this.switchOff()) {
            return this.switchOn
        }
    }

    connectToLamp(Electriclamp) {
        return this.lamp = Electriclamp;
    }

    switchOff() {
        this.lamp.status = false;
        return this.status = false
    }

    switchOn() {
        this.lamp.status = true
        return this.status = true
    }
}

