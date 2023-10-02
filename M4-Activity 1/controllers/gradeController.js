exports.getData = (req, res) => {
    //get data from database
    const data = {
        subject: 'IFT 554',
        grade : "A+",
        date: '09/30/2023'
    }
    res.send(`Hello World! from grade GET ${JSON.stringify(data)}`)
};
exports.postData =  (req, res) => res.send('Hello World! from grade POST');
exports.updateData = (req, res) => res.send('Hello World! from grade PUT');
exports.deleteData =  (req, res) => res.send('Hello World! from grade DELETE');
