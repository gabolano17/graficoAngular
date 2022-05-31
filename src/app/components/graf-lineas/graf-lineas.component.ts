import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Balance } from 'src/app/models/balance';
import { BalanceService } from 'src/app/services/balance.service';

@Component({
  selector: 'app-graf-lineas',
  templateUrl: './graf-lineas.component.html',
  styleUrls: ['./graf-lineas.component.css'],
})
export class GrafLineasComponent implements OnInit {
  balance: Balance[] = [];
  grafico: any = [];
  año: any;
  ventas: any;

  constructor(private service: BalanceService) {
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.service.getData().subscribe((data) => {
      this.balance = data;
      this.año = this.balance.map((a) => a.año);
      this.ventas = this.balance.map((v) => v.ventas);
      this.graficar(this.año, this.ventas);
    });
  }

  graficar(año: any, ventas: any) {
    this.grafico = new Chart('graficoLinea', {
      type: 'line',
      data: {
        labels: año,
        datasets: [
          {
            label: 'Ventas',
            data: ventas,
            backgroundColor: 'rgba(75, 192, 192, 1)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
