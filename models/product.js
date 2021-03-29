const db = require('../util/database');

const Cart = require('./cart');

module.exports = class Product {
    constructor(id, title, imageUrl, price, descreiption) {
        this.id = id;
        this.title = title;
        this.imageUrl = imageUrl;
        this.price = price;
        this.descreiption = descreiption;
    }

    save() {
        return db.execute(
            'INSERT INTO products (title, price, descreiption, imageUrl) VALUES (?, ?, ?, ?)',
            [this.title, this.price, this.descreiption, this.imageUrl]
        );
    }

    static deleteById(id) {

    }

    static fetchAll() {
        return db.execute('SELECT * FROM products');
    }

    static findById(id) {
        return db.execute('SELECT * FROM products WHERE products.id = ?', [id]);
    }
};