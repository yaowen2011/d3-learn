import { useEffect } from "react"
import * as d3 from "d3";

export default function Column() {
  useEffect(
    () => {
      const data = [
        {name:'test-a', value: 6},
        {name:'test-b', value: 16},
        {name:'test-c', value: 30},
        {name:'test-d', value: 3},
      
      ]
      const svg = d3.select('#mainSvg')
      const width = +svg.attr('width')
      const height = +svg.attr('height')
      console.log('d3---', width, height)
      const margin = {top: 60, right: 30, bottom: 30, left: 60}
  
      const innerWidth = width - margin.left - margin.right;
      const innerHeight = height - margin.top -margin.bottom;
  
      const xScale = d3
      .scaleLinear()
      .domain([0, Math.max(...data.map(item=> item.value))])
      .range([0, innerWidth])
  
      const yScale = d3
      .scaleBand()
      .domain(data.map(item=> item.name))
      .range([0, innerHeight])
      .padding(0.15)
  
      const g = svg.append('g').attr('id', 'maingroup')
        .attr("transform", `translate(${margin.left}, ${margin.top})`)
  
      const yAxis = d3.axisLeft(yScale) 
      g.append('g').call(yAxis)
  
      const xAxis = d3.axisBottom(xScale)
      g.append('g').call(xAxis).attr('transform', `translate(0, ${innerHeight})`)
  
      // render column
      data.forEach(item => {
        g.append('rect')
        .attr('width', xScale(item.value))
        .attr('height', yScale.bandwidth())
        .attr('x', 0)
        .attr('y', yScale(item.name))
        .attr('fill', 'skyblue')
        .attr('opacity', 0.75)
      })
      // change label size
      g.selectAll(".tick text").attr('font-size', '2em')
  
      // adjust title to center
      g.append('text')
      .text('This is chart title')
      .attr('font-size', '2.5em')
      .attr('transform', `translate(${innerWidth/2}, 0)`)
      .attr('text-anchor', 'middle')
    }
    ,[])
  return (
    <div>
        <svg width={1600} height={800} id="mainSvg" className='svgs'></svg>
      </div>
  )
}