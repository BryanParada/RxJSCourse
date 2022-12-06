import { GithubUser } from './gthub-user.interface';

export interface GithubUsersResp {
    total_count:        number;
    incomplete_results: boolean;
    items:              GithubUser[];
}
 
