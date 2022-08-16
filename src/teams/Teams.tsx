import React from "react";

interface TeamCardProps {
    children: React.ReactNode;
};

const TeamCard = (props: TeamCardProps) => {
    return (
        <li className="bg-dark-surface-variant rounded h-full text-white p-8 m-8">
            {props.children}
        </li>
    );
};

const Teams = () => {
    return (
        <div className="bg-dark-surface">
            <div className="table my-0 mx-auto">
                <ul className="flex flex-col md:flex-row m-8 bg-dark-surface pb-4">
                    <TeamCard>
                        <span>Git Gud</span>
                    </TeamCard>
                    <TeamCard>
                        <span>Team O(n)</span>
                    </TeamCard>
                    <TeamCard>
                        <span>Dream Team</span>
                    </TeamCard>
                    <TeamCard>
                        <span>Runtime Terror</span>
                    </TeamCard>
                    <TeamCard>
                        <span>Team Tux</span>
                    </TeamCard>
                </ul>
            </div>
        </div>
    );
};

export default Teams;
