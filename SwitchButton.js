class SwitchButton {
    constructor(lamp, status) {
        this.lamp = lamp
        this.status = status
    }

    SwitchButton() {
        if (this.status) {
            this.switchOff()
            return this.lamp.status = true
        } else {
            this.switchOn()
            return this.lamp.status = false;
        }
    }

    connectToLamp(Electriclamp) {
        return this.lamp = Electriclamp;
    }

    switchOff() {
        return this.status = false
    }

    switchOn() {
        return this.status = true
    }
}

