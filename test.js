/* function OuterFunction() {

    var outerVariable = 100;

    function InnerFunction() {
        console.log(outerVariable);
    }

    return InnerFunction;
}
var innerFunc = OuterFunction();

innerFunc(); */

const { appendFile } = require("fs");
const { default: mongoose } = require("mongoose");

/* function calcu(job) {
    var income = 5;

    if(job) {
        var income = 50;
    }

    {
        var income = 500;
        {
            var income =  5000;
        }
    }

    return income;
}

console.log(calcu(true)); */

  
/* function thirdLargest(arr, arr_size)
{
    
    if (arr_size < 3)
    {
        document.write(" Invalid Input ");
        return;
    }
  
    
    var first = arr[0], second = -1000000000, third = -1000000000;
  
    
    for (var i = 1; i < arr_size ; i ++)
    {
        
      
        if (arr[i] > first)
        {
            third = second;
            second = first;
            first = arr[i];
           
        }
  
        
        else if (arr[i] > second)
        {
            third = second;
            second = arr[i];
        }
  
        else if (arr[i] > third)
            third = arr[i];
    }
  
   console.log("The third Largest element is "+ third);
}
  

var arr = [12, 13, 1, 10, 34, 16];
var n = arr.length;
thirdLargest(arr, n); */


const callme = async () => {
    if(true)
    {
        return 'Helloo';
    }
}

const parent = async () => {
    return await callme();
}

(async () => {
    const a = await parent();
    console.log(a);
})();

mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log('Mongoose connected')).catch(err => console.log(err));

app.use('api/v1', routes(router));
app.get('/', async (req,res) => {

    const products = await Product.find();

});


app.listen(port, () => {
    console.log();
})