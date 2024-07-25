import Book from "../Database/models/book.model.js"

export const addBook=async(req,res)=>{
   const result =await Book.create(req.body)
   res.json({message:'Added Successfully',result})
}

export const getBooks=async(req,res)=>{
   const result= await Book.find()
   res.json({message:"Success",result})
}

export const getBookById=async(req,res)=>{
    const result =await Book.findById(req.params.id)
    res.json({message:"Success",result})
}

export const updateBook=async(req,res)=>{
   const resultt= await Book.findById(req.params.id)
   if(resultt) return res.json({message:'book not found'})
   const result= await Book.findByIdAndUpdate(req.params.id,req.body)
   res.json({message:'Updated Successfully',result})
}

export const deleteBook=async(req,res)=>{
    const resultt= await Book.findById(req.params.id)
    if(resultt) return res.json({message:'book not found'})
    const result= await Book.findByIdAndDelete(req.params.id)
    res.json({message:'Deleted Successfully',result})
}
export const searchBook=async(req,res)=>{
 if(req.query.title)
    {
    const result= await Book.find({title:req.query.title})
    res.json({message:"success" ,result}) 
 }
 else if(req.query.author){
    const result= await Book.find({author:req.query.author})
    res.json({message:"success" ,result}) 
 }else {
    return res.status(400).json({ message: "No query parameters provided" });
}
}


export const getBooksByLimit=async(req,res)=>{
   const limit=req.query.limit
   const page=req.query.page
   const skip = (page - 1) * limit
   const result= await Book.find().limit(limit).skip(skip)
   res.json({message:"Success",result})
}
