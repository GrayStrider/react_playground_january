// interface ILabelledValue {
//     label: string;
// }
// function printLabel(labelledObj: ILabelledValue /* equivalent to { label: string } */) {
//     console.log(labelledObj.label);
// }
// let myObj = {size: 10, label: "Size 10 Object"};
// // printLabel(myObj); // won't let create label with non-string type

// TODO why "implement interface" explicitly

interface ISquareDefault {
    color?: string;
    width?: number;
}

interface ISquareWithArea extends ISquareDefault {
    area?: number;
}

// function createSquareWithArea(config: ISquareWithArea) /*: {area: number} }*/ {
//     // could use this piece here instead of extending interface
//     const newSquare = {color: "white", area: 100};
//     if (config.color) {
//         newSquare.color = config.color;
//     }
//     if (config.width) {
//         newSquare.area = config.width * config.width;
//     }
//     return newSquare;
// }

class SquareDefault {
    public color = 'white';
    public width = 10;

    constructor(config: ISquareDefault) {
        if (config.color) {
            this.color = config.color;
        }
        if (config.width) {
            this.width = config.width;
        }
    }

    // public getWidth() {
    //     return this.width;
    // }
}

class SquareWithArea extends SquareDefault {
    private readonly area: number;

    constructor(config: ISquareWithArea) {
        super(config);
        if (config.area) {
            this.area = config.area;
            this.width = config.area / 2;
        }
    }

    public getArea() {
        return this.area;
    }
}

// const mySquare = createSquareWithArea({color: 'black'});
// // printProps(mySquare);
// // [color]: black
// // [area]: 100

// const mySquare2 = createSquareWithArea({width: 15});
// // printProps(mySquare2);
// // [color]: white
// // [area]: 225 // square itself doesn't have 'width' property, but 'area'
// // property updates accordingly.

const mySquare3 = new SquareWithArea({area: 500});
console.log(mySquare3);
console.log(`area: ${mySquare3.getArea()}`);
printProps(mySquare3);

const mySquare4 = new SquareDefault({});
printProps(mySquare4);

function printProps(object: object) {
    // will display private class variables because of string literal usage in log.
    for (const prop in object) {
        if (object.hasOwnProperty(prop)) {
            console.log(`[${prop}]: ${object[prop]}`);
        }
    }
    console.log('');
}


type ISearchFunc = (source: string, subString: string) => boolean;

const mySearch: ISearchFunc = (src, sub) => {
    const result = src.search(sub);
    return result > -1;
};

console.log(mySearch('test234test', '34')); // true
console.log(mySearch('test', '3')); // false


interface IStringArray {
    readonly [index: number]: string;
}

let myArray: IStringArray = ["Bob", "Fred"];

console.log(myArray[0]);
// myArray[0] = 'test'; // error! read-only!


/**
 *
 * Arrow function
 * @param par
 */
const foo = (par: number) => par * 2;

console.log(foo(2));
