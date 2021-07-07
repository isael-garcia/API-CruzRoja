const { Router } = require('express')
const router = Router()


//importando una ruta 
const { renderPatientsForm, 
    createNewPatient,
     renderPatients, 
     renderEditForm, 
     updatePatient, 
     deletePatient } = require('../controllers/particulars.controller')

//rendereando la vista para agregar un nuevo registro
router.get('/patients/add', renderPatientsForm)
router.post('/patients/new-patient', createNewPatient)

//obtener todos los registros

router.get('/patients', renderPatients)

//editar los registros

router.get('/patients/edit/:id', renderEditForm)
router.post('/patients/edit/:id', updatePatient)

//eliminar registros
router.delete('/patients/delete/:id', deletePatient)

module.exports = router

