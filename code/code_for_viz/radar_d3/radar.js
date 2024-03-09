      
      /* Radar chart design created by Nadieh Bremer - VisualCinnamon.com */
      /* Updated for d3.js v4 by Ingo Kleiber <ingo@kleiber.me> */
      
			////////////////////////////////////////////////////////////// 
			//////////////////////// Set-Up ////////////////////////////// 
			////////////////////////////////////////////////////////////// 

			var margin = {top: 100, right: 100, bottom: 100, left: 100},
				width = Math.min(700, window.innerWidth - 10) - margin.left - margin.right,
				height = Math.min(width, window.innerHeight - margin.top - margin.bottom - 20);
					
			////////////////////////////////////////////////////////////// 
			////////////////////////// Data ////////////////////////////// 
			////////////////////////////////////////////////////////////// 

			var data = [
					  [//Free
						{axis:"Action",value:0.18},
						{axis:"Indie",value:0.21},
						{axis:"Casual",value:0.08},
						{axis:"Adventure",value:0.15},
						{axis:"Strategy",value:0.09},
						{axis:"Simulation",value:0.12},
						{axis:"RPG",value:0.05},
						{axis:"Racing",value:0.02},
                        {axis:"Sports",value:0.03},
                        {axis:"Utilities",value:0.08}			
					  ],[//1-10 dollars
                        {axis:"Action",value:0.19},
						{axis:"Indie",value:0.24},
						{axis:"Casual",value:0.18},
						{axis:"Adventure",value:0.12},
						{axis:"Strategy",value:0.11},
						{axis:"Simulation",value:0.07},
						{axis:"RPG",value:0.05},
						{axis:"Racing",value:0.02},
                        {axis:"Sports",value:0.01},
                        {axis:"Utilities",value:0.00}
					  ],[//10-20 dollars
                        {axis:"Action",value:0.27},
						{axis:"Indie",value:0.08},
						{axis:"Casual",value:0.05},
						{axis:"Adventure",value:0.18},
						{axis:"Strategy",value:0.14},
						{axis:"Simulation",value:0.10},
						{axis:"RPG",value:0.11},
						{axis:"Racing",value:0.02},
                        {axis:"Sports",value:0.02},
                        {axis:"Utilities",value:0.01}
					  ],[//20-50 dollars
                        {axis:"Action",value:0.28},
						{axis:"Indie",value:0.10},
						{axis:"Casual",value:0.05},
						{axis:"Adventure",value:0.15},
						{axis:"Strategy",value:0.20},
						{axis:"Simulation",value:0.11},
						{axis:"RPG",value:0.14},
						{axis:"Racing",value:0.09},
                        {axis:"Sports",value:0.08},
                        {axis:"Utilities",value:0.09}
					  ],[//50-500 dollars
                        {axis:"Action",value:0.42},
						{axis:"Indie",value:0.02},
						{axis:"Casual",value:0.10},
						{axis:"Adventure",value:0.05},
						{axis:"Strategy",value:0.08},
						{axis:"Simulation",value:0.30},
						{axis:"RPG",value:0.10},
						{axis:"Racing",value:0.06},
                        {axis:"Sports",value:0.20},
                        {axis:"Utilities",value:0.14}
					  ]
					];
			////////////////////////////////////////////////////////////// 
			//////////////////// Draw the Chart ////////////////////////// 
			////////////////////////////////////////////////////////////// 

            var color = d3.scaleOrdinal()
				.range(['#00C691', '#8F52D2', '#FB9E58','#62B6CB','#F77670']);
				
			var radarChartOptions = {
			  w: width,
			  h: height,
			  margin: margin,
			  maxValue: 0.45,
			  levels: 5,
			  roundStrokes: true,
			  color: color
			};

			//Call function to draw the Radar chart
			RadarChart(".radarChart", data, radarChartOptions);