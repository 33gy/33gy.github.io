(function() {
    var svg = d3.select("svg");
    
    function getRandom(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    }
    
    function drawCircle(x, y, size) {
        console.log('Drawing circle at', x, y, size);
        svg.append("circle")
            .attr('class', 'click-circle')
            .attr("cx", x)
            .attr("cy", y)
            .attr("r", size);
    }
    
    svg.on('click', function() {
        var coords = d3.mouse(this);
        console.log(coords);
        drawCircle(coords[0], coords[1], getRandom(5,50));
    });
    
})();