import React from 'react'
import { Button } from 'semantic-ui-react'

import HID from '../hid/HID'

class HIDConnect extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      device: "undefined"
    }
  }

  handleClick(e) {
    let vendorId = 0x47f
    let hid = new HID(0x47f)

    hid.requestDevice()
    .then((device) => console.log(device.productName))
  }

  render() {
    return (
      <div className="hidConnect">
        <Button
          onClick={this.handleClick}>{this.props.label}</Button>
        <section>{this.state.device}</section>
      </div>
    )
  }
}


export default HIDConnect
