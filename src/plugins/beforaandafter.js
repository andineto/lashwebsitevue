class AntesEDepois {
    name;
    imgSrc;
    description;
  
    constructor(name, imgSrc, description) {
      this.name = name;
      this.imgSrc = `/images/${imgSrc}`;
      this.description = description;
    }
  }
  
  const antesEDepois = [
    new AntesEDepois(
      "Volume Brasileiro",
      "VolumeBrasileiroAntesEDepois.png",
      "Proporciona um acabamento mais preenchido. O que garante essa estética é o fio sintético ter um formato de “Y”, que proporciona um visual mais volumoso. Nem exagerado, nem tão discreto, é ideal para quem deseja um meio termo!"
    ),
    new AntesEDepois(
      "Fio a Fio",
      "FioAFioAntesEDepois.png",
      "Essa é a técnica mais clássica. Na extensão de cílios fio a fio, é colocado um fio sintético a cada fio natural da pessoa. O resultado é mais natural e clean, perfeito para quem quer colocar a extensão de cílios e ficar com a aparência de “nasci assim”. Confesso que essa técnica é uma das minhas preferidas!"
    ),
    new AntesEDepois(
      "Volume Egipcio",
      "VolumeEgipcioAntesEDepois.png",
      "Parecido com o volume brasileiro, o volume egípcio é um pouco mais preenchido, mas ainda proporciona sensação de leveza. Enquanto o primeiro tem fios em formato de “Y”, esse tem formato de “W”, o que deixa os cílios mais alongados e preenchidos."
    ),
    // new Produto(
    //   "Volume Artistico",
    //   "VolumeArtistico.png",
    //   "Essa técnica utiliza diversas cores de cílios e faz grande sucesso durante o carnaval ou eventos festivos."
    // )
  ];
  
  export default antesEDepois;