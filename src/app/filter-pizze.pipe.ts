import { Pipe, PipeTransform } from "@angular/core";
import { Meal } from "./meal.interface";

@Pipe(
    {
        name: "filterPizze",
    }
)

export class FilterPizzePipe implements PipeTransform {
    transform(cards: Meal[], searchTerm: string): Meal[] {
        if(!cards || !searchTerm){
            return cards;
        }

        searchTerm = searchTerm.toLowerCase();
        return cards.filter(card => 
            card.title.toLowerCase().includes(searchTerm) || 
            card.ingredients.some(ingredient => ingredient.toLowerCase().includes(searchTerm)))
    }
}