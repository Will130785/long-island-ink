import express from "express";
import data from "./data";
import dotenv from "dotenv";
import config from "./config";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import userRoute from "./routes/userRoute";

dotenv.config();
const mongodbUrl = config.MONGODB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}).catch(error => console.log(error.reason));

const app = express();

app.use(bodyParser.json());

const PORT = process.env.PORT || 5000;

app.use("/api/users", userRoute);

app.get("/api/products/:id", (req, res, next) => {
    const productId = req.params.id;
    const product = data.products.find(x=> x._id === productId);
    if(product) {
        res.send(product);
    } else {
        res.status(404).send({msg: "Product Not Found."})
    }
    
});

app.get("/api/products", (req, res, next) => {
    res.send(data.products);
});

app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});