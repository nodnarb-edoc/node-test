const express = require('express');
const app = express();
const port = process.env.PORT || 8080

app.get("/", (req,res) => {
    res.send("Hello world!!!");
})

app.listen(port, () => {
    console.log(`Test app listening on port: ${port}`);
});
