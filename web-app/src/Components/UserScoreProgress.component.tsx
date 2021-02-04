import * as React from 'react'
import { Tooltip, ChartProvider, XAxis, YAxis, BarSeries } from 'rough-charts'

import { ScoreContainerState, t_userScore } from '../Types/UserScore.Types';

interface currentScoreProps {
    data: t_userScore[]
    userName: string
}

function UserScoreProgress(props: currentScoreProps) {
    console.log(props.data[0])
    // const data = props.data.map((userScore, index) => {
    //     return {
    //         sprint: userScore.sprint,
    //         `${userScore.scores[index].skill}`: "dsd"
    //     }
    // });

    const dummy: any = [
        {
          tennis: 5,
          sprint: 1,
          golf: 3,
          gym: 2
        },
        {
            tennis: 5,
            sprint: 2,
            golf: 4,
            gym: 5
        }
    ];
    return (
        <div>
            <h1>{`${props.userName}'s progress`}</h1>
            <ChartProvider
                height={400}
                data={dummy}
            >
                <XAxis dataKey="sprint" options={{fillStyle: "hachure", fill: "red"}} />
                <YAxis  tickSize={5} tickCount={5}/>
                <BarSeries
                    dataKey="tennis"
                    options={{
                        stroke: "red",
                        strokeWidth: 1,
                        fill: "red"
                    }}
                />
                <BarSeries
                    dataKey="golf"
                    options={{
                        stroke: "blue",
                        strokeWidth: 1,
                        fill: "blue"
                    }}
                />
                <BarSeries
                    dataKey="gym"
                    options={{
                        stroke: "green",
                        strokeWidth: 1,
                        fill: "green"
                    }}
                />
                <Tooltip />
            </ChartProvider>
        </div>
    )
}

export default UserScoreProgress;