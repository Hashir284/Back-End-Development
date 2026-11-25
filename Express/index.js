import express from 'express'

const app = express()

app.get('/', (req, res) => {
    req.get("user-agent")
    req.headers
    console.log(req.get("user-agent"));
    console.log(req.headers);

    // res.set('X-App-Name', 'MyExpressApp');
    // // Equivalent
    // res.header('X-App-Name', 'MyExpressApp');
    // res.set({
    //     'X-App-Name': 'MyApp',
    //     'X-API-Version': '1.0',
    //     'Cache-Control': 'no-cache'
    // });
    // res.header({
    //     'X-App-Name': 'MyApp',
    //     'X-API-Version': '1.0',
    //     'Cache-Control': 'no-cache'
    // });
    res.set('Content-Type-v', 'text/plain');
    res.header('X-App-Name-v', 'MyExpressApp');
    console.log(res.getHeaders());
    console.log(res.get('X-App-Name-v'));
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})