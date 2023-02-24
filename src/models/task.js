
import { level } from "./levels.task"

export class Task{
    nombre = ''
    description = ''
    level = ''

    constructor(nombre, description, level){
        this.nombre = nombre
        this.description = description
        this.level = level
    }
}

