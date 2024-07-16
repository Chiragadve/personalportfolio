type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };

  sections: {
    experience: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'Chirag Adve — 3D Portfolio',
    fullName: 'Chirag Adve',
    email: 'johndoe@mail.com',
  },

  sections: {
    experience: {
      p: 'What I have done so far',
      h2: 'Education/Experience.',
    },

    works: {
      p: 'My work',
      h2: 'Projects.',
      content: `Following projects showcases my skills and experience through
    real-world examples of my work. Each project is briefly described with
    links to code repositories and live demos in it. It reflects my
    ability to solve complex problems, work with different technologies,
    and manage projects effectively.`,
    },
  },
};
