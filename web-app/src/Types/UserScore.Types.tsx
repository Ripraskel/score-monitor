export enum ScoreViewState {
    SCORE_CURRENT = "Current Score",
    SCORE_PROGRESS = "Learning Progress",
    SCORE_EDIT = "Update Score",
}
export interface t_skillScore {
    skill: string,
    score: number
}
export interface t_userScore {
    sprint: string,
    results: t_skillScore[],
    populated: boolean
}