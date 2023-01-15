
import { Chart } from "primereact/chart";
import { useEffect, useState } from "react";
import { SimulationModel } from "../../../models/simulation.model";

export default function SimulationGraph ({
    simulation
} : {
    simulation : SimulationModel | undefined
}) {
    const [graphData, setGraphData] = useState({});

    useEffect(() => {
        setGraphData({...graphData,
            labels: simulation?.conv_info?.data.map(d => d.seconds.toString()),
            datasets: [
                {
                    label: 'Dataset',
                    data: simulation?.conv_info?.data.map(d => d.loss),
                    fill: false,
                    tension: .4,
                    borderColor: '#42A5F5'
                }
            ]
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [simulation]);

    const graphOptions = {
        maintainAspectRatio: false,
        aspectRatio: .6,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            },
            y: {
                ticks: {
                    color: '#495057'
                },
                grid: {
                    color: '#ebedef'
                }
            }
        }
    };

    return (
        <>
            {simulation?.conv_info 
                ? <Chart type="line" data={graphData} options={graphOptions} />
                : <p className="text-center">No graph data</p>
            }
        </>
    );
}