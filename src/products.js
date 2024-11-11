class Item {
    constructor(name, image, price) {
        this.name = name;
        this.image = image;
        this.price = price;
    }
}
const products = [
    new Item('Vegan Chocolate Chip Muffins', 'https://www.rainbownourishments.com/wp-content/uploads/2023/01/vegan-chocolate-chip-muffins-1..jpg', 1.000),
    new Item(`Butter Croissant`, 'https://cravingsjournal.com/wp-content/uploads/2023/08/croissants-4.jpg', 0.800),
    new Item('Apple Cranberry Pie', 'https://www.twopeasandtheirpod.com/wp-content/uploads/2022/11/Apple-Cranberry-Pie-43.jpg', 1.500)
];

export default products;