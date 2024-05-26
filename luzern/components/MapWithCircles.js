"use client";

import { Circle, Image, Layer, Stage } from "react-konva";
import useImage from "use-image";
import { useState } from "react";
import Link from "next/link";
import { getData } from "@/lib/constants";
import PopupInfo from "./PopupInfo";
import DateCard from "./DateCard";
import { useDate } from "@/hooks/useDate";
import LoadingPage from "./loading";

const MapImage = () => {
  const [image] = useImage("/map.png");
  return <Image image={image} alt="map image" width={1047} height={728} />;
};

const DocLink = ({ href, text }) => (
  <Link
    href={href}
    className="underline cursor-pointer"
    target="_blank"
    rel="noopener noreferrer"
  >
    {text}
  </Link>
);
export const infos = [
  {
    image: "place_4",
    title: "Löwendenkmal",
    center: { x: 950, y: 115 },
    description: (
      <>
        Das Löwendenkmal befindet sich im Zentrum{" "}
        <DocLink href="https://de.wikipedia.org/wiki/Luzern" text="Luzerns" />{" "}
        und erinnert in der{" "}
        <DocLink
          href="https://de.wikipedia.org/wiki/Allegorie"
          text="Allegorie"
        />{" "}
        eines sterbenden Löwen an die am 10. August 1792 beim{" "}
        <DocLink
          href="https://de.wikipedia.org/wiki/Tuileriensturm"
          text="Tuileriensturm"
        />{" "}
        in <DocLink href="https://de.wikipedia.org/wiki/Paris" text="Paris" />{" "}
        gefallenen{" "}
        <DocLink
          href="https://de.wikipedia.org/wiki/Gardes_suisses_(Frankreich)"
          text="Schweizergardisten"
        />{" "}
        . Es entstand auf Initiative des Gardeoffiziers{" "}
        <DocLink
          href="https://de.wikipedia.org/wiki/Karl_Pfyffer_von_Altishofen"
          text="Karl Pfyffer von Altishofen"
        />{" "}
        , zur Erinnerung an seine Kameraden. Der dänische Bildhauer{" "}
        <DocLink
          href="https://de.wikipedia.org/wiki/Bertel_Thorvaldsen"
          text="Bertel Thorvaldsen"
        />{" "}
        fertigte einen Entwurf an, aber das Denkmal wurde von dem{" "}
        <DocLink
          href="https://de.wikipedia.org/wiki/Konstanz"
          text="Konstanzer"
        />{" "}
        Bildhauer{" "}
        <DocLink
          href="https://de.wikipedia.org/w/index.php?title=Lukas_Ahorn&action=edit&redlink=1"
          text="Lukas Ahorn"
        />{" "}
        vom März 1820 bis zum 7. August 1821 in den Sandsteinfelsen gehauen.
      </>
    ),
  },
  {
    image: "place_3",
    title: "Hertensteinstrasse",
    center: { x: 530, y: 170 },
    description: (
      <>DIe beliebte Einkaufsstrasse in Luzern... Lorem ipsum dratatata...</>
    ),
  },
  {
    image: "place_2",
    title: "Schwanenplatz Schweizerhofquai",
    center: { x: 650, y: 270 },
    description: (
      <>
        Der Schweizerhofquai in{" "}
        <DocLink href="https://de.wikipedia.org/wiki/Luzern" text="Luzern" />{" "}
        ist der Quaiabschnitt zwischen dem Schwanenplatz und dem Kurplatz in der
        Stadt Luzern. Er liegt auf der rechten Uferseite des{" "}
        <DocLink
          href="https://de.wikipedia.org/wiki/Vierwaldst%C3%A4ttersee"
          text="Vierwaldstättersees"
        />{" "}
        .
      </>
    ),
  },
  {
    image: "place_5",
    title: "Rathaus",
    center: { x: 400, y: 300 },
    description: (
      <>
        Das Rathaus wurde von dem Architekten Isenmann mit Gehilfen aus {" "}
        <DocLink
          href="https://de.wikipedia.org/wiki/Oberitalien"
          text="Oberitalien"
        />{" "}
        <DocLink href="" text="Vierwaldstättersees" /> gebaut. Diese
        Zusammenarbeit könnte erklären, wieso die Gebäudefront an einen
        mailändischen{" "}
        <DocLink
          href="https://de.wikipedia.org/wiki/Schloss_(Architektur)#Renaissance"
          text="Palazzo"
        />{" "}
        , die Dachform jedoch an ein Luzerner {" "}
        <DocLink
          href="https://de.wikipedia.org/wiki/Bauernhaus"
          text="Bauernhaus"
        />{" "}
        erinnert. Heute hält der{" "}
        <DocLink
          href="https://de.wikipedia.org/wiki/Luzern#Grosser_Stadtrat_(Legislative)"
          text="Grosse Stadtrat"
        />{" "}
        hier seine Sitzungen ab. Bemerkenswert sind der Portraitsaal (wo unter
        anderem Ziviltrauungen abgehalten werden), der Rathausturm mit roter
        Turmlaterne und Turmuhr (er diente als Wacht- und Beobachtungsturm), die
        Rathaustreppe mit dem zur Reuss weisenden «Leist» italienischer Bauweise
        sowie die Arkaden und gepflästerten Durchgänge.
      </>
    ),
  },
  {
    image: "place_1",
    title: "Kapellbrücke",
    center: { x: 420, y: 420 },
    description: (
      <>
        Die Kapellbrücke ist die älteste und mit 202,90 Metern (inklusive
        Vordächer 204,70 Metern) die zweitlängste überdachte{" "}
        <DocLink
          href="https://de.wikipedia.org/wiki/Holzbr%C3%BCcke"
          text="Holzbrücke"
        />{" "}
        <DocLink href="https://de.wikipedia.org/wiki/Europa" text="Europas" /> ,
        nach der{" "}
        <DocLink
          href="https://de.wikipedia.org/wiki/Holzbr%C3%BCcke_Bad_S%C3%A4ckingen"
          text="Holzbrücke Bad Säckingen-Stein AG"
        />{" "}
        (203,70 Meter, inklusive Vordächer 206,50 Meter). Sie wurde um 1365 als{" "}
        <DocLink
          href="https://de.wikipedia.org/wiki/Wehrgang"
          text="Wehrgang"
        />{" "}
        gebaut und verbindet die durch die Reuss getrennte Alt- und Neustadt
        (mindere Stadt). Ursprünglich war die Brücke länger; durch die
        Auffüllung des{" "}
        <DocLink href="https://de.wikipedia.org/wiki/Ufer" text="Ufers" /> wurde
        ein etwa 75 Meter langes Stück um 1835 abgebrochen. Im{" "}
        <DocLink href="https://de.wikipedia.org/wiki/Giebel" text="Giebel" />
        der Brücke befanden sich (vor dem Brand 1993) 111 dreieckige Gemälde,
        die wichtige Szenen der{" "}
        <DocLink
          href="https://de.wikipedia.org/wiki/Geschichte_der_Schweiz"
          text="Schweizer Geschichte"
        />{" "}
        darstellen.
      </>
    ),
  },
];
const MapWithCirclesKonva = () => {
  const [popupInfoIndex, setPopupInfoIndex] = useState(undefined);
  const { date, time, data, isLoading } = useDate();
  if (isLoading) return <LoadingPage date={date} time={time} />;
  let { infosArray } = { infosArray: infos };
  if (data?.[0]?.length) {
    ({ infosArray } = getData(data?.[0] ?? []));
  }
  console.log("dataToShow ==>", {
    infosArray: infosArray.map((info) => ({
      title: info.title,
      raduis: info.center.radius,
      average: info.average,
    })),
  });
  return (
    <>
      <div className="w-full h-full flex-1 overflow-auto flex items-center justify-center">
        <Stage width={1047} height={728}>
          <Layer draggable>
            <MapImage />
            {infosArray.map((info, index) => (
              <Circle
                key={info.title}
                {...info.center}
                fill={popupInfoIndex === index ? "#FF000090" : "#FF717160"}
                onClick={() => {
                  setPopupInfoIndex(index);
                }}
                onMouseOver={() => (document.body.style.cursor = "pointer")}
                onMouseOut={() => (document.body.style.cursor = "default")}
                preventDefault={false}
              />
            ))}
          </Layer>
        </Stage>
      </div>
      <DateCard date={date} time={time} />
      {popupInfoIndex !== undefined && (
        <PopupInfo
          {...infosArray[popupInfoIndex]}
          setIsOpen={setPopupInfoIndex}
          itemsLength={infosArray.length}
        />
      )}
    </>
  );
};

export default MapWithCirclesKonva;
