fetch('https://61ef3de0d593d20017dbb3c1.mockapi.io/users')
.then((res) => {
    console.log(res);
    // console.log(res.json());
    return res.json();
})
.then(res => {
    console.log('DATA ', res);
})
.catch(e => {
    console.log('ERROR ', e);
});