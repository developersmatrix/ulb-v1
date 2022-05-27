import mongoose from "mongoose";

import app from "./app.js";


const PORT = process.env.PORT || 8080;

mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => app.listen(PORT, console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error.message));

