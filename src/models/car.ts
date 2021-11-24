class Car {
    private name: string;
    private category: string;
    private price: number;
    private date: number[];

    constructor(name: string, category: string, price: number, date: number[]) {
        this.name = name;
        this.category = category;
        this.price = price;
        this.date = date;
    }
}

export default Car;
