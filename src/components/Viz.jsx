import { BarChart, Bar, CartesianGrid, Line, LineChart, XAxis, YAxis, Text, Tooltip, ResponsiveContainer } from 'recharts'
import { useEffect, useState } from 'react';
import Nav from './Nav.jsx'

// TODO read from json file
const householdConsumptionData = [
{
	year: "23-24",
  consumption: "553605"
},
{
	year: "22-23",
  consumption: "528805"
},
{
	year: "21-22",
  consumption: "528653"
},
{
	year: "20-21",
  consumption: "545087"
},
{
	year: "19-20",
  consumption: "551594"
},
{
	year: "18-19",
  consumption: "576100"
},
{
	year: "17-18",
  consumption: "598765"
},
{
	year: "16-17",
  consumption: "560691"
},
{
	year: "15-16",
  consumption: "543734"
},
{
	year: "14-15",
  consumption: "535021"
},
]

const yTicks = [500000, 510000, 520000, 530000, 540000, 550000, 560000, 570000, 580000, 590000, 600000];

function Viz() {

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('/data/water-use.json')
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}`)
        }
        return res.json()
      })
      .then(json => setData(json))
      .catch(err => setError(err.message))
  }, [])

  if (error) return <p className="text-red-600 p-8">Couldn't load data: {error}</p>
  if (!data) return (
  <div className="w-full min-h-screen bg-zinc-100 text-black antialiased overflow-x-hidden">
        {/* Background */}
        <Nav />
        <section className="pt-32 pb-20 pl-12 pr-12 px-6">
          <div className="max-w-6xl mx-auto text-center">
    
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Loading…
            </h1>
          </div>
        </section>
  </div>
  )

  return (
    <div className="w-full min-h-screen bg-zinc-100 text-black antialiased overflow-x-hidden">
        {/* Background */}
        <Nav />
        <section className="pt-32 pb-20 pl-12 pr-12 px-6">
          <div className="max-w-6xl mx-auto text-center">
    
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Data Visualisation
            </h1>
            <p className="text-slate-600 mb-6 text-center">NSW Total Water consumption (Megalitres), 2023-24</p>
            <p className="text-slate-400 mb-6 text-left">Total water use minus total water supply (supply of distributed water, wastewater, reuse water, and return flows).</p>
            </div>

            <ResponsiveContainer width="100%" height={350}>
              <BarChart data={data}>
                <XAxis dataKey="shortName" angle={-45} textAnchor="end" height={100} interval={0}  />

                <YAxis width={100} />
                <Tooltip
                  formatter={(value, waterConsumption) => [`${value.toLocaleString()} ML`]}
                  labelFormatter={(label) => {
                    const dataItem = data.find(d => d.shortName === label);
                    const fullName = dataItem.fullName;
                    return (
                      `${fullName}`
                    )
                  }}
                />
                <Bar dataKey="waterConsumption" fill="#10288C" />
              </BarChart>
            </ResponsiveContainer>

            <p className="text-slate-400 mb-6">Australian Bureau of Statistics (2025) 
              <a href="https://www.abs.gov.au/statistics/environment/environmental-accounts/water-account-australia/2023-24"
              className="text-underline hover:text-blue-400"> Water Account, Australia</a>
              , accessed 04 November 2026.</p>

            <p className="text-slate-600 mb-6 text-center">NSW Household Water consumption (Megalitres), by year</p>
            <ResponsiveContainer width="100%" height={350}>
              <LineChart data={householdConsumptionData}>
                <CartesianGrid />

                <XAxis dataKey="year" angle={-45} textAnchor="end" height={100} interval={0}  />

                <YAxis width={100} ticks={yTicks} />
                
                <Line dataKey="consumption"/>
              </LineChart>
            </ResponsiveContainer>

            <p className="text-slate-400 mb-6">Australian Bureau of Statistics (2025) 
              <a href="https://www.abs.gov.au/statistics/environment/environmental-accounts/water-account-australia/2023-24"
              className="text-underline hover:text-blue-400"> Water Account, Australia</a>
              , accessed 04 November 2026.</p>
        </section>
    </div>
  )
}

export default Viz