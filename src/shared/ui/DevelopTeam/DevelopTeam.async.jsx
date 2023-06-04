import dynamic from "next/dynamic";

export const DevelopTeamAsync = dynamic(() => import("./DevelopTeam"));
