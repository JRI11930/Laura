import React from 'react';
import { PieChart, Pie, Cell, Tooltip as PieTooltip, Legend as PieLegend, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip as BarTooltip, Legend as BarLegend } from 'recharts';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// Datos de prueba para el gráfico de pastel
const pieData = [
  { name: 'HTML', value: 100 },
  { name: 'JavaScript', value: 50 },
  { name: 'CSS', value: 50 }
];

// Datos de prueba para el gráfico de barras
const barData = [
  { name: 'React', uv: 75 },
  { name: 'Node.js', uv: 40 },
  { name: 'MongoDB', uv: 20 }
];

const Graphics = () => {
  return (
    <div className="chart-container">
        <div className="chart bar-chart">
        <BarChart
          width={500}
          height={300}
          data={barData}
          margin={{
            top: 5, right: 30, left: 20, bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <BarTooltip />
          <BarLegend />
          <Bar dataKey="uv" fill="#8884d8" />
        </BarChart>
        <h2 className="chart-title">Progreso de Cursos</h2>
      </div>
      <div className="chart pie-chart">
        <PieChart width={400} height={400}>
          <Pie
            data={pieData}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <PieTooltip />
          <PieLegend />
        </PieChart>
        <h2 className="chart-title">Distribución de Cursos Completados</h2>
      </div>
    </div>
  );
};

export default Graphics;

