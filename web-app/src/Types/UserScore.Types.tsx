export enum ScoreContainerState {
    SCORE_CURRENT = 1,
    SCORE_PROGRESS = 2,
    SCORE_EDIT = 3,
}
export interface t_skillScore  {
    skill: string,
    score: number
}
export interface t_userScore {
    sprint: number,
    scores: t_skillScore[],
    populated: boolean
}