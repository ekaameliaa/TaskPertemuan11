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
    //membuat method static create untuk menambahkan data
    static async create(Student){
        //return promise sebagai solusi async
        const id = await new Promise((resolve, reject) => {
            const sql = `INSERT INTO students set ?`;
            //melakukan queri
            db.query(sql, Student, (err, results) => {
                resolve(results.insertId);
            });  
        });
        //return promise sebagai solusi async
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM students WHERE id = ?`;
            //melakukan queri
            db.query(sql, id, (err, results) => {
                resolve (results);
            });  
        });   
    };
    static find(id){
        return new Promise((resolve, reject) => {
            const sql = `SELECT * FROM students WHERE id = ?`;
            //melakukan queri
            db.query(sql, id, (err, results) => {
                resolve (results[0]);
            });  
        });   
    };
    static async update(id, Student) {
        await new Promise((resolve, reject) => {
            const sql = "UPDATE students SET ? WHERE id = ?";
            db.query(sql, [Student, id], (err,results) => {
                resolve(results);
            });
        });
        return this.find(id);
    };
    static delete(id) {
        return new Promise((resolve, reject) => {
            const sql = "DELETE FROM students WHERE id = ?";
            db.query(sql, id, (err,results) => {
                resolve(results);
            });
        })
    };
}

module.exports = Student;