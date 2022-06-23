import React from 'react';
import { Box, Container, Grid } from 'theme-ui';
import BlockTitle from 'components/block-title';
import ServiceCard from 'components/cards/service-card';
import serviceImage1 from 'assets/service-1.png';
import serviceImage2 from 'assets/service-2.png';
import serviceImage3 from 'assets/service-3.png';
import serviceImage4 from 'assets/service-4.png';
import serviceImage5 from 'assets/service-5.png';
import serviceImage6 from 'assets/service-6.png';

const SERVICES_DATA = [
  {
    image: serviceImage1,
    text:
      'Este recurso fornece uma colecção de recursos mais específicos para auxiliar no desenvolvimento do currículo, agrupamento de cursos e turmas.',
    heading: 'Gestão de programas',
    path: '#',
  },
  {
    image: serviceImage2,
    text:
      'Este é um recurso central que mantém um controle de cada aluno no Centro de Formação - IFPELAC.',
    heading: 'Gestão do Formando',
    path: '#',
  },
  {
    image: serviceImage3,
    text:
      'Modelagem dos dados com o objectivo de apoiar a tomada de decisões.',
    heading: 'Análise Acadêmica',
    path: '#',
  },
  {
    image: serviceImage4,
    text:
      'Criar e gerenciar os usuários com permissões de acesso ao sistema.',
    heading: 'Gestão de Usuários',
    path: '#',
  },
  {
    image: serviceImage5,
    text:
      'Gestão das mensalidades e inscrições.',
    heading: 'Contabilidade Escolar',
    path: '#',
  },
  {
    image: serviceImage6,
    text:
      'As pessoas com diferentes tipos de deficiência podem trabalhar com o sistema.',
    heading: 'Acessibilidade verificada',
    path: '#',
  },
];
const Services = () => {
  return (
    <Box as="section" id="services" sx={styles.services}>
      <Container>
        <BlockTitle
          title="Quais as características do Sistema"
          text="Os recursos são destacados aqui"
        />
        <Grid sx={styles.grid}>
          {SERVICES_DATA.map(({ image, text, heading, path }, index) => (
            <ServiceCard
              image={image}
              text={text}
              heading={heading}
              path={path}
              key={index}
            />
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Services;

const styles = {
  services: {
    pt: ['80px', null, null, null, '80px', null, '100px'],
  },
  grid: {
    gridGap: '30px',
    gridTemplateColumns: ['1fr', null, null, '1fr 1fr', null, '1fr 1fr 1fr'],
  },
};
