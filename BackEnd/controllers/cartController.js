const mongoose = require('mongoose');
const Cart = mongoose.model('Cart');
module.exports = {
    // 
    addCourseInCart:async(req, res) => {
        try{
            const { id, cid }=req.body
            const cart = await Cart.findById(id);
            cart.cartItems.push(cid);
            await cart.save();

            res.send(cart)


        }catch(err){
        res.send(err)
        }
    }, 
    cartItems: async(req, res) => {
        try{
            const cart = await Cart.findById(req.body.id).populate('cartItems');
            res.send(cart.cartItems);
        }catch(err){
        res.send(err)
        }
    },
    getCourseInCart: async(req, res) => {
        try{
            const cart = await Cart.find();
            res.send(cart);
        }catch(err){
        res.send(err)
        }
    }
}