import * as React from 'react'
import { Tooltip, ChartProvider, XAxis, YAxis, BarSeries } from 'rough-charts'

import { t_userScore } from '../Types/UserScore.Types';

interface currentScoreProps {
    data: t_userScore
}

function UserCurrentScore(props: currentScoreProps) {
    console.log(props.data)
    return (
        <div>
            <h1>{`Sprint ${props.data.sprint.toString()}`}</h1>
            <ChartProvider
                height={400}
                data={props.data.scores}
            >
                <XAxis dataKey="skill" options={{fillStyle: "hachure", fill: "red"}} />
                <YAxis  tickSize={5} tickCount={5}/>
                <BarSeries
                    dataKey="score"
                    options={{
                        stroke: "red",
                        strokeWidth: 1,
                        fill: "red"
                    }}
                />
                {/* <BarSeries
                    dataKey="value2"
                    options={{
                        stroke: "blue",
                        strokeWidth: 1,
                        fill: "none"
                    }}
                /> */}
                <Tooltip />
            </ChartProvider>
        </div>
    )
}

export default UserCurrentScore;