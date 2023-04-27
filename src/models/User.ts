export class User {

    //Atributos

    // id: string
    // name: string
    // email: string
    // password: string

    //Constructor

    constructor(
        private id: string, 
        public name: string, 
        public email: string, 
        public password: string
        ){
        // this.id = id,
        // this.name = name,
        // this.email = email,
        // this.password = password
    }
    //Métodos
    public getId(): string{
        return this.id
    }
    public setId(newId: string): void{
        this.id = newId
    }

    public getName(): string{
        return this.name
    }
    public setName(newName: string): void{
        this.id = newName
    }

    public getEmail(): string{
        return this.email
    }
    public setEmail(newEmail: string): void{
        this.id = newEmail
    }

    public getPassword(): string{
        return this.password
    }
    public setPassword(newPassword: string): void{
        this.id = newPassword
    }

}

//Instância
const user1 = new User(
    "004",
    "Myllena",
    "myllena@gmail.com",
    "123456")

console.table(user1)