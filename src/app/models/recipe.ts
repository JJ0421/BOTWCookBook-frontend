export class Recipe {
    id: number;
    name: string;
    ingredients: string;
    hearts: string;
    effect: string;
    notes: string

    public setName(name: string){
        this.name = name;
    }

    public setIngredients(ingredients: string){
        this.ingredients = ingredients;
    }

    public setHearts(hearts: string){
        this.hearts = hearts;
    }

    public setEffect(effect: string){
        this.effect = effect;
    }

    public setNotes(notes: string){
        this.notes = notes;
    }

}
