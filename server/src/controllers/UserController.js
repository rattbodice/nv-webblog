module.exports = {
    index (res,req){
        res.send('เรียกข้อมูลใช้ทั้งหมด');
    },
    create (res,req){
        res.send('ทำการสร้างผู้ใช้งาน: '+ JSON.stringify(req.body))
    },

    //edit user,suspend, active 
    put (req,res){
        res.send('ทำการแก้ไขผู้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(stringify(req.body)));
    },

    //delete user
    remove(res,req){
        res.send('ทำการลบผู้ใช้งาน: ' + req.params.userId + ' : ' + JSON.stringify(req.body));
    },

    //get user by id
    show(req,res){
        res.send('ดูข้อมูลผู้ใช้งาน: ' + req.params.userId);
    }
}