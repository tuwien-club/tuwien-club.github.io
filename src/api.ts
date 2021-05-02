import {BifrostBridge} from 'bridge'
import BridgeDrop from 'drop'

BridgeDrop.bridge = new BifrostBridge({
  httpUrl: 'http://localhost:8000/graphql/'
})

// Session must be started after replacing the bridge
BridgeDrop.bridge.session.begin()

export const DropAPI = BridgeDrop.buildIn
