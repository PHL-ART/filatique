"use client";

import { useState, KeyboardEvent } from "react";
import Image from "next/image";
import classes from "./BioSection.module.css";

const bioTexts = {
  ru: `filatique - мульти-инструментальный проект Филата Астахова, чья музыкальная палитра охватывает джазовые мотивы, элементы хип-хопа, а также гармонии мелодичной музыки. Стремясь к сочетанию различных жанров, он создает уникальные звуковые коллажи.

Проект появился в 2014 году с дебютным альбомом "Ни барабанов, ни труб", и был тепло принят как западными, так и восточными музыкальными критиками. В последующих альбомах Филат постарался сконцентрироваться на концептуальной составляющей, не переставая сотрудничать со своими коллегами по цеху: Андреем Дроздовым (choco.bear) и Сергеем Рожиным (100RC).

На протяжении 6 лет с момента создания проекта Филат давал немногочисленные живые выступления в Екатеринбурге. На момент 2024 года у filatique насчитывается четыре студийных альбома: "ни барабанов, ни труб" (2014), "nightroads" (2015), "Nanashi" (2016) и "Autumn Flower" (2020).

В конце 2024 года Филат Астахов сообщил, что работа над следующим альбомом под названием "Dark" находится в стадии завершения, но дата релиза еще неизвестна.
`,
  en: `filatique is a multi-instrumental project by Filat Astakhov, whose musical palette encompasses jazz motifs, elements of hip-hop, and the harmonies of melodic music. Striving to blend different genres, he creates unique sound collages.

The project emerged in 2014 with the debut album "Nor Drums, Nor Trumpets" and was warmly received by both Western and Eastern music critics. In subsequent albums, Filat focused on the conceptual aspect while continuing to collaborate with colleagues in the field: Andrey Drozdov (choco.bear) and Sergey Rozhin (100RC).

For 6 years since the inception of the project, Filat has given limited live performances in Yekaterinburg. By 2024, filatique has released four studio albums: "Nor Drums, Nor Trumpets" (2014), "Nightroads" (2015), "Nanashi" (2016), and "Autumn Flower" (2020).

In late 2024, Filat Astakhov announced that work on the next album titled "Dark" is nearing completion, but the release date is yet to be determined.`,
};

export const BioSection = () => {
  const [language, setLanguage] = useState<"ru" | "en">("ru");

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "ru" ? "en" : "ru"));
  };

  const handleBioKeyDown = (event: KeyboardEvent<HTMLParagraphElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      toggleLanguage();
    }
  };

  return (
    <section id="bio" className={classes.section}>
      <h2 className={classes.sectionTitle}>Bio</h2>
      <div className={classes.bioContent}>
        <div className={classes.portraitWrapper}>
          <Image
            src="/assets/images/releases/molm.jpg"
            alt="Filatique portrait"
            fill
            className={classes.portraitImage}
            sizes="(max-width: 576px) 220px, 280px"
          />
        </div>
        <p
          className={classes.bioText}
          role="button"
          tabIndex={0}
          aria-live="polite"
          onClick={toggleLanguage}
          onKeyDown={handleBioKeyDown}
        >
          {bioTexts[language]}
        </p>
        <span className={classes.bioHint}>
          {language === "ru" ? "Tap to switch to English" : "Tap to switch to Russian"}
        </span>
      </div>
    </section>
  );
};

