export function Round(value, decimals) {
    return Number(Math.round(value +'e'+ decimals) +'e-'+ decimals).toFixed(decimals);
}

export function ToCommas(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export function GuidGenerator() {
    var S4 = function() {
       return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    };
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
}

export const MergeArray = (source, merge, by) => source.map(item => ({
    ...item,
    ...(merge.find(i => i[by] === item[by]) || {}),
}));

export function GetVolumeByUnits (vol, units) {
    let newVol = 0;

    switch (units) {
        case 'MT': {
            newVol = vol;
            break;
        }
        case 'kg': {
            newVol = vol * 1000;
            break;
        }
        case 'lbs': {
            newVol = vol * 2204.62;
            break;
        }
    }

    return newVol;
}

export default Array.prototype.SortBy = function(key_func, reverse=false){
    return this.sort( (a, b) => ( key_func(b) - key_func(a) ) * (reverse ? 1 : -1) )
}
