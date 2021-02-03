import react, {useState} from 'react';
import UserCurrentScore from '../Components/UserCurrentScore.component';

enum ScoreContainerState {
    SCORE_CURRENT = 1,
    SCORE_PROGRESS = 2,
    SCORE_EDIT = 3,
}

type userScore = {
    sprint: number,
    score: [string, number][]
}

type userScoreHistory = userScore[];

const dummyScore: userScoreHistory = [
    {
        sprint: 0,
        score: [
            ["tennis", 1],
            ["golf", 2]
        ]
    },
    {
        sprint: 1,
        score: [
            ["tennis", 2],
            ["golf", 3]
        ]
    }
]

function UserScore()  {
    const {SCORE_CURRENT, SCORE_PROGRESS, SCORE_EDIT} = ScoreContainerState;
    const [containerState, setContainerState] = useState<ScoreContainerState>(SCORE_CURRENT);
    const [userScoreHistory, setUserScoreHistory] = useState<userScoreHistory>([]);

    const getCurrentScore = () => {
        return userScoreHistory[userScoreHistory.length - 1]
    }

    const getView = () => {
        switch(containerState) {
            case SCORE_CURRENT:
                return <UserCurrentScore />
            case SCORE_PROGRESS:
                return <div></div>
            case SCORE_EDIT:
                return <div></div>
            default:
                return <UserCurrentScore/>
        };
    }

    return (
        <div>
            {getView()}
        </div>
    )
}

export default UserScore;