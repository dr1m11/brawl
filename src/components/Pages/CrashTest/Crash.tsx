'use client'
import CrashWrapper from "@/components/Pages/CrashTest/components/wrappers/CrashWrapper/CrashWrapper";
import Kostil from "@/components/Pages/CrashTest/components/Kostil/Kostil";
import {Area, AreaChart, Line, LineChart, XAxis, YAxis} from "recharts";
import useResize from "@/hooks/useResize";
import {useState} from "react";
const data = [
    {
        "name": "Page A",
        "pv": 0,
    },
    {
        "name": "Page B",
        "pv": 80,
    },
    {
        "name": "Page B",
        "pv": 300,
    },
    {
        "name": "Page C",
        "pv": 1000,
    },
]


const Crash = () => {

    const res = useResize()

    const [isShow, setIsShow] = useState(true)
    const [mult, setMult] = useState(1)
    const [multi, setMulti] = useState(1)

    return (
        <CrashWrapper>
            {/*<div style={{width: '100%', height: '600px'}}>*/}
            {/*    {*/}
            {/*        isShow &&*/}
            {/*        <AreaChart width={600 * multi} height={250 * multi} data={data}*/}
            {/*                   margin={{ top: 10, right: 30, left: 30, bottom: 0 }}*/}
            {/*        >*/}
            {/*            <defs>*/}
            {/*                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">*/}
            {/*                    <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>*/}
            {/*                    <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>*/}
            {/*                </linearGradient>*/}
            {/*                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">*/}
            {/*                    <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>*/}
            {/*                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>*/}
            {/*                </linearGradient>*/}
            {/*            </defs>*/}
            {/*            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />*/}
            {/*        </AreaChart>*/}
            {/*    }*/}
            {/*    <button onClick={() => setMulti(mult)}>Show</button>*/}
            {/*    {mult}*/}
            {/*    <input onChange={(e) => setMult(+e.target.value)}/>*/}
            {/*</div>*/}
            <Kostil />
        </CrashWrapper>
    );
};

export default Crash;