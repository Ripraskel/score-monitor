import * as React from 'react';
import { Chart } from 'react-google-charts';

import { t_skillScore, t_userScore } from '../Types/UserScore.Types';

interface currentScoreProps {
    data: t_userScore
}

function UserCurrentScore(props: currentScoreProps) {
    const graphData: any[] =[
        [
          'Skill',
          `Score`,
          {
            sourceColumn: 0,
            role: 'annotation',
            type: 'string',
            calc: 'stringify',
          },
        ]
      ];
    
    props.data.results.forEach((skillScore: t_skillScore, index: number) => {
        graphData.push([skillScore.skill, skillScore.score, null])
    })

    
    return (
        <div>
            <h1>{`Sprint ${props.data.sprint.toString()}`}</h1>
            <Chart
                width={'500px'}
                height={'300px'}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={graphData}

                // For tests
                rootProps={{ 'data-testid': '2' }}
            />
        </div>
    )
}

export default UserCurrentScore;