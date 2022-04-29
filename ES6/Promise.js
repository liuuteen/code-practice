const promise = new Promise((resolve, reject) => {
    resolve('yes');
}).then(res => {
    console.log(res)
})