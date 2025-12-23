import React from "react";
import img from "../assets/img1.jpg";
import { useTranslation } from "../contexts/useTranslation";

const OurTenants = () => {

  const {t} = useTranslation();

  return (
    <div className="flex h-[65vh]">
      <div className="w-1/2">
        <img src={img} className="w-full h-full object-cover" alt="" />
      </div>

      <div className="w-1/2 h-full bg-primary-dark py-16 px-12">
        <h1 className="text-white text-4xl">{t("Who are our tenants?***Qui sont nos locataires ?")}</h1>

        <p className="text-gray-300 mt-5 text-lg">
          {t("Our accommodations are intended for professionals on assignment—employees, executives, or contractors—who are looking for temporary housing for a few days or several weeks.***Nos hébergements s’adressent aux professionnels en mission : salariés, cadres ou prestataires, à la recherche d’un logement temporaire, quelques jours ou plusieurs semaines.")}
        </p>

        <p className="text-gray-300 mt-5 text-lg">
          {t("We also offer housing for those who are settling permanently in the region and need a temporary solution, for example during a trial period or while waiting for their future home. Comfortable, practical, and fully equipped, each accommodation is designed to offer a worry-free stay.***Nous proposons également des logements pour ceux qui s’installent durablement dans la région et ont besoin d’une solution temporaire, par exemple pendant une période d’essai ou en attendant leur futur logement. Confortable, pratique et entièrement équipé, chaque logement est pensé pour leur offrir un séjour sans souci.")}
        </p>
      </div>
    </div>
  );
};

export default OurTenants;
