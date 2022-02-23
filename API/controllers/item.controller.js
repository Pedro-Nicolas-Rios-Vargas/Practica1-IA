const Item = require("../models/Item");

const getItems = async(req, res) => {
    const items = await Item.find();
    res.send(items);
}

const createItem = async (req, res) => {

    const { name, icon } = req.body;

    const item = new Item({
        name,
        icon
    });

    await item.save();

    res.send({
        status:"Item created sucessfully",
        item
    });

}

module.exports = {
    getItems,
    createItem  
}

