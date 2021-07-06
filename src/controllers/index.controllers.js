

//objeto 
const indexCtrl = {}
//obj que tiene como propiedad una funcion render
indexCtrl.renderIndex = (req, res) =>{
    res.render('index')
};

indexCtrl.renderAbout = (req,res) =>{
    res.render('about')
}

module.exports = indexCtrl