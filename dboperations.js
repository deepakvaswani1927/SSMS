var config = require('./dbconfig');
const sql = require('mssql'); 

 async function  getCourse() {
    try{
        let pool = await sql.connect(config);
        console.log('database connected');
        let product =await  pool.request().query("SELECT * FROM Courses");
        return product.recordset;
    }
    catch (error){
    console.log(error);
    }
}
async function addCourse(course){
    try{
        let pool = await sql.connect(config);
        let product =await  pool.request().query(`INSERT INTO Courses VALUES (${course.courseid} , '${course.courseName}' , ${course.courseCharges})`);
        return product.recordsets;
    }
    catch(err){
        console.log(err);
    }
}
async function remCourse(course){
    try{
        let pool = await sql.connect(config);
        let product =await  pool.request().query(`DELETE FROM Courses WHERE courseid= ${course.courseid} `);
        return product.recordset;
    }
    catch(err){
        console.log(err);
    }
}
async function updateCourse(course){
    try{
        let pool = await sql.connect(config);
        let product =await  pool.request().query(`UPDATE Courses
        SET courseName = '${course.courseName}', courseCharges =${course.courseCharges} 
        WHERE courseid =${course.courseid} `);
        return product.recordset;
    }
    catch(err){
        console.log(err);
    }
}
module.exports ={
    getCourse : getCourse ,
    addCourse : addCourse ,
    remCourse : remCourse ,
    updateCourse : updateCourse
}