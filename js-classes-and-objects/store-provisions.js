function solve(stock, ordered){
    const storage = {}
    for (let i = 0; i < stock.length; i += 2){
        storage[stock[i]] = Number(stock[i + 1])
    }
    for (let i = 0; i < ordered.length; i += 2){
        if ( ! storage.hasOwnProperty(ordered[i])) storage[ordered[i]] = 0;
        storage[ordered[i]] += Number(ordered[i + 1])
    }
    for (const product in storage){
        console.log(`${product} -> ${storage[product]}`);
    }
}


// function solve(s, o){
//     Object
//     .entries([...s, ...o].reduce((s,p,i,a)=>(i%2==0 ? {...s, [p]: (s[p] || 0) + Number(a[i+1])} : s), {}))
//     .forEach(([p,q])=> console.log(`${p} -> ${q}`));
// }