function logger(...rest){
    for(var i = 0; i < rest.length; i++){
        console.log(rest[i]);
    }
}

export default logger;