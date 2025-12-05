function identity<T>(value: T):T{
    console.log(value)
    return value;
}

const output1=identity<string>("Diya");
const output12=identity<number>(123)

console.log(output12)