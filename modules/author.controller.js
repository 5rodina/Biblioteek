import Author from "../Database/models/author.model.js"


export const addAuthor=async(req,res)=>{
  const result=await Author.create(req.body)
  res.json({message:"Added Successfully",result})
}

export const getAuthors=async(req,res)=>{
    const result=await Author.find(req.body)
    res.json({message:"Success",result})
}

export const getAuthorById=async(req,res)=>{
    const result=await Author.findById(req.params.id)
    res.json({message:"Success",result})
}

export const updatedAuthor=async(req,res)=>{
    const resultt= await Author.findById(req.params.id)
    if(resultt) return res.json({message:'book not found'})
    const result=await Author.findByIdAndUpdate(req.params.id,req.body)
    res.json({message:'Updated Successfully',result})
}

export const deleteAuthor=async(req,res)=>{
    const resultt= await Author.findById(req.params.id)
    if(resultt) return res.json({message:'book not found'})
    const result=await Author.findByIdAndDelete(req.params.id)
    res.json({message:'Deleted Successfully',result}) 
}

export const AuthorAndItsBooks=async(req,res)=>{
   const  result=await Author.findById(req.params.id).populate('books')
    res.json({message:"Success",result})
}
export const searchAuthor=async(req,res)=>{
   if(req.query.name){
    const  result=await Author.find({name:req.query.name})
    res.json({message:"Success",result})
   }else if(req.query.bio){
    const  result=await Author.find({bio:req.query.bio})
    res.json({message:"Success",result})
   }else {
    return res.status(400).json({ message: "No query parameters provided" });
}
}
   

export const getAuthorsByLimit=async(req,res)=>{
    const skip=req.query.skip
    const result= await Author.find().limit(5).skip((skip-1) * 5)
    res.json({message:"Success",result})
 }
 