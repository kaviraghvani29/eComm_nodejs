const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },

    description: {
      type: String,
      required: [true, "Description is required"],
    },

    price: {
      type: Number,
      required: [true, "Price is required"],
    },

    // stock: {
    //   type: Number,
    //   required: [true, "Stock is required"],
    //   default: 0,
    // },

    // category: {
    //   type: String,
    //   required: [true, "Category is required"],
    // },

    // brand: {
    //   type: String,
    //   required: [true, "Brand is required"],
    // },

    //    images: [
    //       {
    //         public_id: String,
    //         url: String,
    //       },
    //     ],

    // ratings: {
    //   type: Number,
    //   default: 0,
    // },

    // numOfReviews: {
    //   type: Number,
    //   default: 0,
    // },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Product", productSchema);
