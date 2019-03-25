export interface Hobby{
    name: string; 
    id: number;
};

export interface Employee {
    id: number;
    firstname: string,
    lastname: string,
    imageurl: string,
    description: string,
    gender: string,
    department: string,
    emailInput: string,
    phone: string,
    hobbies: [],
    showSettings: boolean
}