enum VoteOrientation {
  InFavor,
  Against,
  Abstaining,
  NotInterested,
}

export interface UserVotes {
  proposalId: number;
  voteOrientation: VoteOrientation;
  voteDate: Date;
}
