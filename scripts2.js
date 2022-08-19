window.addEventListener("load", async () => {

    const isConnect = await window.zilPay.wallet.connect();

    zilPayAdd = window.zilPay.wallet.defaultAccount;

    if (isConnect == true) { 

            var l = zilPayAdd.bech32
            document.getElementById("loginButtonTxt").innerText = l[0]+l[1]+l[2]+l[3]+l[4]+"..."+l[36]+l[37]+l[38]+l[39]+l[40]+l[41];
            var g = zilPayAdd.base16
        
            addy = zilPayAdd.base16.toLowerCase();
        
            var k = g.toLowerCase();
        
            const { contracts, utils, wallet } = window.zilPay;


// If you do not need to track, you need to cancel the unsubscribe.

    // do something...

} else {

    throw new Error('user rejected');

}
});


    
async function connectZilPay() { 

   
    const isConnect = await window.zilPay.wallet.connect();

    
if (isConnect) {
    

    zilPayAdd = window.zilPay.wallet.defaultAccount;

    var l = zilPayAdd.bech32
    document.getElementById("loginButtonTxt").innerText = l[0]+l[1]+l[2]+l[3]+l[4]+"..."+l[36]+l[37]+l[38]+l[39]+l[40]+l[41];
    var g = zilPayAdd.base16

    addy = zilPayAdd.base16toLowerCase();

    var k = g.toLowerCase();

    
}
    
    
else {
    alert("User Rejected ZilPay Connection");
    throw new Error('user rejected');}
   };


async function unlock() {
    
    const ZilbatzNFTContract = window.zilPay.contracts.at("0xe11a9327c6750D2D9A1e9378eB230A8237B5760b");

    var addy = window.zilPay.wallet.defaultAccount.base16.toLowerCase();

    var ZilbatzNFTContractState;
    await ZilbatzNFTContract.getState().then(function(stateData){
    console.log(stateData);
    ZilbatzNFTContractState = stateData;})

    const tokenOwners = ZilbatzNFTContractState.token_owners;
    console.log(tokenOwners.prototype.includes(addy));

    var tokenOwned = $(tokenOwners).text().indexOf(addy) > -1;
    

    if (tokenOwned == true) {
    
    document.getElementById("unlockButtonTxt").innerText = "UNLOCKED";

}

else {
        document.getElementById("unlockButtonTxt").innerText = "LOCKED";
}
}