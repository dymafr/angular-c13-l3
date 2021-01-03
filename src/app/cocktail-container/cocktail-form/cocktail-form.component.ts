import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-cocktail-form",
  templateUrl: "./cocktail-form.component.html",
  styleUrls: ["./cocktail-form.component.scss"]
})
export class CocktailFormComponent implements OnInit {
  public cocktailForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.cocktailForm = this.fb.group({
      name: ["", Validators.required],
      img: ["", Validators.required],
      description: ""
    });
  }

  public submit(): void {
    console.log(this.cocktailForm);
  }
}
