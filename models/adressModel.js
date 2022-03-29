const mongoose = require("mongoose");

const AddressSchema = mongoose.Schema({
    streetName: String,
    streetNumber: String,
    postCode: String,
    city: String
})

const Adress =  mongoose.model("Adress", AddressSchema);

module.exports = Adress;