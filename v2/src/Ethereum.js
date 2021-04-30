import SuperfluidSDK from '@superfluid-finance/js-sdk';
const Web3 = require('web3');

const addr = '0xA8f3447922d786045CB582B0C825723B744a54df'

const setRecipientAndSend = async (recipientAddress) => {

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

    const mm = sf.user({
        address: walletAddress[0], // this wallet is serving as escrow; but enhanced version would be all -> escrow, and escrow -> for(winner in winners)
        token: '0xF2d68898557cCb2Cf4C10c3Ef2B034b2a69DAD00'
    });

    await mm.flow({
        recipient: recipientAddress,
        flowRate: '0'
    });

    
    
    const details = await mm.details();
    console.log(details);
};

export { setRecipientAndSend }

// testFlow();