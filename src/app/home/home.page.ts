import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonLabel, IonNote, IonIcon,
     IonGrid, IonCol, IonRow, IonItem, IonInput } from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, IonInput, IonCol, IonGrid, IonRow, IonButton, IonHeader, IonToolbar, IonLabel, IonNote,IonIcon,
     IonTitle, IonContent, IonItem],
})
export class HomePage {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onLogin() {
    if (this.loginForm.valid) {
      // Handle login
    } else {
      // Show errors
    }
  }

  onSocialLogin(provider: string) {
    // Handle social login
  }

  togglePasswordVisibility() {
    // Toggle password visibility
  } 
}
