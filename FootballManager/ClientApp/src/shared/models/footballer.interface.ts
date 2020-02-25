import { ITeam } from './team.interface';

export interface IFootballer {
    id: number;
    name: string;
    surname: string;
    gender: string;
    birthday: Date;
    country: string;
    team: ITeam;
    teamId: number;
}