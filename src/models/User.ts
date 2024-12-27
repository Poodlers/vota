import { PartyStats } from "./PartyStats";
import { UserVotes } from "./UserVotes";

export interface User {
  id: number;
  name: string;
  email: string;
  profilePictureId: number;
  partyStats: PartyStats[];
  votes: UserVotes[];
}
