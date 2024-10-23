const products = [
    {id:1,name:"iphone12",price:25000},
    {id:2,name:"laptop",price:55000},
    {id:3,name:"headphone",price:5000},
    {id:4,name:"printer",price:15000},
]


//get method

export const getproduct = (req,res)=>{


    res.status(200).json({data:products})
}


//getbyid

export const getproductbyid = (req,res)=>{
    const productid = req.params.id;


    const productdeatils = products.find((ele) =>ele.id ==productid);

        if(!productdeatils){
            return res.status(404).json({message:"Page not found"});
        }

     res.status(200).json({message:"Data is get sucessfully by id", data:productdeatils});


}


//post method ->insert new data:

export const createproduct = (req,res)=>{
    const { name , price } = req.body;

    const newproduct = {
        id: products.length+1,
        name: name,
        price: price,
    };

    products.push(newproduct);
    res.status(200).json({message:"product added sucessfully", data:newproduct})
}


//putmethod
export const updateproduct = (req,res)=>{
    const prouctid = req.params.id;
    const {name,price} = req.body;
    const index = products.findIndex(ele => ele.id == prouctid)

    if (index === -1){
        return res.status(404).json({message:"not found"})
    }

    products[index].name = name;
    products[index].price = price;

    res.status(200).json({message:"product updated",data:products[index]})
    
}


//delete product
export const deleteproduct = (req,res)=>{
    const productid = req.params.id;
    const index = products.findIndex(ele =>ele.id == productid)
    if (index === -1){
        return res.status(404).json({message:"page not found"})
    }

    products.splice(index,1)
    res.status(200).json({message:"product deleted sucessfully"})
}