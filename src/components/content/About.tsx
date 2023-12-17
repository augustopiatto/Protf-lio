import React from "react";
import ExpandableCard from "../cards/ExpandableCard";
import Picture from "../cards/Picture";
import Ornament1 from "/svg/ornament-1.svg";
import Dialog from "../UIComponents/Dialog";
import FullDivider from "../dividers/FullDivider";

function About() {
  const [openedDialog, setOpenedDialog] = React.useState(false);

  const place = "São José dos Campos";

  function openDialog() {
    setOpenedDialog(true);
  }

  return (
    <div className="flex justify-between mt-14">
      <ExpandableCard
        borderRadius={"rounded-card"}
        maxWidth={"max-w-screen-sm"}
        place={place}
        openDialog={openDialog}
      >
        <div className="flex">
          <h1 className="font-bebas text-4xl capitalize leading-tight">
            Olá! Bem-vindo(a) <br />
            Sou <span className="text-highlight">Augusto</span>, desenvolvedor
            web full stack
          </h1>
          <img src={Ornament1} alt="ornament1" className="h-14 w-24 mt-3" />
        </div>
        <p className="font-chivo text-paragraph text-base my-6">
          Tenho 2 anos de experiência como full stack e venho aprimorando minhas
          habilidades de front end. Em meus projetos, meu principal foco é a
          experiência do usuário e sua interação com o sistema.
        </p>
      </ExpandableCard>
      <Picture />
      <Dialog openedDialog={openedDialog} setOpenedDialog={setOpenedDialog}>
        <div>
          <h1 className="font-bebas text-4xl uppercase leading-tight">
            Sobre o Augusto
          </h1>
          <FullDivider />
        </div>
        <section className="flex flex-col gap-3 mt-7 [&>p]:font-chivo [&>p]:text-lg">
          <p>
            Sou Augusto, tenho 28 anos, sempre gostei de exatas e por esse
            motivo decidi seguir para essa área durante meus estudos. Durante
            ensino médio fiz curso técnico em manutenção automotiva na ETEC e a
            partir disso decidi ingressar em engenharia para a faculdade. Me
            formei em Engenharia de Materiais em 2018 e durante a graduação fiz
            um intercâmbio de 1 ano nos Estados Unidos através do programa
            Ciência sem Fronteiras.
          </p>
          <p>
            Durante estágio da faculdade trabalhei em engenharia por 1 ano, em
            uma aciaria. Meu dia a dia era coletar dados da operação e realizar
            análises e melhorias do processo em cima desses dados. Tive bastante
            contato com Excel, principalmente macros e VBA.
          </p>
          <p>
            Após o estágio passei a estudar Python, com intenção de atuar na
            área de Business Intelligence, mas acabei encontrando a oportunidade
            de prestar um concurso para o bootcamp da Buser Brasil em 2020. Eu
            fui um dos 15 selecionados e passei 3 meses aprendendo a ser um
            desenvolvedor. Em abril de 2021 entrei oficialmente como
            desenvolvedor júnior no time de backoffice da empresa. Desde então
            trabalhei por 2 anos como desenvolvedor fullstack na empresa, e saí
            em abril de 2023.
          </p>
          <FullDivider />
          <h2 className="font-bebas text-3xl uppercase mt-3">Lazer</h2>
          <p>
            Quando fiz estágio precisei mudar de cidade, e acabei gostando
            bastante de onde fiquei, São José dos Campos. Moro aqui até hoje. A
            cidade é tranquila, arborizada, perto de São Paulo e perto da praia,
            muito bem localizada. Aqui fiz grandes amizades e pretendo continuar
            morando aqui por mais alguns anos.
          </p>
          <p>
            Sou uma pessoa que gosta bastante de se movimentar, e isso explica a
            razão dos meus hobbies favoritos serem jogar vôlei e viajar, eu
            também sempre tive contato com a natureza e gosto disso. Em casa
            tenho algumas plantas que cuido, entre elas, algumas que uso de
            tempero para cozinhar, que é outra paixão que tenho.
          </p>
        </section>
      </Dialog>
    </div>
  );
}

export default About;
