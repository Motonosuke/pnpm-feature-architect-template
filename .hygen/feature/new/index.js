module.exports = {
  prompt({ inquirer }) {
    const questions = [
      {
        type: "input",
        name: "feature_name",
        message: "what is the name of the feature?",
      },
      {
        type: "input",
        name: "component_name",
        message: "",
      },
      {
        type: "confirm",
        name: "have_api",
        message: "does the feature have api?",
      },
      {
        type: "select",
        name: "api_category",
        message: "which is the rest api of the feature?",
        choices: ["get", "post", "put", "patch", "delete"],
      },
      // {
      //   type: 'confirm',
      //   name: 'have_test',
      //   message: '',
      // },
      // {
      //   type: 'confirm',
      //   name: 'have_storybook',
      //   message: '',
      // },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { feature_name, component_name } = answers;
      const convertToUpperCamelCase = (str) => {
        const arr = str.split("-");
        const capital = arr.map((item) => {
          return item.charAt(0).toUpperCase() + item.slice(1);
        });
        const capitalString = capital.join("");
        return capitalString;
      };
      const api_path = `src/features/${feature_name}/apis`;
      const component_path = `src/features/${feature_name}/components`;
      const hooks_path = `src/features/${feature_name}/hooks`;
      const export_path = `src/features/${feature_name}`;

      const upper_component_name = convertToUpperCamelCase(component_name);

      return {
        ...answers,
        api_path,
        component_path,
        hooks_path,
        export_path,
        upper_component_name,
      };
    });
  },
};
