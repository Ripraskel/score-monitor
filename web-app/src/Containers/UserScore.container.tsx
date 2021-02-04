import react, {useState} from 'react';
import { JsxElement } from 'typescript';
import UserCurrentScore from '../Components/UserCurrentScore.component';
import UserScoreProgress from '../Components/UserScoreProgress.component';
import { ScoreContainerState, t_userScore,  } from '../Types/UserScore.Types';



const dummyScore: t_userScore[] = [
    {
        sprint: 0,
        scores: [
        {skill: "tennis", score: 1},
        {skill: "golf", score: 2}
        ],
        populated: true
    },
    {
        sprint: 1,
        scores: [
            {skill: "tennis", score: 2},
            {skill: "golf", score: 3}
        ],
        populated: true
    },
    // {
    //     sprint: 2,
    //     scores: [],
    //     populated: false
    // }
]
const data = [
    {skill: "tennis", value1: 2}
]
function UserScore()  {
    const {SCORE_CURRENT, SCORE_PROGRESS, SCORE_EDIT} = ScoreContainerState;
    const [containerState, setContainerState] = useState<ScoreContainerState>(SCORE_PROGRESS);
    const [userScoreHistory, setUserScoreHistory] = useState<t_userScore[]>([]);

    const getCurrentScore = () => {
        return userScoreHistory[userScoreHistory.length - 1]
    }

    const getView = () :JSX.Element => {
        switch(containerState) {
            case SCORE_CURRENT:
                console.log({dummyScore});
                return <UserCurrentScore data={dummyScore[1]}/>
            case SCORE_PROGRESS:
                return <UserScoreProgress data={dummyScore} userName="John"/>
            case SCORE_EDIT:
                return <div></div>
            default:
                return <UserCurrentScore data={dummyScore[1]}/>
        };
    }

    return (
        <div>
            {getView()}
        </div>
    )
}

export default UserScore;