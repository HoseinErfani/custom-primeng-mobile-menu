import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class MobileMenuComponent implements OnInit {


  items: MenuItem[];

  constructor() {
    this.items = [];
  }

  ngOnInit() {
    this.items = [
      {
        label: 'شناسه واریز',
         items: [
          {
            label: 'شناسه واریز برگشتی',
             url:'/aaa',
             target:'_self'
          },
          {
            label: 'شناسه پرداخت',
            url:'/bbb',
           },
          {
            separator: true
          },
          {
            label: 'شناسه بازپرداخت',
           }
        ]
      },
      {
        label: 'چک',
         items:[
          {
            label: 'شناسه واریز',
             items: [
              {
                label: 'شناسه واریز برگشتی',
              },
              {
                label: 'شناسه پرداخت',
               },
              {
                separator: true
              },
              {
                label: 'شناسه بازپرداخت',
               }
            ]
          },
          {
            label: 'چک',
             items: [
              {
                label: 'چک واریزی',
               },
              {
                label: 'چک صیادی',
               },
              {
                label: 'چک زماندار',
               },
              {
                label: 'گزارشات',
               },

            ]
          }
        ]
      }
    ]
  }

}
