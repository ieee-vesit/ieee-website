import React from "react";
import Card from "../components/Card/Card";
import greshaMam from "../assets/faculty/Gresha ma'am.webp";
import ashwiniMam from "../assets/faculty/Ashwini ma'am.webp";
import Aditi from "../assets/Council2627/Aditi.webp";
import Akash from "../assets/Council2627/Akash.webp";
import Aayan from "../assets/Council2627/Aayan.webp";
import Disha from "../assets/Council2627/Disha.webp";
import Prakruti from "../assets/Council2627/Prakruti.webp";
import Manaswini from "../assets/Council2627/Manaswini.webp";
import Riju from "../assets/Council2627/Riju.webp";
import Gayatri from "../assets/Council2627/Gayatri.webp";
import Vansh from "../assets/Council2627/Vansh.webp";
import Varnika from "../assets/Council2627/Varnika.webp";

// Add email / github / linkedin to a member later and the icons show up on the card
const councilMembers = [
  { name: "Aditi Ekawade", role: "Secretary", image: Aditi },
  { name: "Akash Murthy", role: "Senior Operations Head", image: Akash, email: "murthyakash7081@gmail.com", github: "https://github.com/Leon2396", linkedin: "https://www.linkedin.com/in/akash-murthy-373118306" },
  { name: "Aayan Shaikh", role: "Senior PR Head", image: Aayan, email: "aayanshaikhwork@gmail.com", github: "https://github.com/aayan-bhai" },
  { name: "Disha Dhamecha", role: "Senior Editor", image: Disha },
  { name: "Prakruti Mishra", role: "Treasurer", image: Prakruti, email: "prakrutim06@gmail.com", github: "https://github.com/gitPrakruti", linkedin: "https://www.linkedin.com/in/prakruti-mishra-26ba11312" },
  { name: "Manaswini Joshi", role: "Senior Graphics Head", image: Manaswini, email: "13manaswinijoshi@gmail.com", github: "https://github.com/Manas-wini-code" },
  { name: "Riju Mishra", role: "Senior Graphics Head", image: Riju },
  { name: "Gayatri Bajaj", role: "Senior Tech Head", image: Gayatri },
  { name: "Vansh Lalwani", role: "Senior Tech Head", image: Vansh, email: "d2025.vansh.lalwani@ves.ac.in", github: "https://github.com/VL0650", linkedin: "https://www.linkedin.com/in/vansh-lalwani-9a58a0245" },
  { name: "Varnika Chaurasia", role: "Women in Engineering", image: Varnika },
];

const CurrentCouncil2627 = () => {
  return (
    <div className="mt-24">
      <h2 className="text-center uppercase">Get to know us closer</h2>

      {/* Faculty */}
      <div className="flex flex-wrap justify-center gap-8 my-8">
        <Card
          name="Dr. Gresha Bhatia"
          role="Deputy HOD - Computer"
          image={greshaMam}
          email="gresha.bhatia@ves.ac.in"
        />
        <Card
          name="Dr. Ashwini Sawant"
          role="Assistant Professor - EXTC"
          image={ashwiniMam}
          email="ashwini.sawant@ves.ac.in"
        />
      </div>

      {/* Council Members */}
      <h2 className="text-center uppercase">Council Members</h2>
      <div className="flex flex-wrap justify-center gap-8 my-8">
        {councilMembers.map((member) => (
          <Card
            key={member.name}
            name={member.name}
            role={member.role}
            image={member.image}
            email={member.email}
            github={member.github}
            linkedin={member.linkedin}
          />
        ))}
      </div>
    </div>
  );
};

export default CurrentCouncil2627;
