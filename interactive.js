const w = 400;
const h = 400;

const dataset;
d3.csv("d3_data/interactive_data.csv").then(function(data){
  dataset = data;
  creatChart();
});

function creatChart() {
  const svg = d3.select("#myviz")
              .append("svg")
              .attr("width", w)
              .attr("heigh", h);
              
  const countries = dataset.map(d => d.Country.Name)
  const maxGDP = dataset.map(d => max(d.Value))  
  const bandWidth = w / dataset.length - 1;
  
  const bandScale = d3.scaleBand()
                      .domain(countries)
                      .range([0, w])
                      
  const heightScale = d3.scaleLinear()
                        .domain([0,maxGDP])
                        .range([0,h])
  
  svg.selectAll("rect")
     .data(dataset)
     .enter()
     .append("rect")
     .attr("x", (d, i) => bandScale(d.Country.Name))
     .attr("y", d => h - heightScale(d.Value))
     .attr("width", d => bandScale.bandwidth())
     .attr("height", d => d.Value)
     .attr("fill", d => d.Color)
}