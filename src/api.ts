import {BifrostBridge} from 'bridge'
import BridgeDrop, {references} from 'drop'

BridgeDrop.bridge = new BifrostBridge({
  httpUrl: 'https://ccms.snek.at/graphql/'
})

// Session must be started after replacing the bridge
// await BridgeDrop.bridge.session.begin()

// ???
//async function loginDemo() {
//  await BridgeDrop.bridge.session.begin({username: "cisco", password: "ciscocisco"})
//}

export const DropAPI = BridgeDrop.buildIn
export const DropAPIReferences: any = references
