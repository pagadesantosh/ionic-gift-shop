import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonButton,
  IonLabel,
  IonNote,
  IonIcon,
  IonGrid,
  IonCol,
  IonRow,
  IonItem,
  IonInput,
  IonThumbnail,
  IonImg,
  IonCard,
  IonText,
  IonSearchbar,
  IonButtons,
  IonBadge,
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { ApiService } from 'src/app/services/api/api.service';
import { CartService } from 'src/app/services/cart/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonBadge,
    IonButtons,
    IonSearchbar,
    IonText,
    IonCard,
    IonImg,
    ReactiveFormsModule,
    RouterLink,
    IonInput,
    IonCol,
    IonGrid,
    IonRow,
    IonButton,
    IonHeader,
    IonToolbar,
    IonLabel,
    IonNote,
    IonIcon,
    IonTitle,
    IonContent,
    IonItem,
    IonThumbnail,
    IonButtons,
  ],
})
export class HomePage implements OnInit, OnDestroy {
  items: any[] = [];
  allItems: any[] = [];
  query!: string;
  totalItems = 0;
  cartSub!: Subscription;
  private api = inject(ApiService);
  private cartService = inject(CartService);
  constructor() {}

  ngOnInit() {
    console.log('HomePage ngOnInit');
    this.getItems();
    this.cartSub = this.cartService.cart.subscribe({
      next: (cart) => {
        this.totalItems = cart ? cart?.totalItem : 0;
      },
    });
  }

  ngOnDestroy(): void {
    if(this.cartSub)
    this.cartSub.unsubscribe();
  }

  getItems() {
    this.allItems = this.api.items;
    this.items = [...this.allItems];
  }

  async onSearchChange(event: any) {
    this.query = event.detail.value.toLowerCase();
    this.querySearch();
  }

  querySearch() {
    if (this.query === '') {
      this.items = [...this.allItems];
    } else {
      this.items = this.api.items.filter((item) => {
        return item.name.toLowerCase().includes(this.query);
      });
    }
  }
}
