import {
  FiDatabase,
  FiRefreshCcw,
  FiCheck,
  FiHelpCircle,
} from "react-icons/fi";

const sidebarItems = [
  {
    label: "Data Handling",
    icon: <FiDatabase />,
    subItems: [
      {
        label: "Load Data",
      },
      {
        label: "Normalize",
      },
    ],
  },
  {
    label: "Processing",
    icon: <FiRefreshCcw />,
    subItems: [
      {
        label: "Feature Selection",
      },
      {
        label: "Feature Classification",
      },
    ],
  },
  {
    label: "Validation",
    icon: <FiCheck />,
    subItems: [],
  },
  {
    label: "Help",
    icon: <FiHelpCircle />,
    subItems: [],
  },
];

export default sidebarItems;
