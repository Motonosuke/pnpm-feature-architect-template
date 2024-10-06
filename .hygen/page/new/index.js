module.exports = {
  prompt({ inquirer }) {
    const questions = [
      {
        type: "input",
        name: "page_name",
        message: "what is the name of the page?",
      },
      {
        type: "input",
        name: "page_component_name",
        message: "what is the name of the page component?",
      },
      {
        type: "confirm",
        name: "is_ssr",
        message: "is this page SSR?",
      },
    ];

    return inquirer.prompt(questions).then((answers) => {
      const { page_name, page_component_name, is_ssr } = answers;

      const convertToUpperCamelCase = (str) => {
        const arr = str.split("-");
        const capital = arr.map((item) => {
          return item.charAt(0).toUpperCase() + item.slice(1);
        });
        const capitalString = capital.join("");
        return capitalString;
      };

      const page_path = `src/pages/${page_name}`;
      const page_component_path = `src/page-components/${page_component_name}`;

      const upper_page_name = convertToUpperCamelCase(page_name);
      const upper_page_component_name =
        convertToUpperCamelCase(page_component_name);
      const upper_page_name_main = `${upper_page_name}Page`;
      return {
        ...answers,
        page_path,
        page_component_path,
        upper_page_name,
        upper_page_component_name,
        upper_page_name_main,
        is_ssr,
      };
    });
  },
};
