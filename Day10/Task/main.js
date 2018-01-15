// }
function cars(carName, model, price) {
    this.Name;
    this.model;
    this.price;
    return (carName) => {

        // if (carName === "Mehran") {
        //     let model = 2017;
        //     let Price = "7Lak";
        //     console.log("Name=" + carName + "Model=" + model + " Price" + Price);
        // }
        // if (carName === "Alto") {
        //     let model = 2015;
        //     let Price = "5Lak";
        //     console.log("Name=" + carName + "Model=" + model + " Price" + Price);
        // }
        // if (carName === "Tyota") {
        //     let model = 2017;
        //     let Price = "20Lak";
        //     console.log("Name=" + carName + "Model=" + model + " Price" + Price);
    }
}

function SetCarsValues(carName, model, price) {
    this.name = carName;
    this.model = model;
    this.price = price;
    return cars(name, model, price);
}
let Mehran = new SetCarsValues('Mehran', 2017, "7 lac");
let Toyota = new SetCarsValues('Corola', 2013, "15 lac");
let Alto = new SetCarsValues('Alto', 2014, "5 lac");

let setValue = setValues.bind(cars);
setValue("Mehran");