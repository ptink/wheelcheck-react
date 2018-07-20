class HID {

  constructor(vendorId, deviceId) {
    this.vendorId = vendorId
    this.deviceId = deviceId
    this.device = this.requestDevice()
  }

  requestDevice() {
    navigator.usb.requestDevice({
      filters: [{vendorId: this.vendorId, deviceId: this.deviceId}]
    })
    .then(selectedDevice => {
      return selectedDevice.open
    })

  }
}


export default HID
