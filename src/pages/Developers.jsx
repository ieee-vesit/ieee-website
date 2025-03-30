import React from "react";
import Card from "../components/Card/Card";
import img1 from "../assets/test_img.jpg";
import pratham from "../assets/TEs/pratham.jpg";
import Rakshit from "../assets/TEs/Rakshit.jpg";
import Harsh from "../assets/SECouncil/HarshPatil_.jpg";
import Krish from "../assets/SECouncil/KrishDambir.JPG";
import nafeesa from "../assets/SECouncil/nafeesa.JPG";
import Sudarsana_Krishnan from "../assets/SECouncil/Sudarsana_Krishnan.jpg";
import Arnav from "../assets/TEs/Arnav.jpg";
import Shantanu from "../assets/SECouncil/Shantanu_.jpg";
import Anushka from "../assets/SECouncil/Anushka.JPG";

const Developers = () => {
  return (
    <div className="mt-24">
      <h2 className="text-center uppercase">Minds Behind the Code</h2>
      <div>
            <div className="w-full mx-auto px-4 flex flex-col items-center my-8">
          {/* <h3 className="uppercase my-8">council for AY 23 - 34</h3> */}
          <div className="w-full flex flex-row flex-wrap justify-center items-center gap-8">
            <Card
              name="Pratham Matkar"
              role="Jr. Web Editor"
              image={pratham}
              linkedin="https://www.linkedin.com/in/pratham-matkar-a2bb77257/"
              github="https://github.com/prathamm2506"
              email="d2022.pratham.matkar@ves.ac.in"
            />
            <Card
              name="Rakshit Sharma"
              role="Jr. Web Editor"
              image={Rakshit}
              linkedin="https://www.linkedin.com/in/rakshit-kumar-sharma-5b25942ab/"
              github="https://github.com/Rakshit5467"
              email="2022.rakshit.sharma@ves.ac.in"
            />
            <Card
              name="Arnav Sawant"
              role="Jr. Technical Head"
              image={Arnav}
              linkedin="https://www.linkedin.com/in/arnavsawant9/"
              github="https://github.com/arnavsawant9"
              email="2022.arnav.sawant@ves.ac.in"
            />
            <Card
              name="Krish Dambir"
              role="S.E. Coordinator"
              image={Krish}
              linkedin="https://www.linkedin.com/in/krish-dambir-1701a2289?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              github="https://github.com/krishgit24"
              email="krishdambir2718@gmail.com"
            />
            <Card
              name="Nafeesa Farook Memon"
              role="S.E. Coordinator"
              image={nafeesa}
              linkedin="https://in.linkedin.com/in/nafeesa-memon-15884b284"
              github="https://github.com/nafeesa46"
              email="nafeesa07memon@gmail.com"
            />
            <Card
              name="Harsh Patil "
              role="S.E. Coordinator"
              image={Harsh}
              linkedin="https://www.linkedin.com/in/harsh-patil-8b001630b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              github="https://github.com/HarshP295"
              email="harsh.patilin2005@gmail.com"
            />
            <Card
              name="Sudarsana Krishnan"
              role="S.E. Coordinator"
              image={Sudarsana_Krishnan}
              linkedin="https://www.linkedin.com/in/sudarsana-krishnan-4773a9346/overlay/about-this-profile/?lipi=urn:li:page:d_flagship3_profile_view_base;t6u9l7BlR8%20YZ6yiYW6suw=="
              github="https://github.com/SudarsanaKrishnan"
              email="2023.krishnan.sudarsana@ves.ac.in"
            />
            <Card
              name="Shantanu Pawar "
              role="S.E. Coordinator"
              image={Shantanu}
              linkedin="https://www.linkedin.com/in/shantanu-pawar-4b05a5316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              github="https://github.com/Shantanupawar29"
              email="shantanupawar2005@gmail.com"
            />
            <Card
              name="Anushka Sharma  "
              role="S.E. Coordinator"
              image={Anushka}
              linkedin="https://www.linkedin.com/in/anushka-sharma-0543832a1?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              github="https://github.com/Anu-shhkaa"
              email="anushka.5aas@gmail.com"
            />
            </div>
            </div>
          </div>
        </div>
  );
};

export default Developers;
