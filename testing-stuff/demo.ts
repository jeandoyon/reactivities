// let data = 42;
// let data: number = 42;
// let data: number | string = 42;
// let data: any = 42; # try not to do that.

// Duck typing
// both objects have the same type mathcing

/* Not so good
interface Duck {
    name: string;
    numLegs: number;
    makeSound?: (sound: string) => void; //optional prop use the ?
}
*/

// Better
export interface Duck {
    name: string;
    numLegs: number;
    makeSound: (sound: string) => void; //optional prop use the ?
}

const duck1: Duck = {
    name: 'huey',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}

/* Not so good
const duck2: Duck = {
    name: 'dewey',
    numLegs: 2,
    //
}
*/
const duck2: Duck = {
    name: 'dewey',
    numLegs: 2,
    makeSound: (sound: any) => console.log(sound)
}

// Not so good
//duck1.makeSound!('quack'); //override typescript type safety behavior with ! (try no to do that).

//Better
duck1.makeSound('quack'); //override typescript type safety behavior with ! (try no to do that).

export const ducks = [duck1, duck2]