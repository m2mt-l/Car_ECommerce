import Car from '@/models/car';
import Config from '@/config';

class CreateCars {
    public static createInitialCars(cars: Car[]): void {
        cars.push(
            new Car(
                Config.model.model3.name,
                Config.model.model3.img,
                Config.model.model3.category,
                Config.model.model3.price,
                Config.model.model3.date
            )
        );
        cars.push(
            new Car(
                Config.model.modelX.name,
                Config.model.modelX.img,
                Config.model.modelX.category,
                Config.model.modelX.price,
                Config.model.modelX.date
            )
        );

        cars.push(
            new Car(
                Config.model.modelS.name,
                Config.model.modelS.img,
                Config.model.modelS.category,
                Config.model.modelS.price,
                Config.model.modelS.date
            )
        );
        cars.push(
            new Car(
                Config.model.modelY.name,
                Config.model.modelY.img,
                Config.model.modelY.category,
                Config.model.modelY.price,
                Config.model.modelY.date
            )
        );
        cars.push(
            new Car(
                Config.model.cayenne.name,
                Config.model.cayenne.img,
                Config.model.cayenne.category,
                Config.model.cayenne.price,
                Config.model.cayenne.date
            )
        );
        cars.push(
            new Car(
                Config.model.macan.name,
                Config.model.macan.img,
                Config.model.macan.category,
                Config.model.macan.price,
                Config.model.macan.date
            )
        );
        cars.push(
            new Car(
                Config.model.camry.name,
                Config.model.camry.img,
                Config.model.camry.category,
                Config.model.camry.price,
                Config.model.camry.date
            )
        );
        cars.push(
            new Car(
                Config.model.accord.name,
                Config.model.accord.img,
                Config.model.accord.category,
                Config.model.accord.price,
                Config.model.accord.date
            )
        );
        cars.push(
            new Car(
                Config.model.civic.name,
                Config.model.civic.img,
                Config.model.civic.category,
                Config.model.civic.price,
                Config.model.civic.date
            )
        );
        cars.push(
            new Car(
                Config.model.cx5.name,
                Config.model.cx5.img,
                Config.model.cx5.category,
                Config.model.cx5.price,
                Config.model.cx5.date
            )
        );
        cars.push(
            new Car(
                Config.model.gleCoupe.name,
                Config.model.gleCoupe.img,
                Config.model.gleCoupe.category,
                Config.model.gleCoupe.price,
                Config.model.gleCoupe.date
            )
        );
        cars.push(
            new Car(
                Config.model.cla.name,
                Config.model.cla.img,
                Config.model.cla.category,
                Config.model.cla.price,
                Config.model.cla.date
            )
        );
        cars.push(
            new Car(
                Config.model.gla250.name,
                Config.model.gla250.img,
                Config.model.gla250.category,
                Config.model.gla250.price,
                Config.model.gla250.date
            )
        );
        cars.push(
            new Car(
                Config.model.rx350.name,
                Config.model.rx350.img,
                Config.model.rx350.category,
                Config.model.rx350.price,
                Config.model.rx350.date
            )
        );
        cars.push(
            new Car(
                Config.model.nx300.name,
                Config.model.nx300.img,
                Config.model.nx300.category,
                Config.model.nx300.price,
                Config.model.nx300.date
            )
        );
        cars.push(
            new Car(
                Config.model.urus.name,
                Config.model.urus.img,
                Config.model.urus.category,
                Config.model.urus.price,
                Config.model.urus.date
            )
        );
        cars.push(
            new Car(
                Config.model.aventador.name,
                Config.model.aventador.img,
                Config.model.aventador.category,
                Config.model.aventador.price,
                Config.model.aventador.date
            )
        );
        cars.push(
            new Car(
                Config.model.a3.name,
                Config.model.a3.img,
                Config.model.a3.category,
                Config.model.a3.price,
                Config.model.a3.date
            )
        );
        cars.push(
            new Car(
                Config.model.x3.name,
                Config.model.x3.img,
                Config.model.x3.category,
                Config.model.x3.price,
                Config.model.x3.date
            )
        );
        cars.push(
            new Car(
                Config.model.series2.name,
                Config.model.series2.img,
                Config.model.series2.category,
                Config.model.series2.price,
                Config.model.series2.date
            )
        );
    }
}
export default CreateCars;
