import { PoliticalParty } from "./PoliticalParty";

export interface PartyStats {
  politicalParty: PoliticalParty;
  partyAffectionScore: number;
  totalAmountOfProposalsVoted: number;
  totalAffectionPoints: number;
}
