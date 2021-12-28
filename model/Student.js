const db = require("../config/database");

class Student {
    //method untuk semua queri data
    static all(){
        //return promise sebagai solusi
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM students`;
            //melakukan queri menggunakan method queri
            db.query(sql, (err, results) => {
                resolve (results);
            });  
        });
        
    }

    //membuat method static show untuk menampilkan data student
    static show(id){
        //return promise sebagai solusi async
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM students WHERE id = ${id}`;
            //melakukan queri
            db.query(sql,(err, results) => {
                resolve (results);
            });  
        });
        
    }

    //membuat method static create untuk menambahkan data
    static create(Student){
        //return promise sebagai solusi async
        return new Promise((resolve, reject) => {
            const sql = `INSERT INTO students set ?`;
            //melakukan queri
            db.query(sql, Student, (err, results) => {
                resolve (this.show(results.insertId));
            });  
        });
        
    }

    

}

module.exports = Student;