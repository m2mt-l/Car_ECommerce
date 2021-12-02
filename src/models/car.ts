class Car {
    private name: string;
    private img: string;
    private category: string;
    private price: number;
    private date: number[];

    constructor(name: string, img: string, category: string, price: number, date: number[]) {
        this.name = name;
        this.img = img;
        this.category = category;
        this.price = price;
        this.date = date;
    }
}

export default Car;
