// simple inteface example

interface USERINFO {
    name: string;
    age: number;
    isAdmin?: boolean;
}

const userDetails: USERINFO = {
    name: "John Doe",
    age: 30,
    isAdmin: true
};

// readonly interface example
interface READONLYUSER {
    readonly id: number;
    name: string;
}

const user: READONLYUSER = {
    id: 1,
    name: "Jane Doe"
};

// user.id = 2; // Error: Cannot assign to 'id' because it is a read-only property.

// extending interfaces example
interface EMPLOYEE extends USERINFO {
    employeeId: number;
    designation: string;
}

const employeeDetails: EMPLOYEE = {
    name: "Alice Smith",
    age: 28,
    employeeId: 12345,
    isAdmin: false,
    designation: "Software Engineer"
};