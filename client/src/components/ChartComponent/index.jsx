import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts'

const ChartComponent = props => {
  const {chartData} = props

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="day" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="calories"
            fill="#000000"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default ChartComponent