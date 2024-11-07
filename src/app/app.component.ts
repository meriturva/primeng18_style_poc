import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PrimeNGConfig } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputTextModule } from 'primeng/inputtext';
import { definePreset } from 'primeng/themes';

import { Aura } from 'primeng/themes/aura';

const DiegoPreset = definePreset(Aura, {
  semantic: {
    colorScheme: {
      dark: {
        primary: {
          color: 'red'
        }
      }
    }
  },
  components: {
    button: {
      colorScheme: {
        dark: {
          root: {
            secondary: {
              color: 'var(--caep-button-secondary-color)',
              background: 'var(--caep-button-secondary-background)'
            }
          }
        }
      }
    }
  }
});

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [DatePickerModule, ButtonModule, FormsModule, InputTextModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  date = new Date();

  constructor(private config: PrimeNGConfig) {
    this.config.theme.set({
      preset: DiegoPreset,
      options: {
        //prefix: 'primeng',
        cssLayer: {
          name: 'primeng',
          order: 'tailwind-base, primeng, tailwind-utilities'
        }
      }
    })
  }
}
