
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, CartesianGrid } from 'recharts';

const Statistics = () => {
    const data = [
        { month: 'January', sales: 1200 },
        { month: 'February', sales: 1800 },
        { month: 'March', sales: 2200 },
        { month: 'April', sales: 1600 },
        { month: 'May', sales: 2500 },
        { month: 'June', sales: 3000 },
        { month: 'July', sales: 2800 },
        { month: 'August', sales: 3500 },
        { month: 'September', sales: 3200 },
        { month: 'October', sales: 4200 },
        { month: 'November', sales: 3800 },
        { month: 'December', sales: 4500 },
    ];
    return (
        <>
            <div>
                <div className='mb-40'>
                    <h1 className='text-center text-4xl font-bold'>Sale Statistics Of Last Year </h1>
                </div>
                <div>
                    <BarChart width={1200} height={500} data={data}>
                        <XAxis dataKey="month" stroke="#8884d8" />
                        <YAxis />
                        <Tooltip wrapperStyle={{ width: 100, backgroundColor: '#ccc' }} />
                        <Legend width={100} wrapperStyle={{ top: 0, right: 20, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '40px' }} />
                        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                        <Bar dataKey="sales" fill="#8884d8" barSize={30} />
                    </BarChart>
                </div>
            </div>
        </>
    );
};

export default Statistics;