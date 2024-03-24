enum Status {
Pending,
Active,
Completed,
}

////////////////////////////////

interface User {
id: string;
name: string;
status: Status;
}

////////////////////////////////

const user: User = {
id: '123',
name: 'John Doe',
status: Status.Active,
};

////////////////////////////////

type Point = {
x: number;
y: number;
};

////////////////////////////////

function getItem<T>(items: T[], id: string): T | undefined {
return items.find(item => item.id === id);
}

////////////////////////////////

type StringOrNumber = string | number;

function logMessage(message: StringOrNumber): void {
console.log(message);
}

////////////////////////////////////////////////////////////////

class Person {
private name: string;

constructor(name: string) {
this.name = name;
}

public getName(): string {
return this.name;
}
}

////////////////////////////////////////////////////////////////

class Person {
private name: string;

constructor(name: string) {
this.name = name;
}

public getName(): string {
return this.name;
}
}
