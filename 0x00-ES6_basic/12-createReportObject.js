export default function createReportObject(employeesList) {
  return {
    allEmployes: employeesList,
    getNumberOfdepartments(employeesList) {
        return Object.keys(employeesList).length;
    },
  };
}