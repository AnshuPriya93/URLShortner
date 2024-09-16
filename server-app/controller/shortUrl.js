import express from "express";
import { urlModel } from "../models/shortUrl.js";


export const createURL = async (req, res, next) => {
    try {
        const { fullUrl } = req.body
        // console.log("the fullUrl is", req.body.fullUrl);
        const urlFound = await urlModel.find({ fullUrl });
        if (urlFound.length > 0) {
            res.status(409);
            res.status(urlFound)
        } else {
            const shortUrl = await urlModel.create({ fullUrl });
            res.status(200).send(shortUrl);
        }
    } catch (error) {
        return res.status(500).send("Internal server Error!")
    }
}



export const getAllURL = async (req, res, next) => {
    try {
        const shortUrl = await urlModel.find().sort({ createdAt: -1 });
        if (shortUrl.length < 0) {
            return res.status(404).send("Short URL not found")
        } else {
            return res.status(200).send(shortUrl)
        }

    } catch (error) {
        return res.status(500).send("Internal server Error!")
    }
}


export const getByIdURL = async (req, res, next) => {
    try {
        const userUrl = await urlModel.findOne({shortUrl:req.params.id});
        if (!userUrl){
            return  res.status(404).send({messgae: "Url not found"});
        } else {
            userUrl.click++;
            userUrl.save();
            res.redirect(`${userUrl.fullUrl}`)
           // return res.status(200).send(userUrl)
        }
            
       
    } catch (error) {
        return res.status(500).send("Internal server Error!")
    }

}
export const deleteURL = async (req, res, next) => {
    try {
        const userUrl = await urlModel.findByIdAndDelete({_id:req.params.id});
        if (userUrl){
            return  res.status(200).send({messgae: "Request Url successfull deleted"});
        }             
       
    } catch (error) {
        return res.status(500).send("Internal server Error!")
    }
}