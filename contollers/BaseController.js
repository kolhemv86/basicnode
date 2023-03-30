class BaseController
{
      constructor()
      {
        
      }  

      static async store(reqbody,model) {
         const savemodel =  await model.create(reqbody);
         return savemodel;     
       } 
}

module.exports = BaseController;