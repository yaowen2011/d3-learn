## learning d3.js
  - reference https://www.bilibili.com/video/BV1HK411L72d?p=3&vd_source=fd223c8b20ca1ebd11129b0767a0e828
  - refrence https://www.bilibili.com/video/BV1qg411X7bB/?vd_source=fd223c8b20ca1ebd11129b0767a0e828
  - scale
  - Data-join states
    - Enter\Update\Exit
      - Enter
        - g.selectAll('.test').data(data).enter().append('rect).attr()...
    - simple form
      - d3.selectAll('.bar-shape').data(data).join(
        enter => enter.append("text").attr("fill", "green).text(d=>d),
        update => (),
        exit => (),
      )
  - Path generator
    - d3.line
    - d3.geoPath().projection()
    - d3.area()
    - d3.arc().innerRadius().outerRadius()
    - d3.lineRadial().angle().radius()
  - TopoJson & GeoJson
    - g.selectAll('path').on('mouseover', function(){ d3.select(this)...}).on('mouseout', function(){d3.select(this)...})
    - d3-tip
  - Stack