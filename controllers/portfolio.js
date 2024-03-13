import express from 'express'
import Portfolio from '../models/portfolio.js'
import env from 'dotenv'
env.config()


let portfolio=async (req,res)=>
{
    let baseUrl=process.env.BASE_URL;
    console.log(baseUrl)
    let {projectName,url}=req.body
    let image=req.file
    let createdProject=await Portfolio.create({
        projectName,url,image:baseUrl+'public/'+image.filename
    })
    return res.send(createdProject)
}
export default portfolio