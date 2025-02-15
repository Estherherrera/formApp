import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../shared/service/validators.service';

@Component({
  templateUrl: './switches-page.component.html',
  styles: ``
})
export class SwitchesPageComponent implements OnInit {

  public myForm: FormGroup = this.fb.group({
    gender: ['M', Validators.required],
    wantNotifications: [true, Validators.required],
    termAndConditions: [false, Validators.requiredTrue]
  })


  constructor( private fb: FormBuilder, private validatorsService: ValidatorsService) {}
  ngOnInit(): void {
    this.myForm.reset(this.person)
  }

  public person = {
    gender: 'F',
    wantNotifications: false
  }

  isValidField( field: string): boolean | null{
    return this.validatorsService.isValidField(this.myForm, field)
  }

  onSave(): void {
    if(this.myForm.invalid){
      this.myForm.markAllAsTouched();
      return
    }

    const { termAndConditions, ...newPerson} = this.myForm.value

    this.person = newPerson
    console.log(this.myForm.value)
    console.log(this.person)
  }
}
