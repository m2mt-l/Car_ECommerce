class Car {
    private name: string;
    private img: string;
    public category: string;
    public price: number;
    public date: number[];

    constructor(name: string, img: string, category: string, price: number, date: number[]) {
        this.name = name;
        this.img = img;
        this.category = category;
        this.price = price;
        this.date = date;
    }
}

export default Car;
