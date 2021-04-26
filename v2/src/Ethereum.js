import SuperfluidSDK from '@superfluid-finance/js-sdk';
const Web3 = require('web3');

const testFlow = async () => {

    const sf = new SuperfluidSDK.Framework({
        web3: new Web3(window.ethereum),
    });
    await sf.initialize()

    const walletAddress = await window.ethereum.request({
        method: 'eth_requestAccounts',
        params: [
            {
                eth_accounts: {}
            }
        ]
    });

    const carol = sf.user({
        address: walletAddress[0],
        token: '0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00'
    });

    await carol.flow({
        recipient: '0xA8f3447922d786045CB582B0C825723B744a54df',
        flowRate: '0'
    });
    
    const details = await carol.details();
    console.log(details);
};

testFlow();