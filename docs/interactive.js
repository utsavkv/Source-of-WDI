const w = 350;
const h = 330;
const slider_h = 40;
const margin = {left: 25, top: 5, right: 25, bottom: 25};
const innerWidth = w - margin.left - margin.right;
const innerHeight = h - margin.top - margin.bottom;

const rowConverter = function (d) {
  return {
      country: d.Country.Name,
      year: +d.Year,
      value: d.Value
    }
};  


d3.csv('d3.csv', rowConverter)
  .then(function(data) {
    console.log(data)
  })
