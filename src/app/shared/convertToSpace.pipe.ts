import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'convertToSpace'
})
//this class called A custum pipe we can create a several ones 
export class ConvertToSpace implements PipeTransform{
    transform(value: string, charachter: string) : string {

       return value.replace(charachter, ' ');
    }

}