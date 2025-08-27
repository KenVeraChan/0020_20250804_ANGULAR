export class Empleado
{
    private nombre: string="";
    private apellido:string="";
    private cargo:string="";
    private salario:number=0;

    constructor(nombre:string,apellido:string, cargo:string, salario:number)
    {
        this.nombre=nombre;
        this.apellido=apellido;
        this.cargo=cargo;
        this.salario=salario;
    }
    public getNombre(): string
    {
        return this.nombre;
    }
    public getApellido(): string
    {
        return this.apellido;
    }
    public getCargo(): string
    {
        return this.cargo;
    }
    public getSalario(): number
    {
        return this.salario;
    }   
}