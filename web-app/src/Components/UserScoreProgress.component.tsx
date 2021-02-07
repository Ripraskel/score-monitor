import * as React from 'react'
import { VictoryChart, VictoryTooltip, VictoryLine, VictoryVoronoiContainer, VictoryGroup, VictoryScatter } from 'victory'
import { ResponsiveBump } from '@nivo/bump'
import { ResponsiveLine } from '@nivo/line'
import { t_skillScore, t_userScore } from '../Types/UserScore.Types';

interface currentScoreProps {
    data: t_userScore[]
    userName: string
}

interface skillSeries {
    id: string
    color: string
    data: {
        x: string,
        y: number,
        // label: string
    }[]
}

function UserScoreProgress(props: currentScoreProps) {
    let graphData: skillSeries[] = [] as skillSeries[];

    props.data.forEach((userScore: t_userScore, index: number) => {
        if (userScore.populated) {
            userScore.results.forEach((skillScore: t_skillScore, skillIndex: number) => {
                if (graphData[skillIndex] === undefined) {
                    graphData[skillIndex] = {
                        id: skillScore.skill,
                        color: "hsl(23, 70%, 50%)",
                        data: [{
                            x: userScore.sprint, 
                            y: skillScore.score,
                            // label: `${skillScore.skill}\r\n Sprint:${userScore.sprint}\r\n Score:${skillScore.score}`
                        }]
                    };
                } else {
                    graphData[skillIndex].data.push({
                                x: userScore.sprint, 
                                y: skillScore.score,
                                // label: `${skillScore.skill}\r\n Sprint:${userScore.sprint}\r\n Score:${skillScore.score}`
                    });
                }
            });
        }
    });

    console.log({graphData})
    return (
        <div>
            <h1>{`${props.userName}'s progress`}</h1>
            {/* <VictoryChart
                domain={{y: [0, 5] }}
                origin={{x: 0, y: 0}}
                containerComponent={
                    <VictoryVoronoiContainer width={650} />
                }
                
            >
                
                {
                    graphData.map((series) => (
                            <VictoryLine
                                style={{
                                    data: {
                                        stroke: `#${Math.floor(Math.random()*16777215).toString(16)}`
                                    }
                                }}
                                data={series.data}
                                labelComponent={<VictoryTooltip/>}
                                
                            />
                        
                    ))
                } */}
                 {/* </VictoryChart> */}
                 <ResponsiveLine
        data={graphData}
        margin={{
            top: 0,
            right: 50,
            bottom: 50,
            left: 50
          }}
          yScale={{
            type: "linear",
            stacked: false
          }}
          xScale={{
            type: "time",
            precision: "day",
            format: "native"
          }}
          axisBottom={{
            format: "%b %d"
          }}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
           
        </div>
    )
}

export default UserScoreProgress;