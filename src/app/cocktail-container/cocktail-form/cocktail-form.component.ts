import { Component, OnInit } from "@angular/core";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-cocktail-form",
  templateUrl: "./cocktail-form.component.html",
  styleUrls: ["./cocktail-form.component.scss"]
})
export class CocktailFormComponent implements OnInit {
  public cocktailForm: FormGroup;

  public get ingredients() {
    return this.cocktailForm.get("ingredients") as FormArray;
  }

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.cocktailForm = this.fb.group({
      name: ["", Validators.required],
      img: ["", Validators.required],
      description: "",
      ingredients: this.fb.array([], Validators.required)
    });
  }

  public addIngredient(): void {
    this.ingredients.push(
      this.fb.group({
        name: ["", Validators.required],
        quantity: [0, Validators.required]
      })
    );
  }

  public submit(): void {
    console.log(this.cocktailForm);
  }
}
