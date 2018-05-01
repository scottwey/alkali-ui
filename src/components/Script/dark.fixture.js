import Script from "./index";

export default {
  component: Script,
  themed: true,
  props: {
    dark: true,
    data: {
      id: "000007",
      fields: [
        {
          prompt: `Do you have any medical history regarding headaches (i.e., migraines)?`,
          response: "No."
        },
        {
          prompt: `Do you have history of hypertension (high blood pressure)?`,
          response: "Yes."
        },
        {
          prompt: `Do you have diabetes or strong family history of diabetes (parents, siblings, children)?`,
          response: "No."
        },
        {
          prompt: `Have you ever had a cholecystectomy (removal of gallbladder), or any other forms of
gallbladder disease?`,
          response: "No."
        },
        {
          prompt: `Have you been previously diagnosed with acute mononucleosis?`,
          response: "Yes."
        },
        {
          prompt: `Have you been previously diagnosed with sickle cell disease (not sickle cell trait)?`,
          response: "No."
        },
        {
          prompt: `Do you have any history of undiagnosed, abnormal vaginal bleeding?`,
          response: "No."
        },
        {
          prompt: `Do you have problems with following pill instructions (i.e., taking them consistently and on
time)?`,
          response: "Yes."
        }
      ]
    }
  }
};
