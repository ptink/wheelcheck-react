class HID {

  constructor(vendorId, deviceId) {
    this.vendorId = vendorId
    this.deviceId = deviceId
  }

  requestDevice() {
    let device

    return navigator.usb.requestDevice({
      filters: [{vendorId: this.vendorId, deviceId: this.deviceId}]
    })
    .then(selectedDevice => {
      device = selectedDevice
      return device.open()
    })
    .catch(error => {
      console.log(error)
      return device
    })

  }
}


export default HID
