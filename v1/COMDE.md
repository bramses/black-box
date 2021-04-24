# super-fluid.js -- low temperature: Javascript


This code is initializing the SuperfluidSDK framework.

```
const SuperfluidSDK = require("@superfluid-finance/js-sdk");
const Web3 = require("web3");

const sf = new SuperfluidSDK.Framework({
    web3: new Web3(window.ethereum),
});
await sf.initialize()
```
