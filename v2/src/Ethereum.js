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
        token: process.env.CAROL
    });

    await carol.flow({
        recipient: process.env.ETH_RECIP,
        flowRate: '0'
    });
    
    const details = await carol.details();
    console.log(details);
};

testFlow();