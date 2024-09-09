import foodModel from "../models/foodModel.js";
import fs from "fs";

// add food item
const addFood = async (req, res) => {
  let image_fileName = `${req.file.filename}`;

  const food = new foodModel({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    category: req.body.category,
    image: image_fileName,
  });

  try {
    await food.save(); // saving to the database
    res.json({ sucess: true, message: "Food Added" });
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: "Error Adding Food" });
  }
};

// list the available food items
const listFood = async (req, res) => {
  try {
    const foods = await foodModel.find({});
    res.json({
      sucess: true,
      data: foods,
      message: "Successfully Fetched Food items",
    });
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, data: {}, message: "Error" });
  }
};

//remove food items
const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id);

    fs.unlink(`uploads/${food.image}`, () => {});
    await foodModel.findByIdAndDelete(req.body.id);
    res.json({ sucess: true, message: "Food Removed" });
  } catch (error) {
    console.log(error);
    res.json({ sucess: false, message: "Error Deleting Food Item" });
  }
};

// update food item
const updateFood = async (req, res) => {
  try {
    const foodId = req.body.id;
    const food = await foodModel.findById(foodId);

    if (!food) {
      return res.json({ success: false, message: "Food item not found" });
    }

    // Update image if a new one is provided
    if (req.file) {
      // Delete the old image
      fs.unlink(`uploads/${food.image}`, () => {});
      food.image = `${req.file.filename}`;
    }

    // Update the other fields if they are provided in the request
    food.name = req.body.name || food.name;
    food.description = req.body.description || food.description;
    food.price = req.body.price || food.price;
    food.category = req.body.category || food.category;

    // Save the updated food item
    await food.save();

    res.json({ success: true, message: "Food Updated Successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: "Error Updating Food Item" });
  }
};

export { addFood, listFood, removeFood, updateFood };
