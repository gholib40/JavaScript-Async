    addEventListener("message", function(value){
        const total = value.data
        for(let i = 0; i < total; i++){
            postMessage(i)
        }
    })