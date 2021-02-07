import * as React from 'react';
import { VictoryBar, VictoryChart, VictoryTooltip } from 'victory';

import { t_skillScore, t_userScore } from '../Types/UserScore.Types';

interface currentScoreProps {
    data: t_userScore
}

function UserCurrentScore(props: currentScoreProps) {
    const graphData: any[] =[];
    
    props.data.results.forEach((skillScore: t_skillScore, index: number) => {
        graphData.push({
            x: skillScore.skill,
            y: skillScore.score, 
            label: `${skillScore.skill}: ${skillScore.score}`
        })
    })

    console.log({graphData})
    return (
        <div>
            <h1>{`Sprint ${props.data.sprint.toString()}`}</h1>

            <VictoryChart
            domain={{ x: [1, graphData.length], y: [0, 5] }}
            domainPadding={20}
            >
            <VictoryBar
                labelComponent={<VictoryTooltip/>}
                data={graphData}
                style={{
                data: {fill: "tomato", width: 20}
                }}
            />
            </VictoryChart>
        </div>
    )
}

export default UserCurrentScore;