import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { Balance } from './models/balance';
import { BalanceService } from './services/balance.service';
import { ExporterService } from './services/exporter.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  balance: Balance[] = []
  title = 'Balance General';

  ngOnInit(): void {
    this.balanceService.getData().subscribe(data => this.balance = data);
  }

  constructor(private balanceService: BalanceService, private exportToExcel: ExporterService){}

  descargarExcel(){
    this.exportToExcel.exportToExcel(this.balance, 'balance');
  }
}
