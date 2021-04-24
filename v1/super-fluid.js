const SuperfluidSDK = require("@superfluid-finance/js-sdk");
const Web3 = require("web3");

const main = async () => {

    if (window.ethereum) {
        try {
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
    
    
            const details = await carol.details();
            console.log(details);
    
        } catch (error) {
            console.error(error)
        }
    }
    else {
        return false
    }
    
}
main()

