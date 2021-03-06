const COLUMN_NAMES_2018 = {
    TIMESTAMP: 'Timestamp',
    AGE: 'Age',
    SEX: 'Gender',
    POSITION: 'Position',
    // EUROPE_EXPERIENCE: 'Опыт работы в Европе',
    TOTAL_EXPERIENCE: 'Years of experience',
    CITY: 'City',
    CURRENT_SALARY: 'Current Salary',
    PREVIOUS_SALARY: 'Salary one year ago',
    FIRST_EUROPE_SALARY: 'Salary two years ago',
    EUROPE_JOB_COUNT: '',
    WORK_LANGUAGE: 'Main language at work',
    COMPANY_SIZE: 'Company size',
    COMPANY_TYPE: 'Company type',
    SENIORITY_LEVEL: 'Your level'
};

const COLUMN_NAMES_2017 = {
    TIMESTAMP: 'Отметка времени',
    AGE: 'Возраст',
    SEX: 'Пол',
    POSITION: 'Position',
    EUROPE_EXPERIENCE: 'Опыт работы в Европе',
    TOTAL_EXPERIENCE: 'Опыт работы в целом',
    CITY: 'Город',
    CURRENT_SALARY: 'Текущая ЗП',
    PREVIOUS_SALARY: 'ЗП год назад',
    FIRST_EUROPE_SALARY: 'Какая была первая ЗП в Европе',
    EUROPE_JOB_COUNT: 'Какая по счету у вас сейчас работа в Европе',
    WORK_LANGUAGE: 'Основной язык на работе',
    COMPANY_SIZE: 'Размер компании',
    COMPANY_TYPE: 'Тип компании',
    SENIORITY_LEVEL: 'Уровень'
};

let TIMESTAMP = COLUMN_NAMES_2018.TIMESTAMP;
let AGE = COLUMN_NAMES_2018.AGE;
let SEX = COLUMN_NAMES_2018.SEX;
let POSITION = COLUMN_NAMES_2018.POSITION;
let TOTAL_EXPERIENCE = COLUMN_NAMES_2018.TOTAL_EXPERIENCE;
let CITY = COLUMN_NAMES_2018.CITY;
let CURRENT_SALARY = COLUMN_NAMES_2018.CURRENT_SALARY;
let PREVIOUS_SALARY = COLUMN_NAMES_2018.PREVIOUS_SALARY;
let FIRST_EUROPE_SALARY = COLUMN_NAMES_2018.FIRST_EUROPE_SALARY;
let EUROPE_JOB_COUNT = 'Какая по счету у вас сейчас работа в Европе';
let WORK_LANGUAGE = COLUMN_NAMES_2018.WORK_LANGUAGE;
let COMPANY_SIZE = COLUMN_NAMES_2018.COMPANY_SIZE;
let COMPANY_TYPE = COLUMN_NAMES_2018.COMPANY_TYPE;
let SENIORITY_LEVEL = COLUMN_NAMES_2018.SENIORITY_LEVEL;

updateColumnNames(COLUMN_NAMES_2018);

function updateColumnNames(CURRENT_COLUMN_NAMES) {
    TIMESTAMP = CURRENT_COLUMN_NAMES.TIMESTAMP;
    AGE = CURRENT_COLUMN_NAMES.AGE;
    SEX = CURRENT_COLUMN_NAMES.SEX;
    POSITION = CURRENT_COLUMN_NAMES.POSITION;
    TOTAL_EXPERIENCE = CURRENT_COLUMN_NAMES.TOTAL_EXPERIENCE;
    CITY = CURRENT_COLUMN_NAMES.CITY;
    CURRENT_SALARY = CURRENT_COLUMN_NAMES.CURRENT_SALARY;
    PREVIOUS_SALARY = CURRENT_COLUMN_NAMES.PREVIOUS_SALARY;
    FIRST_EUROPE_SALARY = CURRENT_COLUMN_NAMES.FIRST_EUROPE_SALARY;
    EUROPE_JOB_COUNT = 'Какая по счету у вас сейчас работа в Европе';
    WORK_LANGUAGE = CURRENT_COLUMN_NAMES.WORK_LANGUAGE;
    COMPANY_SIZE = CURRENT_COLUMN_NAMES.COMPANY_SIZE;
    COMPANY_TYPE = CURRENT_COLUMN_NAMES.COMPANY_TYPE;
    SENIORITY_LEVEL = CURRENT_COLUMN_NAMES.SENIORITY_LEVEL;
}

