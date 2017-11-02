export class Beer {

    public id: number;
    public name: string;
    public description: string;
    public style: string; 
    public abv: number;
    public ibu: number;
    public rating: number;
    public brewery: string;

    constructor(id: number, name: string, description: string, style: string,
        abv: number, ibu: number, rating: number, brewery: string) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.style = style;
        this.abv = abv;
        this.ibu = ibu;
        this.rating = rating;
        this.brewery = brewery;
    }
}