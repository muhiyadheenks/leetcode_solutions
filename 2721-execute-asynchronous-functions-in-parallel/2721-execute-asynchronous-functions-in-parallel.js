/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function(functions){
    return new Promise((resolve,reject)=>{
        const results=[];
        let completed=0;
        const total=functions.length
        if(total===0){
            resolve([]);
            return
        }
        functions.forEach((fn,index)=>{
            fn()
            .then((value)=>{
                results[index]=value;
                completed++;
                if(completed===total){
                    resolve(results)

                }
            })
            .catch((error)=>{
                reject(error)
            })
        })

    })
    
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */