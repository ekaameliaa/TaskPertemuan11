const Student = require("../model/Student")
class StudentController {
  //menambahkan keywors async
    async index(req, res){
      //memanggil method static all dengan async await
        const students = await Student.all();
        const data = {
            message: `Menampilkan semua data student`,
            data: students,
        }
        res.json(data);
    }

    async store(req, res){
        const { nama, nim, email, jurusan } = req.body;
        //memanggil method static create dengan async await
        const students = await Student.create(req.body);
        const data = {
            message: `Menambahkan data student`,
            data: students,
        }
        res.json(data);
    }

    update(req, res) {
        const { id } = req.params;
        const { nama } = req.body;
        dataStudents[id] = nama;
    
        const data = {
          message: `Mengedit student id ${id}, nama ${nama}`,
          data: dataStudents,
        };
    
        res.json(data);
      }
    
      destroy(req, res) {
        const { id } = req.params;
        dataStudents.splice(id, 1);
      
        const data = {
          message: `Menghapus student id ${id}`,
          data: dataStudents,
        };
    
        res.json(data);
    }
}

const object = new StudentController();

//export
module.exports = object;