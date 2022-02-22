const express = require('express');
const router = express.Router()
const dboperations = require('./dboperations');

router.get('/courses' , (req,res)=>{
    dboperations.getCourse().then(result =>{
      res.send(result);  
    });
});

router.post('/newcourse' ,(req,res)=>{
    let course = req.body
    console.log("new course", course)
    dboperations.addCourse(course).then(result => {
        res.send("posted data successfully");
    });
});

router.delete('/removeCourse' , (req,res)=>{
    let course = req.body ;
    console.log("deleted course" , course);
    dboperations.remCourse(course).then(result =>{
        res.send("deleted course suessfully");
    });
});
router.put('/updateCourse', (req,res)=>{
    let course = req.body;
    console.log("updated Course" , course);
    dboperations.updateCourse(course).then(result =>{
        res.send("updated data successfully");
    })
})

module.exports = router;
