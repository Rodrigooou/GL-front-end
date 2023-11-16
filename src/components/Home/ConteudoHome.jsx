import React from "react";
import { useNavigate } from "react-router-dom";
import "./ConteudoHome.scss";
import Logout from "../../assets/logout2.png";
import prototipo from "../../assets/prototipo de tela.png";

export default function Conteudo() {
  const navigate = useNavigate();

  const storedUser = sessionStorage.getItem("user");
  const storedName = storedUser ? JSON.parse(storedUser).name : "";

  const handleLogout = () => {
    
    sessionStorage.removeItem("user");

    navigate("/");
  };

  return (
    <>
      <div className="titulo2">
        <h2>Bem Vindo, {storedName}!</h2>
        <button type="button" onClick={handleLogout}>
          <img src={Logout} alt="logout" className="btn" />
        </button>
      </div>
      <div class="container">
        <div class="item"><h2 >Health-me</h2><p>  Nós Helth-me apresentamos, uma inovadora solução dedicada a orientar os usuários na busca por uma alimentação mais saudável, considerando objetivos específicos. Nosso aplicativo vai além das recomendações tradicionais, oferecendo opções personalizadas e práticas para diversas necessidades, seja ganho de massa muscular, perda de gordura ou manutenção da saúde.</p></div>
        <div class="item"><img src={prototipo} alt="prototipo de tela" /></div>
        <div class="item"><h2 >Introdução</h2><p>   Diante da dificuldade que muitos brasileiros enfrentam ao tentar aprimorar seus hábitos alimentares, propomos o desenvolvimento de um aplicativo inovador dedicado a orientar os usuários na busca por uma alimentação mais saudável, adaptada a seus objetivos específicos. O aplicativo oferecerá opções personalizadas para diferentes metas, como ganho de massa muscular, perda de gordura corporal ou manutenção da saúde, indo além de simples recomendações ao incluir sugestões práticas e deliciosas de refeições, acompanhadas de dicas de preparo. Destaca-se a capacidade de personalização, considerando preferências alimentares e situação financeira individual, com foco em oferecer alternativas acessíveis. Ao abordar não apenas o aspecto nutricional, mas também a viabilidade prática e econômica, o aplicativo busca tornar a adoção de hábitos alimentares saudáveis mais viável e sustentável para um público amplo, contribuindo assim para a promoção da saúde e bem-estar.</p></div>
        <div class="item"><h2 >Problematica</h2><p>   As doenças cardiovasculares representam a principal causa de mortalidade global, exercendo um impacto significativo na saúde pública. A alimentação inadequada, caracterizada pelo consumo excessivo de gorduras saturadas e trans presentes em alimentos processados e fast food, desempenha um papel crucial nesse cenário. Essas escolhas alimentares elevam os níveis de colesterol, propiciando a formação de placas nas artérias e aumentando o risco de eventos cardíacos e acidentes vasculares cerebrais. A promoção de hábitos alimentares saudáveis, enfatizando uma dieta equilibrada com frutas, vegetais, grãos integrais e gorduras saudáveis, é fundamental na prevenção dessas doenças. Ao conscientizar as pessoas sobre a importância dessas escolhas, é possível não apenas reduzir os fatores de risco associados, mas também adotar uma abordagem proativa para promover a saúde cardiovascular e melhorar a qualidade de vida. Além disso, dados da Pesquisa Vigitel revelam uma crescente preocupação com o excesso de peso, afetando atualmente 55,7% dos brasileiros, com um aumento de 30,8% desde 2006, sendo mais prevalente entre os jovens de 18 a 24 anos.</p></div>
        <div class="item"><h2 >Prototipo de tela</h2><p>    Para elaborar uma dieta equilibrada, é essencial coletar informações específicas do usuário, tais como peso, idade, gênero e frequência na prática de exercícios. Com base nos dados obtidos, realizaremos o cálculo do Índice de Massa Corporal (IMC) e analisaremos se o indivíduo encontra-se saudável, abaixo ou acima do peso. Em seguida, determinaremos as calorias necessárias para alcançar ou manter o peso ideal.</p></div>
        <div class="item"><h2 >Produto</h2><p>    O aplicativo proporciona uma experiência personalizada desde o cadastro inicial, solicitando informações detalhadas, incluindo altura, peso, idade, gênero biológico e objetivos de saúde. A utilização da bioimpedância permite calcular o gasto calórico individualizado, formando uma base sólida para a criação de uma dieta personalizada. Com uma extensa biblioteca de alimentos e dados nutricionais, o aplicativo recomenda uma dieta balanceada, considerando a quantidade necessária de macronutrientes e calorias para atender aos objetivos do usuário, bem como orientações sobre o timing de consumo de nutrientes. A flexibilidade do sistema permite que os usuários indiquem preferências, restrições e exceções, tornando o plano alimentar mais adaptado a gostos individuais e sustentável a longo prazo. A integração com dispositivos como smartwatches permite o monitoramento contínuo do gasto calórico durante as atividades físicas e ao longo do dia. Além disso, o aplicativo oferece recomendações personalizadas em condições climáticas específicas, contribuindo para a saúde geral do usuário. Utilizando as informações do cadastro, o aplicativo realiza análises regionais e compartilha recomendações fundamentadas em avaliações de outros usuários, apresentando uma variedade de produtos e propondo alternativas similares. Como parte de uma abordagem abrangente, serão estabelecidas parcerias estratégicas com empresas de entrega para otimizar a eficiência no processo de compras.</p></div>
        <div class="item"><h2 >Objetivos</h2><p>    Nosso principal objetivo é desenvolver um aplicativo funcional, intuitivo e personalizado, voltado para capacitar os usuários na adoção de hábitos alimentares saudáveis. Além de reduzir significativamente os riscos de doenças cardiovasculares, almejamos criar uma plataforma que estimule uma melhoria sustentável na qualidade de vida. Através de recursos interativos e adaptáveis, buscamos não apenas fornecer orientações nutricionais personalizadas, mas também promover uma educação alimentar abrangente, capacitando os usuários a fazerem escolhas informadas para melhorar sua saúde. Acreditamos que ao alcançar esses objetivos, nosso aplicativo se tornará uma ferramenta indispensável para a promoção de hábitos alimentares saudáveis, contribuindo não apenas para a prevenção de doenças cardiovasculares, mas também para uma mudança positiva e duradoura nos padrões alimentares, resultando em uma população mais saudável e consciente.</p></div>
      </div>     
    </>
  );
}
