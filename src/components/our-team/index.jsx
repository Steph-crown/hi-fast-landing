import { OurTeamContainer } from "./style";
import Image1 from "./../../assets/images/image1.png";
import Image2 from "./../../assets/images/image2.png";
import Image3 from "./../../assets/images/image3.png";

export const OurTeam = () => {
    const team = [
        {
            name: "Omotayo Blessing",
            image: Image1,
            role: "Company Partner",
        },
        { name: "Kwatme Indglo", image: Image1, role: "Company Partner" },
        { name: "Oluwatobi Fobs", image: Image2, role: "Company Partner" },
        { name: "Kwatme Indglo", image: Image3, role: "Company Partner" },
        { name: "Omotayo Blessing", image: Image1, role: "Company Partner" },
        { name: "Oluwatobi Fobs", image: Image3, role: "Company Partner" },
        { name: "Omotayo Blessing", image: Image1, role: "Company Partner" },
        { name: "Oluwatobi Fobs", image: Image2, role: "Company Partner" },
    ];
    return (
        <OurTeamContainer>
            <h3>Our Team</h3>
            <p>Filter the best deals and proceed to checkout with confidence</p>
            <div className="team-images">
                {team.map((member, index) => (
                    <div className="member" key={"hdhdh" + index}>
                        <img src={member.image} alt={member.name} />
                        <h5>{member.name}</h5>
                        <small>{member.role}</small>
                    </div>
                ))}
            </div>
        </OurTeamContainer>
    );
};
