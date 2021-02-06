import * as React from 'react'
import { Chart } from 'react-google-charts';

import { t_skillScore, t_userScore } from '../Types/UserScore.Types';

interface currentScoreProps {
    data: t_userScore[]
    userName: string
}

function UserScoreProgress(props: currentScoreProps) {
    const graphData: any[] =[
        [
          'Sprints',
        ]
      ];
    
    props.data.forEach((userScore: t_userScore, index: number) => {
        if (userScore.populated) {
            graphData.push([`Sprint ${userScore.sprint}`])
            userScore.results.forEach((skillScore: t_skillScore) => {
                if (index === 0) { 
                    graphData[0].push(skillScore.skill);
                };
                graphData[index+1].push(skillScore.score)
            });
        }
    });

    return (
        <div>
            <h1>{`${props.userName}'s progress`}</h1>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="Line"
                loader={<div>Loading Chart</div>}
                data={graphData}

                // For tests
                rootProps={{ 'data-testid': '2' }}
            />
        </div>
    )
}

export default UserScoreProgress;