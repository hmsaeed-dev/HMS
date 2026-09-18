export interface Course {
  code: string;
  title: string;
  type: "Theory" | "Lab";
  credits: number;
  grade?: string;
  gradePoints?: string;
  teacher: string;
  dept: string;
  caseStudyHref?: string;
}

export interface Semester {
  id: string;
  title: string;
  statusHint?: string;
  narrative: string[];
  credits: number;
  gpaText?: string;
  status: string;
  courses: Course[];
}

export interface TimelineEntry {
  year: string;
  tag: string;
  title: string;
  description: string;
}

export interface ScoreItem {
  score: string;
  max: string;
  label: string;
}

export const academicsData = {
  hero: {
    title: "Academics",
    intro: "BSc Computer Science, UET Taxila",
    runningStat: "Two semesters in. Semester 1 SGPA: 3.96 (Semester 2 in progress).",
  },
  semesters: [
    {
      id: "sem1-breakdown",
      title: "Fall 2025 — Semester 1",
      narrative: [
        "First semester was mostly about recalibrating — figuring out how “self-taught, gap-year logic” translates into actual coursework and deadlines. Programming Fundamentals was the one I cared most about getting right, partly because it's the one that actually maps to what I want to build later. ICT and Calculus were more about relearning discipline than learning new material.",
        "Finished with a 3.96 SGPA. Not going to pretend that number means more than it does — semester 1 is usually the easiest one to do well in.",
      ],
      credits: 18,
      gpaText: "SGPA: 3.96",
      status: "Promoted",
      courses: [
        {
          code: "GE-101",
          title: "Application of Information and Communication Technologies",
          type: "Theory",
          credits: 3,
          grade: "A",
          gradePoints: "4.00",
          teacher: "Dr. Muhammad Munwar Iqbal",
          dept: "CSD",
        },
        {
          code: "GE-101-L",
          title: "Application of Information and Communication Technologies Lab",
          type: "Lab",
          credits: 1,
          grade: "A-",
          gradePoints: "3.67",
          teacher: "Dr. Muhammad Munwar Iqbal",
          dept: "CSD",
        },
        {
          code: "CS-101",
          title: "Programming Fundamentals",
          type: "Theory",
          credits: 3,
          grade: "A",
          gradePoints: "4.00",
          teacher: "Dr. Syed Aun Irtaza",
          dept: "CSD",
        },
        {
          code: "CS-101-L",
          title: "Programming Fundamentals Lab",
          type: "Lab",
          credits: 1,
          grade: "A-",
          gradePoints: "3.67",
          teacher: "Muhamamd Faheem Saleem",
          dept: "CSD",
        },
        {
          code: "GE-102",
          title: "Calculus and Analytical Geometry",
          type: "Theory",
          credits: 3,
          grade: "A",
          gradePoints: "4.00",
          teacher: "Yusra Taj",
          dept: "VFD",
        },
        {
          code: "GE-103",
          title: "Functional English",
          type: "Theory",
          credits: 3,
          grade: "A",
          gradePoints: "4.00",
          teacher: "Rabia Ramzan",
          dept: "HSSD",
        },
        {
          code: "GE-104",
          title: "Ideology and Constitution of Pakistan",
          type: "Theory",
          credits: 2,
          grade: "A",
          gradePoints: "4.00",
          teacher: "Ayesha Syed",
          dept: "VFD",
        },
        {
          code: "GE-105",
          title: "Islamic Studies/Ethics",
          type: "Theory",
          credits: 2,
          grade: "A",
          gradePoints: "4.00",
          teacher: "Muhammad Irfan",
          dept: "HSSD",
        },
      ],
    },
    {
      id: "sem2-breakdown",
      title: "Spring 2026 — Semester 2",
      statusHint: "(In progress)",
      narrative: [
        "Second semester is where it starts feeling like an actual CS degree — OOP, Digital Logic Design, Probability & Statistics. This is the stretch I'm more interested in, and also the one I'm more likely to actually struggle with, which feels like the right kind of hard.",
        "Still in progress — grades aren't final, so there isn't a number to report yet. I'll update this once the semester's done instead of leaving a half-true stat sitting here.",
      ],
      credits: 18,
      status: "In Progress",
      courses: [
        {
          code: "CS-102",
          title: "Object Oriented Programming",
          type: "Theory",
          credits: 3,
          teacher: "Hasnat Ahmad",
          dept: "CSD",
          caseStudyHref: "/work/vehicle-sys",
        },
        {
          code: "CS-102-L",
          title: "Object Oriented Programming Lab",
          type: "Lab",
          credits: 1,
          teacher: "Muhamamd Faheem Saleem",
          dept: "CSD",
        },
        {
          code: "CS-103",
          title: "Digital Logic Design",
          type: "Theory",
          credits: 2,
          teacher: "Dr. Farrukh Zeeshan Khan",
          dept: "CSD",
          caseStudyHref: "/work/detector",
        },
        {
          code: "CS-103-L",
          title: "Digital Logic Design Lab",
          type: "Lab",
          credits: 1,
          teacher: "Hasnat Ahmad",
          dept: "CSD",
        },
        {
          code: "EN-101",
          title: "Technical and Business Writing",
          type: "Theory",
          credits: 3,
          teacher: "Rabia Ramzan",
          dept: "HSSD",
        },
        {
          code: "MT-101",
          title: "Probability & Statistics",
          type: "Theory",
          credits: 3,
          teacher: "Dr. Syed Sabyel Haider",
          dept: "MSD",
        },
        {
          code: "GE-107",
          title: "Applied Physics",
          type: "Theory",
          credits: 3,
          teacher: "Dr. Ali Murad",
          dept: "VFD",
        },
        {
          code: "GE-108",
          title: "Pak Studies",
          type: "Theory",
          credits: 2,
          teacher: "Ms. Atiqa Hasrat",
          dept: "VFD",
        },
      ],
    },
  ] as Semester[],
  preUniversity: [
    {
      year: "2024",
      tag: "Intermediate",
      title: "FSc (Pre-Engineering)",
      description: "Jinnah Education System, Taxila • 90% (Distinction)",
    },
    {
      year: "2022",
      tag: "Matriculation",
      title: "Matriculation (Science)",
      description: "Jinnah Education System, Taxila • Grade A+",
    },
  ] as TimelineEntry[],
  entranceExams: [
    {
      score: "315",
      max: "400",
      label: "ECAT",
    },
    {
      score: "182",
      max: "200",
      label: "MDCAT",
    },
  ] as ScoreItem[],
};
