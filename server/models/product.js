const mongose = require("mongose");

const productSchema = mongose.Schema({
    name: {
        type: String,
        required: true,
    },
    description:{
        type: String,
        required: true
    },
    images:[
        {
        type: String,
        required: true
        }
    ],
    brand:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        default: 0
    },
    category:{
        type:mongose.Schema.Types.ObjectId,
        ref:'Category',
        required: true
    },
    countInStock:{
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        default: 0,
    },
    numReviews:{
        type: Number,
        default: 0,
    },
    isFeatured: {
        type: Boolean,
        default: false,
    },
    dateCreated: {
        type: Date,
        default: Date.now,
    },
})

exports.Product = mongose.model('Product', productSchema);