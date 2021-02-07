import react, {useEffect, useState} from 'react';
import UserCurrentScore from '../Components/UserCurrentScore.component';
import UserScoreProgress from '../Components/UserScoreProgress.component';
import { ScoreViewState, t_userScore,  } from '../Types/UserScore.Types';


const dummyScore: t_userScore[] = [
    {
        sprint: '0',
        results: [
        {skill: "tennis", score: 1},
        {skill: "golf", score: 2},
        {skill: "dance", score: 0}
        ],
        populated: true
    },
    {
        sprint: '1',
        results: [
            {skill: "tennis", score: 2},
            {skill: "golf", score: 3},
            {skill: "dance", score: 0}
        ],
        populated: true
    },
    {
        sprint: '2',
        results: [
            {skill: "tennis", score: 3},
            {skill: "golf", score: 4},
            {skill: "dance", score: 2}
        ],
        populated: true
    },
    {
        sprint: '3',
        results: [
            {skill: "tennis", score: 0},
            {skill: "golf", score: 0},
            {skill: "dance", score: 0}
        ],
        populated: false
    }
]


const UserScore: React.FC = () => {
    const {SCORE_CURRENT, SCORE_PROGRESS, SCORE_EDIT} = ScoreViewState;
    const [viewState, setViewState] = useState<ScoreViewState>(SCORE_CURRENT);
    const [userScoreHistory, setUserScoreHistory] = useState<t_userScore[]>([{
        sprint: '',
        results: [],
        populated: false
    }]);

    useEffect(() => {
        setUserScoreHistory(dummyScore);
    }, [])

    const getCurrentScore = () => {
        let x: number = userScoreHistory.length - 1;
        while(x > 0) {
            if (userScoreHistory[x].populated) {
                break;
            }
            x--;
        }
        return userScoreHistory[x]
    }

    const getView = () :JSX.Element => {
        switch(viewState) {
            case SCORE_CURRENT:
                return <UserCurrentScore data={getCurrentScore()}/>
            case SCORE_PROGRESS:
                return <UserScoreProgress data={userScoreHistory} userName="John"/>
            case SCORE_EDIT:
                return <div></div>
            default:
                return <UserCurrentScore data={dummyScore[1]}/>
        };
    }

    const updateView = (e: react.ChangeEvent<HTMLSelectElement>) => {
        switch(e.target.value) {
            case SCORE_CURRENT:
                setViewState(SCORE_CURRENT);
                break;
            case SCORE_PROGRESS:
                setViewState(SCORE_PROGRESS);
                break;
            case SCORE_EDIT:
                setViewState(SCORE_EDIT);
                break;
            default:
                setViewState(SCORE_CURRENT);
                break;
        };
        
    }
    
    return (
        <div>
            <nav>
                <h2>Select View</h2>
                <select onChange={(e) => updateView(e)}>
                    <option>{SCORE_CURRENT}</option>
                    <option>{SCORE_PROGRESS}</option>
                    <option>{SCORE_EDIT}</option>
                </select>
            </nav>
            {getView()}
        </div>
    )
}

export default UserScore;