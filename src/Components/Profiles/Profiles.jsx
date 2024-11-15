import React from 'react';
import masud from "../../images/profiles/pics/Masud.jpg"
import rumi from "../../images/profiles/pics/rumi.jpg"
import jahin from "../../images/profiles/pics/Arhab Jahin.jpg"
import Faysal from "../../images/profiles/pics/Faysal.jpg"
import Mahfuz from "../../images/profiles/pics/Mahfuz.jpg"
import Nova from "../../images/profiles/pics/Nova.jpg"
import Ayan from "../../images/profiles/pics/Ayan .jpg"
import SURJYA from "../../images/profiles/pics/SURJYA BHOWMICK.jpg"
import himel from "../../images/profiles/pics/Hmu - Panda Vai.jpg"
import privan from "../../images/profiles/pics/Tahmim Ahmed.jpg"
import Shohely from "../../images/profiles/pics/Shohely Islam.jpg"




const profiles = [
  { name: "Privan", img: privan },
  { name: "Masudul Alam", img:masud},
  { name: "Ayan Nandy Nirjon", img: Ayan },
  { name: "T M Shahed Rumi", img: rumi },
  { name: "MD. Faysal Ahmed", img: Faysal },
  { name: "Nova", img: Nova },
  { name: "SM. Asif Arafat Himel", img : himel },
  { name: "Shohely Islam", img: Shohely },
  { name: "Arhab Jahin", img:jahin},
  { name: "Surjya Bhowmick", img: SURJYA },
  { name: "Mahfuzzz", img: Mahfuz },
];

const ProfilePictures = () => {
    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-6">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center transform transition duration-200 hover:scale-105"
            >
              <img
                src={profile.img}
                alt={`Profile ${index + 1}`}
                className="w-24 h-24 rounded-full border-2 border-gray-300"
              />
              <span className="mt-2 text-sm text-center text-white">{profile.name}</span>
            </div>
          ))}
        </div>
      );
};

export default ProfilePictures;
