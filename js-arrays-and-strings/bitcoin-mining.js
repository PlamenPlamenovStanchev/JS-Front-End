function solve(goldMinedPerDay){
    const priceGold = 67.51;
    const priceBitcoin = 1194916;
    let bitcoinCopunt = 0;
    let bitcoinDayIndex = 0;
    const currencyCount = goldMinedPerDay.reduce(function(earnings,daulyGold, i){
        const currentDay = i + 1;
        let bitcoinDayCount = 0;
        if (currentDay > 0 && currentDay % 3 == 0) daulyGold -= daulyGold * 0.3;
        earnings += daulyGold * priceGold;
        bitcoinCopunt = Math.floor(earnings / priceBitcoin);
        if (bitcoinDayCount) {
            if(! bitcoinDayIndex) bitcoinDayIndex = currentDay;
            earnings -= (bitcoinDayCount * priceBitcoin);
            bitcoinCopunt += bitcoinDayCount
        }
        return earnings
    }, 0);
    console.log(`Bought bitcoins: ${bitcoinCopunt}`);
    if (bitcoinDayIndex) console.log(`Day  of the first purchased bitcoin: ${bitcoinDayIndex}`);
    console.log(`Left money: ${currencyCount.toFixed(2)} lv.`)
}