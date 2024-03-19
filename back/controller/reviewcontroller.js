const reviewmodel = require('../models/reviewmodel');

const createReview = async (req, res) => {
    uid=req.params.id
    try {
        const { comments, email, uid, rating } = req.body;
        const alreadyexits=await cartmodel.find({uid})
    if (alreadyexits==''||!alreadyexits){
            const review = await reviewmodel.create({  comments, rating });
            return res.json(review);
        } else {
            console.log("Review already exists");
            return res.status(409).json({ error: "Review already exists" });
        }
    } catch (error) {
        console.error("Error creating review:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

const findReview = async (req, res) => {
    try {
        const reviews = await reviewmodel.find();
        return res.json(reviews);
    } catch (error) {
        console.error("Error finding reviews:", error);
        return res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = { createReview, findReview };
