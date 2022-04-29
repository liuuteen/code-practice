function * generator(){}


generatorObj = {

    next() {
        return {value: undefined, done: true}
    },
    
    [Symbol.iterator] () {
        return this;
    }
}   

iterableObj = {
    [Symbol.Iterator] () {
        
    }
}

function* ColorGenerator(){
    yield "red";
    yield "green";
    yield "blue";
}

for(color of ColorGenerator()){
    console.log(color);
}

function* IdGenerator(){
    let id = 0;
    while(true){
        yield ++id;
    }
}

