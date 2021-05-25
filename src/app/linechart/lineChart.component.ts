import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import Chart from 'chart.js/auto';
import { CovidRequestModel } from '../models/covid-request.model';

@Component({
  selector: 'line-chart',
  templateUrl: './lineChart.component.html',
  styleUrls: ['./lineChart.component.scss']
})

export class LineChartComponent implements OnChanges {
  @Input() data: CovidRequestModel[];

  ngOnChanges(changes: SimpleChanges) {
    if (!changes.data.firstChange && changes.data.currentValue !== changes.data.previousValue) {
      this.setChartData();
    }
  }

  setChartData() {
    const graphLabels: any[] = [];
    const graphData: any[] = [];

    this.data.forEach(item => {
      graphLabels.push(item.day);
      graphData.push(+(item.cases.total / 1000000).toFixed(2));
    });

    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas.getContext('2d');
    const chart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: graphLabels,
        datasets: [{
          label: 'Covid-19 cases in millions',
          data: graphData,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });
  }
}
