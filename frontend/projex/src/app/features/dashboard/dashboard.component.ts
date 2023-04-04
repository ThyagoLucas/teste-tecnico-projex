import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';


type EChartsOption = echarts.EChartsOption;


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    ()=> {this.graphPlot()}

  }

  graphPlot():void{

		const disabled = document.querySelector(".disabled")
		if(disabled != null){
			disabled.classList.remove('disabled')
		}

		const chartDom = document.getElementById('main')!;
		const myChart = echarts.init(chartDom);
		let option: EChartsOption;



		option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          crossStyle: {
            color: '#999'
          }
        }
      },
      toolbox: {
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ['line', 'bar'] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      legend: {
        data: ['Evaporation', 'Precipitation', 'Temperature']
      },
      xAxis: [
        {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisPointer: {
            type: 'shadow'
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          name: 'Precipitation',
          min: 0,
          max: 250,
          interval: 50,
          axisLabel: {
            formatter: '{value} ml'
          }
        },
        {
          type: 'value',
          name: 'Temperature',
          min: 0,
          max: 25,
          interval: 5,
          axisLabel: {
            formatter: '{value} °C'
          }
        }
      ],
      series: [
        {
          name: 'Evaporation',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value as number + ' ml';
            }
          },
          data: [
            2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3
          ]
        },
        {
          name: 'Precipitation',
          type: 'bar',
          tooltip: {
            valueFormatter: function (value) {
              return value as number + ' ml';
            }
          },
          data: [
            2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3
          ]
        },
        {
          name: 'Temperature',
          type: 'line',
          yAxisIndex: 1,
          tooltip: {
            valueFormatter: function (value) {
              return value as number + ' °C';
            }
          },
          data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
        }
      ]
    };

		myChart.on('brushSelected', function (params:any) {
			const brushed = [];
			const brushComponent = params.batch[0];
			for (let sIdx = 0; sIdx < brushComponent.selected.length; sIdx++) {
				const rawIndices = brushComponent.selected[sIdx].dataIndex;
				brushed.push('[Series ' + sIdx + '] ' + rawIndices.join(', '));
			}
			console.log(brushed)
			myChart.setOption({
				title: {
					backgroundColor: '#333',
					text: 'SELECTED DATA INDICES: \n' + brushed.join('\n'),
					bottom: 0,
					right: '10%',
					width: 100,
					textStyle: {
						fontSize: 12,
						color: '#fff'
					}
				}
			});
		});

		option && myChart.setOption(option);
	}

}
