export interface Reward {
  id: string;
  title: string;
  pledgeAmount: number;
  description: string;
  left: number;
  minPledge: number;
}

export interface ProjectStats {
  totalBacked: number;
  totalBackers: number;
  daysLeft: number;
  goal: number;
}

