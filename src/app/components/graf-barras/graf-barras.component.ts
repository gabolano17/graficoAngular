import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { Balance } from 'src/app/models/balance';
import { BalanceService } from 'src/app/services/balance.service';

@Component({
  selector: 'app-graf-barras',
  templateUrl: './graf-barras.component.html',
  styleUrls: ['./graf-barras.component.css'],
})
export class GrafBarrasComponent implements OnInit {
  balance: Balance[] = [];
  grafico: any = [];
  año: any;
  costos: any;
  utilidades: any;

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
      this.costos = this.balance.map((c) => c.costos);
      this.utilidades = this.balance.map((u) => u.utilidades);
      this.graficar(this.año, this.costos, this.utilidades);
    });
  }

  graficar(año: any, costos: any, utilidades: any) {
    this.grafico = new Chart('graficoBarra', {
      type: 'bar',
      data: {
        labels: año,
        datasets: [
          {
            label: 'Costos',
            data: costos,
            backgroundColor: 'rgba(255, 99, 132, 1)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
          {
            label: 'Utilidades',
            data: utilidades,
            backgroundColor: 'rgba(54, 162, 235, 1)',
            borderColor: 'rgba(54, 162, 235, 1)',
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

  exportToExcel(){
    
  }
}
