const Student = require('../Model/StudentModel')
exports.getData = async (req, res) => {
    //get data from database
    const students = await Student.find()
 
    res.status(200).json({
        status: 'success',
        results: students.length,
        data: {
            students
        }
    });
};
exports.postData = async (req, res) =>{
    const newStudent = req.body;
    const student = await Student.create(newStudent);
    
    console.log(`new Student - ${newStudent}`);
    
    res.status(201).json({
        status: 'success',
        data: student
    })
}
exports.updateData = (req, res) => res.send('Hello World! from student PUT');
exports.deleteData =  (req, res) => res.send('Hello World! from student DELETE');
