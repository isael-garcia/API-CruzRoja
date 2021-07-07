const particularsCtrl = { }

const patient = require('../models/particulars') //modelo de registro
//controladores donde programamos las funciones para cada ruta
particularsCtrl.renderPatientsForm = (req,res) => {
    res.render('particulars/new-patient')
}
particularsCtrl.createNewPatient = async (req,res) => { //nuevo paciente
    const {name, age, sex} = req.body
    const newPatient = new patient({name, age, sex, })
    await newPatient.save();
    res.send('new patient')
}
particularsCtrl.renderPatients = (req,res) =>{
    res.send('render patients')
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