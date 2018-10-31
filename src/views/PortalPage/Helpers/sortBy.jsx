export default Array.prototype.sortBy = function(key_func, reverse=false){
    return this.sort( (a, b) => ( key_func(b) - key_func(a) ) * (reverse ? 1 : -1) )
}
