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

    async update(req, res) {
        const { id } = req.params;
        //const { nama } = req.body;
        //dataStudents[id] = nama;
        const students = await Student.find(id);
        if (students){
          const studentUptaded = await Student.update(id, req.body);

          const data = {
            message: `Menampilkan data student`,
            data: studentUptaded,
        }
          res.status(200).json(data);
        } 
        else {
          const data = {
            message: `Data not found`,
          };
      
          res.status(404).json(data);
        };
      }
      async destroy(req, res) {
        const { id } = req.params;
        const students = await Student.find(id);
        if (students) {
          await Student.delete(id);
          const data = {
            message: `Menghapus data student`,
          };
          res.status(200).json(data);
        }
        else{
          const data = {
            message: `Data not found`,
          };
          res.status(404).json(data);
        }
    };
}
const object = new StudentController();

//export
module.exports = object;