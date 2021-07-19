const particularsCtrl = { }

const particulars = require('../models/particulars')
const patient = require('../models/particulars') //modelo de registro
//controladores donde programamos las funciones para cada ruta
particularsCtrl.renderPatientsForm = (req,res) => {
    res.render('particulars/new-patient')
}
particularsCtrl.createNewPatient = async (req,res) => { //nuevo paciente
    const {name, age, sex} = req.body
    const newPatient = new patient({name, age, sex,})
    await newPatient.save();
    res.send('new patient')
}
particularsCtrl.renderPatients = async (req,res) =>{
    const patients = await  particulars.find().lean();
   res.render('particulars/all-patients', { patients })

}
particularsCtrl.renderEditForm = (req, res) =>{
    res.send('edit form')
}
particularsCtrl.updatePatient = (req,res) =>{
    res.send('update form')
}
particularsCtrl.deletePatient = (req,res) => {
    res.send('deleted pacient')
}


module.exports = particularsCtrl